import React, { useTransition } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const UpdateReviewModal = ({
    review,
    rating,
    setRating,
    reviewText,
    setReviewText,
    handleSubmit
}) => {

    const [isPending, startTransition] = useTransition();

    if (!review) return null;

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                <form onSubmit={(e) => handleSubmit(e, review._id)} className="my-5 space-y-3">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Service Title</legend>
                        <input
                            type="text"
                            readOnly
                            className="input"
                            defaultValue={review.serviceTitle}
                            placeholder="Type here"
                        />
                    </fieldset>

                    <textarea
                        key={review._id}
                        className="textarea input input-bordered w-full"
                        placeholder="Enter your review here"
                        defaultValue={review.reviewText}
                        name="review"
                        required
                    ></textarea>

                    <span className="block">
                        <Rating
                            emptySymbol={<FaRegStar className="text-2xl text-yellow-400" />}
                            fullSymbol={<FaStar className="text-2xl text-yellow-400" />}
                            initialRating={rating}
                            onChange={(rate) => setRating(rate)}
                        />
                    </span>

                    {rating === 0 && (
                        <p className="text-red-500 text-sm mt-1">Rating is required.</p>
                    )}

                    <input type="submit" className="btn block" value="Update Review" />
                </form>
            </div>
        </dialog>
    );
};

export default UpdateReviewModal;