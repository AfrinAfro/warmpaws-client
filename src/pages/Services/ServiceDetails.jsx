import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";

const ServiceDetails = () => {
  const { id } = useParams();

  const { user } = useAuth();

  const [service, setService] = useState({});

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const singleService = data.find(
          (service) =>
            service.serviceId === parseInt(id)
        );

        setService(singleService);
      });
  }, [id]);

  const handleBookService = (e) => {
    e.preventDefault();

    toast.success(
      "Service Booked Successfully"
    );

    e.target.reset();
  };

  return (
    <div className="py-16 px-4 md:px-10 bg-slate-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <img
          src={service.image}
          alt=""
          className="w-full h-[450px] object-cover"
        />

        <div className="p-8">
          <h2 className="text-4xl font-bold mb-4">
            {service.serviceName}
          </h2>

          <p className="text-gray-600 mb-3">
            {service.description}
          </p>

          <div className="space-y-2 text-lg">
            <p>
              <span className="font-bold">
                Provider:
              </span>{" "}
              {service.providerName}
            </p>

            <p>
              <span className="font-bold">
                Email:
              </span>{" "}
              {service.providerEmail}
            </p>

            <p>
              <span className="font-bold">
                Category:
              </span>{" "}
              {service.category}
            </p>

            <p>
              <span className="font-bold">
                Price:
              </span>{" "}
              ${service.price}
            </p>

            <p>
              <span className="font-bold">
                Rating:
              </span>{" "}
              {service.rating}
            </p>

            <p>
              <span className="font-bold">
                Slots Available:
              </span>{" "}
              {service.slotsAvailable}
            </p>
          </div>

          {/* Booking Form */}

          <div className="mt-10">
            <h3 className="text-3xl font-bold mb-6">
              Book Service
            </h3>

            <form
              onSubmit={handleBookService}
              className="space-y-5"
            >
              <div>
                <label className="font-medium">
                  Name
                </label>

                <input
                  type="text"
                  defaultValue={user?.displayName}
                  readOnly
                  className="input input-bordered w-full mt-2"
                />
              </div>

              <div>
                <label className="font-medium">
                  Email
                </label>

                <input
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered w-full mt-2"
                />
              </div>

              <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white border-none">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;