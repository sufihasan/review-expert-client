import React, { Suspense, useState } from 'react';
import { useLoaderData } from 'react-router';
import { useFormatDate } from '../../hooks/useFormatDate';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Reviews from './Reviews';


const ServiceDetails = () => {
    const loadedService = useLoaderData();
    const { user } = useAuth();
    // const [num, setNumber] = useState(0);
    const [newReview, setNewReview] = useState({});
    const [rating, setRating] = useState(0);
    const [showWarning, setShowWarning] = useState(false);



    const { ServiceImage, ServiceTitle, description,
        price, category, date, Website, CompanyName, userEmail, _id } = loadedService;
    const { formatDateToDMY } = useFormatDate();


    const reviewsPromise = fetch(`http://localhost:3000/reviews/${_id}`)
        .then(res => res.json());




    const handleAddReview = (e) => {
        e.preventDefault();

        // setNumber(num + 1);

        if (rating === 0) {
            setShowWarning(true);
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

        console.log(reviewInfo);

        axios.post('http://localhost:3000/reviews', reviewInfo)
            .then(res => {
                console.log(res.data);
                setNewReview(reviewInfo);
                e.target.review.value = '';
                setRating(0);
            })
            .catch(error => {
                console.log(error);
            })
    };


    return (
        <div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="w-1/2">
                    <h2 className="text-3xl text-center border">Details</h2>

                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={ServiceImage} alt="Shoes" className=" h-96 w-full" />
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
                                <button className="btn btn-primary">Confirm Service</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="w-1/2">
                    <h2 className="text-3xl text-center border">Reviews</h2>

                    <div>

                        <form onSubmit={handleAddReview} className='my-5 space-y-3' >


                            <textarea className="textarea input input-bordered w-full"
                                placeholder="Enter your review here"
                                name="review" required
                            ></textarea>

                            <span className='block'>
                                <Rating
                                    emptySymbol={<FaRegStar className="text-2xl text-yellow-400" />}
                                    fullSymbol={<FaStar className="text-2xl text-yellow-400" />}
                                    initialRating={rating}
                                    onChange={(rate) => setRating(rate)}
                                />

                            </span>
                            {rating === 0 && showWarning && (
                                <p className="text-red-500 text-sm mt-1">Rating is required.</p>
                            )}
                            <input type="submit" className='btn block' value="Add Review" />

                        </form>

                    </div>

                    {/* reviews for this service */}
                    <div>
                        <Suspense fallback={'review loading...'}>
                            <Reviews
                                reviewsPromise={reviewsPromise}
                                newReview={newReview}
                            ></Reviews>
                        </Suspense>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;