import { createContext, useContext, useState } from "react";

export const ReviewsContext = createContext();

export function ReviewsProvider({ children }) {
    const [ reviews, setReviews] = useState([])

    const addReview = (movieId, review) => {
        setReviews((prevReviews)=> {
        const updateReviews = {
            ...prevReviews, [movieId]: [...prevReviews[movieId] || [], review]
        }
        localStorage.setItem('reviews', JSON.stringify(reviews))
        return updateReviews
    })
    }

    const removeReview = (movieId, reviewId) => {
        setReviews((prevReviews) => {
            if (!prevReviews[movieId]) return prevReviews;

            const updatedMovieReviews = prevReviews[movieId].filter((index) => index !== reviewId);
            const updatedReviews = { ...prevReviews, [movieId]: updatedMovieReviews };

            if (updatedReviews[movieId].length === 0) {
                delete updatedReviews[movieId];
            }
            
            localStorage.setItem("movieReviews", JSON.stringify(updatedReviews));
            return updatedReviews;
        });
    }

    const getReviews = (movieId) => {
        return reviews[movieId] || [];
    };

    return (
        <ReviewsContext.Provider value={{ reviews, addReview, removeReview, getReviews }}>
            {children}
        </ReviewsContext.Provider>
    );
}

export const useReviews = () => {
    const context = useContext(ReviewsContext);
    if (context === undefined) {
        throw new Error("useReviews debe estar dentro del proveedor ReviewsProvider");
    }
    return context;
};