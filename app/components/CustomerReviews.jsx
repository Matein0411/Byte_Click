"use client";

import { useState } from "react";
import { useAllReview } from "@/lib/firestore/reviews/read";
import { Rating } from "@mui/material";

export default function CustomerReviews() {
  const { data: reviews, error, isLoading } = useAllReview();
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;

  // Filtrar solo reseñas con calificación mayor a 3 estrellas
  const filteredReviews = reviews?.filter((review) => review.rating > 3) || [];

  // Paginación
  const startIndex = currentPage * reviewsPerPage;
  const paginatedReviews = filteredReviews.slice(startIndex, startIndex + reviewsPerPage);

  return (
    <section className="flex justify-center">
      <div className="w-full p-5 md:max-w-[900px] flex flex-col gap-3">
        <h1 className="text-center font-semibold text-xl">Our customers love</h1>

        {isLoading && <p className="text-gray-500 text-center">Loading reviews...</p>}
        {error && <p className="text-red-500 text-center">Failed to load reviews.</p>}
        {!isLoading && !error && paginatedReviews.length === 0 && (
          <p className="text-gray-500 text-center">No reviews available.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {paginatedReviews.map((review, index) => (
            <div key={index} className="flex flex-col gap-2 p-4 rounded-lg justify-center items-center border">
              <img
                src={review.photoURL || "https://via.placeholder.com/150"}
                className="h-32 w-32 rounded-full object-cover"
                alt="User Avatar"
              />
              <h1 className="text-sm font-semibold">{review.displayName || "Anonymous"}</h1>
              <Rating size="small" value={review.rating} precision={0.5} readOnly />
              <p className="text-sm text-gray-500 text-center">{review.message || "No message provided."}</p>
            </div>
          ))}
        </div>

        {/* Controles de paginación */}
        {filteredReviews.length > reviewsPerPage && (
          <div className="flex justify-center gap-3 mt-4">
            <button
              className="px-3 py-1 bg-gray-300 rounded-lg disabled:opacity-50"
              disabled={currentPage === 0}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
            <button
              className="px-3 py-1 bg-gray-300 rounded-lg disabled:opacity-50"
              disabled={startIndex + reviewsPerPage >= filteredReviews.length}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
