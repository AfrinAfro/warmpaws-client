import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";

import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
    createUser,
    updateUserProfile,
    googleLogin,
  } = useAuth();

  const [showPassword, setShowPassword] =
    useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;

    const photo = form.photo.value;

    const email = form.email.value;

    const password = form.password.value;

    // Validation

    if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Password must contain an uppercase letter"
      );
    }

    if (!/[a-z]/.test(password)) {
      return toast.error(
        "Password must contain a lowercase letter"
      );
    }

    if (password.length < 6) {
      return toast.error(
        "Password must be at least 6 characters"
      );
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success(
              "Registration Successful"
            );

            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Google Login Successful");

        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold text-center mb-8">
          Register
        </h2>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >
          <div>
            <label className="font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="input input-bordered w-full mt-2"
            />
          </div>

          <div>
            <label className="font-medium">
              Photo URL
            </label>

            <input
              type="text"
              name="photo"
              required
              placeholder="Enter photo URL"
              className="input input-bordered w-full mt-2"
            />
          </div>

          <div>
            <label className="font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
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

          <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white border-none w-full">
            Register
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
          Already have an account?

          <Link
            to="/login"
            className="text-cyan-500 font-bold ml-2"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;