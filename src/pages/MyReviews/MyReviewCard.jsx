import React, { use, useState } from 'react';
import { useFormatDate } from '../../hooks/useFormatDate';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UpdateReviewModal from './UpdateReviewModal';

const MyReviewCard = ({ myReviewCreatedByPromise }) => {
    const myreviews = use(myReviewCreatedByPromise);
    const { formatDateToDMY } = useFormatDate();
    const [showReviews, setShowReviews] = useState(myreviews);
    const [revData, setRevData] = useState({});
    // const numRating = revData.rating;
    const [rating, setRating] = useState(0);
    // const [reviewText, setReviewText] = useState('');  // new add



    // console.log(revData);
    // console.log(rating);


    // review delete start
    const handleReviewDelete = (id) => {
        // console.log('delete review', id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://ass11-b-ele-server-ser.vercel.app/reviews/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount) {

                            const remaingReviews = showReviews.filter(revw => revw._id !== id);
                            setShowReviews(remaingReviews);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Review has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }
    // revidew delete end

    const handleUpdateClick = (review) => {
        setRevData(review);
        setRating(review.rating);
        // setReviewText(review.reviewText);
        document.getElementById('my_modal_3').showModal();
    };

    const handleSubmit = (e, id) => {
        e.preventDefault();
        const updatedText = e.target.review.value;
        // console.log('Updated Text:', updatedText);
        // console.log('Updated rating:', rating);
        // console.log('id of this', id);

        const updatedReview = {
            reviewText: updatedText,
            rating: rating,
            // reviewDate: new Date(),
        };


        fetch(`https://ass11-b-ele-server-ser.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedReview),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    // Update review in the list
                    const updatedList = showReviews.map((rev) =>
                        rev._id === id ? { ...rev, ...updatedReview } : rev
                    );
                    setShowReviews(updatedList);

                    Swal.fire({
                        icon: 'success',
                        title: 'Review Updated!',
                        timer: 1500,
                        showConfirmButton: false,
                    });

                    // Optional: Close modal manually
                    document.getElementById('my_modal_3').close();
                }
            });


    };

    return (
        <div>

            <h1 className='text-center dark:text-gray-200'>Total Review: {showReviews.length}</h1>

            {/* modal start */}

            <UpdateReviewModal
                review={revData}
                rating={rating}
                setRating={setRating}
                // reviewText={reviewText}
                // setReviewText={setReviewText}
                handleSubmit={handleSubmit}
            ></UpdateReviewModal>

            {/* modal end */}

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {showReviews.length > 0 ?
                    showReviews.map(myReview => <div key={myReview._id} className="card w-full bg-base-100 shadow-xl my-4">
                        <div className="card-body dark:rounded dark:bg-gray-800 dark:text-gray-200">
                            <p className='text-2xl font-semibold'>Service Title: {myReview.serviceTitle}</p>
                            {/* <div className="flex items-center gap-3">
                                <img className="w-10 rounded-full mr-2" src={myReview.reviewerPhoto} alt="" />
                                <h2 className="card-title">{myReview.reviewerName}</h2>

                            </div> */}
                            <p>Date: {formatDateToDMY(myReview.reviewDate)}</p>
                            <p>Review: {myReview.reviewText}</p>
                            <Rating
                                emptySymbol={<FaRegStar className="text-2xl text-yellow-400" />}
                                fullSymbol={<FaStar className="text-2xl text-yellow-400" />}
                                initialRating={myReview.rating}
                                readonly
                            // onChange={(rate) => setRating(rate)}
                            />



                            <div className='space-x-3'>
                                <button onClick={() => handleUpdateClick(myReview)} className="btn border-0 text-white bg-blue-500 hover:bg-blue-600">
                                    Update
                                </button>
                                <button onClick={() => handleReviewDelete(myReview._id)} className='btn btn-secondary'>Delete</button>
                            </div>
                        </div>
                    </div>) : <p className="p-4 text-xl">0 review</p>
                }
            </div>

        </div>
    );
};

export default MyReviewCard;