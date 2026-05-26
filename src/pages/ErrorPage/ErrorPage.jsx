import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-slate-100">
      <h1 className="text-7xl font-bold text-red-500 mb-4">
        404
      </h1>

      <h2 className="text-3xl font-bold mb-3">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-6">
        Oops! The page you are looking for does not exist.
      </p>

      <Link to="/">
        <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white border-none">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;