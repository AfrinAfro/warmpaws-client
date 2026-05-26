import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-cyan-400 mb-3">
            WarmPaws
          </h2>

          <p className="text-gray-300">
            Your trusted winter pet care companion.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">
            Contact Info
          </h3>

          <p>Email: support@warmpaws.com</p>

          <p>Phone: +880 1234-567890</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">
            <FaFacebook />

            <FaInstagram />

            <FaTwitter />
          </div>

          <p className="mt-4 text-gray-400">
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;