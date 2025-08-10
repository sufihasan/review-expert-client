import React, { Suspense, use, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { useFormatDate } from '../../hooks/useFormatDate';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Reviews from './Reviews';
import Swal from 'sweetalert2';
import { DarkContext } from '../../contexts/DarkContext';


const ServiceDetails = () => {
    const navigate = useNavigate();
    const loadedService = useLoaderData();
    const { user } = useAuth();
    const { dmode } = use(DarkContext); // for dark mode
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [showWarning, setShowWarning] = useState(false);

    // console.log(dmode);

    const { ServiceImage, ServiceTitle, description,
        price, category, date, Website, CompanyName, userEmail, _id } = loadedService;
    const { formatDateToDMY } = useFormatDate();


    useEffect(() => {
        if (!ServiceTitle) {
            navigate('*');
        }
    }, [ServiceTitle, navigate]);


    useEffect(() => {

        fetch(`https://ass11-b-ele-server-ser.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);

            })
            .catch(err => {
                console.error('Error fetching reviews:', err);

            });
    }, [_id]);








    const handleAddReview = (e) => {
        e.preventDefault();

        // setNumber(num + 1);

        if (rating === 0) {
            setShowWarning(true);
            return;
        }

        //Clear warning because for valid rating
        setShowWarning(false);


        if (!user) {
            Swal.fire({
                title: "Please login first to add a review",
                icon: "warning",
                draggable: true
            });
            return;
        }

        const reviewText = e.target.review.value;

        // console.log('Review Text:', reviewText);
        // console.log('Rating:', rating);
        const reviewerName = user.displayName;
        const reviewerPhoto = user.photoURL;
        const reviewerEmail = user.email;
        const reviewDate = new Date().toISOString();
        const serviceId = _id;
        const serviceTitle = ServiceTitle;
        const serviceImage = ServiceImage;

        const reviewInfo = {
            reviewText, rating, reviewerName, reviewerPhoto,
            reviewerEmail, reviewDate, serviceId, serviceTitle, serviceImage
        };

        // console.log(reviewInfo);

        axios.post('https://ass11-b-ele-server-ser.vercel.app/reviews', reviewInfo)
            .then(res => {
                // console.log(res.data);

                setReviews(prev => [reviewInfo, ...prev]); //  optimistic or local update
                e.target.review.value = '';
                setRating(0);
                if (res.data.insertedId) {
                    Swal.fire({

                        icon: "success",
                        title: "Your review has been Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                // console.log(error);
            })
    };


    if (!ServiceTitle) {
        return <Loading />
    }

    let bgColor;
    let textColor;
    if (dmode) {
        bgColor = 'black';
        textColor = 'white';
    }
    else {
        bgColor = 'white'
        textColor = 'black'
    }

    const handleConform = () => {
        Swal.fire({
            title: "Good job!",
            text: "Confirm Service!",
            icon: "success",
            background: bgColor,
            color: textColor
        });
    }



    return (
        <div className='mt-5 w-11/12 mx-auto'>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl text-center dark:text-gray-200 dark:border-slate-700  border border-gray-200">Details</h2>

                    <div className="card  w-full bg-base-100 shadow-xl mt-5 dark:bg-gray-700 dark:text-gray-200">
                        <figure className="px-5 lg:px-10 pt-5 lg:pt-10">
                            <img src={ServiceImage} alt="Shoes" className=" lg:h-96 w-full" />
                        </figure>
                        <div className="card-body items-center ">
                            <h2 className="card-title font-bold">{ServiceTitle}</h2>
                            <div className='grid grid-cols-2 gap-3'>
                                <h2><span className='font-semibold'>Price</span>: {price}</h2>
                                <h2><span className='font-semibold'>category</span>: {category}</h2>
                                <h2><span className='font-semibold'>CompanyName</span>: {CompanyName}</h2>
                                <h2><span className='font-semibold'>Website</span>: {Website}</h2>
                                <h2><span className='font-semibold'>Email</span>: {userEmail}</h2>
                                <h2><span className='font-semibold'>date</span>: {formatDateToDMY(date)}</h2>

                            </div>
                            <p>{description}</p>
                            <div className="card-actions">
                                <button onClick={handleConform} className="btn bg-blue-500 hover:bg-blue-600 text-white border-0">Confirm Service</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="lg:w-1/2">
                    <h2 className="text-3xl text-center dark:text-gray-200 dark:border-slate-700  border border-gray-200">Reviews</h2>

                    <div>

                        <form onSubmit={handleAddReview} className='my-5 space-y-3' >


                            <textarea className="textarea input input-bordered w-full dark:bg-gray-700 dark:text-gray-200 "
                                placeholder="Enter your review here"
                                name="review" required
                            ></textarea>

                            <span className='block'>
                                <Rating
                                    emptySymbol={<FaRegStar className="text-2xl text-yellow-400" />}
                                    fullSymbol={<FaStar className="text-2xl text-yellow-400" />}
                                    initialRating={rating}
                                    onChange={(rate) => {
                                        setRating(rate);
                                        setShowWarning(false);  // Clear warning as soon as user selects a rating
                                    }}
                                />

                            </span>



                            {showWarning && (
                                <p className="text-red-500 text-sm mt-1">Rating is required.</p>
                            )}



                            <input type="submit" className='btn border-0 bg-blue-500 hover:bg-blue-600' value="Add Review" />

                        </form>

                    </div>

                    <Reviews reviews={reviews} />


                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;