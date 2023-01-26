import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import ReviewForm from "./Reviews/ReviewForm";
import EditReviewForm from "./Reviews/EditReviewForm";
import SeeReviews from "./Reviews/SeeReviews";
import AllReviews from "./Reviews/AllReviews";
import UserReviews from "./Reviews/UserReviews";
import "./Styles.css";
import { useAuthContext } from "./UseToken";
import { Context } from "./Store";
import React, { useContext, useEffect } from "react";
import NewAlbums from "./Reviews/NewAlbums";

function App() {
    const [state, dispatch] = useContext(Context);
    const { token } = useAuthContext();

    useEffect(() => {
        const accountsUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/token/`;
        const fetchConfig = {
            method: "GET",
            credentials: "include",
        };
        fetch(accountsUrl, fetchConfig)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    let accountData = {
                        id: data.account["id"],
                        email: data.account["email"],
                        username: data.account["username"],
                    };
                    dispatch({ type: "update_current", payload: accountData });
                }
            });
        if (token) {
            dispatch({ type: "login" });
        } else {
            dispatch({ type: "logout" });
        }
    }, [token, dispatch]);

    return (
        <>
            <NavBar />
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/reviews/new" element={<ReviewForm />} />
                    <Route
                        path="/reviews/update"
                        element={<EditReviewForm />}
                    />
                    <Route path="/reviews" element={<SeeReviews />} />
                    <Route path="/reviews/all" element={<AllReviews />} />
                    <Route path="/reviews/user" element={<UserReviews />} />
                    <Route path="/albums/new" element={<NewAlbums />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
