import React from "react";
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, total_view, rating } =
    news;

  const publishedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <div className="card bg-base-100 shadow-sm rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <span className=" flex gap-3">
          <FaRegBookmark className="text-gray-500 cursor-pointer hover:text-gray-700" />
          <FaShareAlt className="text-gray-500 cursor-pointer hover:text-gray-700" />
        </span>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="font-bold text-lg leading-snug text-gray-800">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4 py-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pb-4 text-sm text-gray-600">
        {details.slice(0, 200)}...
        <Link
          to={`/news-details/${id}`}
          className="text-orange-500 font-semibold cursor-pointer"
        >
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t px-4 py-3 text-sm">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "fill-orange-400" : "text-gray-300"
              }
            />
          ))}
          <span className="text-gray-700 font-semibold">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
