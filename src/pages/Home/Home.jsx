import { useEffect, useState } from "react";

import HeroSlider from "../../components/HeroSlider";
import ServiceCard from "../../components/ServiceCard";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <HeroSlider />

      {/* Popular Services */}
      <section
        id="services"
        className="py-16 px-4 md:px-10 bg-slate-100"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Popular Winter Care Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.serviceId}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Winter Tips */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Winter Care Tips For Pets
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              data-aos="zoom-in"
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-3">
                Keep Them Warm
              </h3>
              <p className="text-gray-600">
                Use warm clothing and avoid long
                outdoor exposure during cold nights.
              </p>
            </div>

            <div
              data-aos="zoom-in"
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-3">
                Healthy Nutrition
              </h3>
              <p className="text-gray-600">
                Provide nutritious food and enough
                water to maintain energy levels.
              </p>
            </div>

            <div
              data-aos="zoom-in"
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-3">
                Regular Grooming
              </h3>
              <p className="text-gray-600">
                Grooming keeps fur clean and prevents
                winter skin issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Vets */}
      <section className="py-16 px-4 md:px-10 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet Our Expert Vets
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              data-aos="fade-up"
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <img
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                src="/assets/vets/vet1.jpg"
                alt="Dr. Emily Watson"
              />
              <h3 className="text-xl font-bold">
                Dr. Emily Watson
              </h3>
              <p className="text-gray-500">
                Pet Nutrition Specialist
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <img
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                src="/assets/vets/vet2.jpg"
                alt="Dr. James Miller"
              />
              <h3 className="text-xl font-bold">
                Dr. James Miller
              </h3>
              <p className="text-gray-500">
                Winter Care Expert
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <img
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                src="/assets/vets/vet3.jpg"
                alt="Dr. Olivia Brown"
              />
              <h3 className="text-xl font-bold">
                Dr. Olivia Brown
              </h3>
              <p className="text-gray-500">
                Grooming Specialist
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <img
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                src="/assets/vets/vet4.jpg"
                alt="Dr. Noah Smith"
              />
              <h3 className="text-xl font-bold">
                Dr. Noah Smith
              </h3>
              <p className="text-gray-500">
                Indoor Pet Training Coach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section */}
      <section className="py-16 px-4 md:px-10">
        <div
          data-aos="fade-right"
          className="max-w-6xl mx-auto bg-cyan-500 rounded-3xl p-10 text-white text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            Join Our Winter Pet Community
          </h2>
          <p className="max-w-3xl mx-auto mb-6">
            Get expert winter pet care tips,
            seasonal discounts, and exclusive pet
            events directly in your inbox.
          </p>
          <button className="btn bg-white text-cyan-500 border-none">
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;