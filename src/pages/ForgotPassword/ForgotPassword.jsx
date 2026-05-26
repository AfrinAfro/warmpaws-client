import { useLocation } from "react-router-dom";

import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();

  const location = useLocation();

  const email = location.state || "";

  const handleResetPassword = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    resetPassword(email)
      .then(() => {
        toast.success(
          "Password reset email sent"
        );

        window.location.href =
          "https://mail.google.com";
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold text-center mb-8">
          Reset Password
        </h2>

        <form
          onSubmit={handleResetPassword}
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
              defaultValue={email}
              placeholder="Enter your email"
              className="input input-bordered w-full mt-2"
            />
          </div>

          <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white border-none w-full">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;