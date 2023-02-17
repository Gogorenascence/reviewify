import { useLocation } from "react-router-dom";
import ReviewModal from "./ReviewModal";
import { useGetReviewsQuery } from "../store/reviewsApi";
import { Spinner } from "react-bootstrap";
import { useState } from "react";

function SeeReviews(props) {
    const { data, error, isLoading } = useGetReviewsQuery();
    const location = useLocation();
    const album_id = location.state["id"];
    const [reviews, setReviews] = useState('');

    let content

    if (isLoading) {
        content = <Spinner text="Loading..." />;

    }

    setReviews(data.reviews.filter((review) => review.album_id === album_id))

    return (
        <>
            <div className="App" style={{ marginTop: "30px" }}></div>
            {reviews.length > 0 ? (
                <container>
                    <div className="row justify-content-center">
                        {reviews.map((review) => {
                            return (
                                <div
                                    key={review.id}
                                    className="card mb-3 w-100 justify-content-around"
                                    style={{ maxWidth: "540px" }}>
                                    <ReviewModal
                                        id={review.id}
                                        img_url={review.img_url}
                                        title={review.title}
                                        rating={review.rating}
                                        best_song={review.best_song}
                                        worst_song={review.worst_song}
                                        reviewer_id={review.id}
                                        reviewer_name={review.username}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </container>
            ) : (
                <div
                    style={{ marginTop: "50px" }}
                    className="row justify-content-center">
                    No reviews yet!
                </div>
            )}
        </>
    );
}

export default SeeReviews;
