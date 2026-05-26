import { useLocation, useNavigate, Link } from "react-router-dom";

import { useState } from "react";

import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";

import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUser, googleLogin } = useAuth();

  const [showPassword, setShowPassword] =
    useState(false);

  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;

    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Login Successful");

        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Google Login Successful");

        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold text-center mb-8">
          Login
        </h2>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <div>
            <label className="font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter your email"
              className="input input-bordered w-full mt-2"
            />
          </div>

          <div className="relative">
            <label className="font-medium">
              Password
            </label>

            <input
              type={
                showPassword ? "text" : "password"
              }
              name="password"
              required
              placeholder="Enter your password"
              className="input input-bordered w-full mt-2"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-12"
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          <div className="text-right">
            <Link
              state={email}
              to="/forgot-password"
              className="text-cyan-500 font-medium"
            >
              Forgot Password?
            </Link>
          </div>

          <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white border-none w-full">
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full mt-5"
        >
          <FaGoogle />

          Continue With Google
        </button>

        <p className="text-center mt-6">
          Don't have an account?

          <Link
            to="/register"
            className="text-cyan-500 font-bold ml-2"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;