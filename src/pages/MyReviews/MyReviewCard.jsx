import React, { use, useEffect, useState } from 'react';
import { useFormatDate } from '../../hooks/useFormatDate';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyReviewCard = ({ myReviewCreatedByPromise }) => {
    const myreviews = use(myReviewCreatedByPromise);
    const { formatDateToDMY } = useFormatDate();
    const [showReviews, setShowReviews] = useState(myreviews);
    const [revData, serRevdata] = useState({});
    // const numRating = revData.rating;
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');  // new add



    console.log(revData);
    console.log(rating);


    // review delete start
    const handleReviewDelete = (id) => {
        console.log('delete review', id);

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

                fetch(`http://localhost:3000/reviews/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
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

    const handleAddReview = (e) => {
        e.preventDefault();
        console.log('print from handle add review');

        const newReviewText = reviewText;
        console.log(newReviewText);
    }

    return (
        <div>

            <h1 className='text-center'>Total Review: {showReviews.length}</h1>

            {/* modal start */}

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleAddReview} className='my-5 space-y-3' >
                        {/* <label >Service Title</label>
                        <input type="text" className='input input-bordered' /> */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Sevice Title</legend>
                            <input type="text" readOnly className="input" defaultValue={revData.serviceTitle} placeholder="Type here" />

                        </fieldset>

                        <textarea className="textarea input input-bordered w-full"
                            placeholder="Enter your review here"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)} // new add
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
                        {revData.rating === 0 && (
                            <p className="text-red-500 text-sm mt-1">Rating is required.</p>
                        )}
                        <input type="submit" className='btn block' value="Add Review" />

                    </form>

                </div>
            </dialog>

            {/* modal end */}

            <div>
                {showReviews.length > 0 ?
                    showReviews.map(myReview => <div key={myReview._id} className="card w-full bg-base-100 shadow-xl my-4">
                        <div className="card-body">
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
                                <button onClick={() => {
                                    document.getElementById('my_modal_3').showModal();
                                    serRevdata(myReview);
                                    setRating(myReview.rating);
                                    setReviewText(myReview.reviewText); // set current review text new add
                                }} className='btn btn-primary'>Update</button>
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