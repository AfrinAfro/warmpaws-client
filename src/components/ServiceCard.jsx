import { Link } from "react-router-dom";

import { useState } from "react";

const ServiceCard = ({ service }) => {
  const {
    serviceId,
    serviceName,
    image,
    price,
    rating,
  } = service;

  const [imageLoading, setImageLoading] =
    useState(true);

  return (
    <div
      data-aos="fade-up"
      className="card bg-white shadow-lg hover:shadow-2xl transition duration-300"
    >
      <figure className="relative">
        {imageLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-slate-100">
            <span className="loading loading-spinner loading-lg text-cyan-500"></span>
          </div>
        )}

        <img
          src={image}
          alt={serviceName}
          onLoad={() => setImageLoading(false)}
          className="h-64 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {serviceName}
        </h2>

        <p className="text-gray-600">
          Rating: {rating}
        </p>

        <p className="text-cyan-500 font-bold text-lg">
          ${price}
        </p>

        <div className="card-actions justify-end mt-4">
          <Link to={`/services/${serviceId}`}>
            <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white border-none">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;