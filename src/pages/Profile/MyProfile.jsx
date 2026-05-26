import { useState } from "react";

import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  const { user, updateUserProfile } =
    useAuth();

  const [name, setName] = useState(
    user?.displayName
  );

  const [photo, setPhoto] = useState(
    user?.photoURL
  );

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    updateUserProfile({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success(
          "Profile Updated Successfully"
        );
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-16 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <div className="text-center">
          <img
            src={user?.photoURL}
            alt=""
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-cyan-500"
          />

          <h2 className="text-3xl font-bold mt-4">
            {user?.displayName}
          </h2>

          <p className="text-gray-500 mt-2">
            {user?.email}
          </p>
        </div>

        <form
          onSubmit={handleUpdateProfile}
          className="space-y-5 mt-10"
        >
          <div>
            <label className="font-medium">
              Update Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="input input-bordered w-full mt-2"
            />
          </div>

          <div>
            <label className="font-medium">
              Update Photo URL
            </label>

            <input
              type="text"
              value={photo}
              onChange={(e) =>
                setPhoto(e.target.value)
              }
              className="input input-bordered w-full mt-2"
            />
          </div>

          <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white border-none w-full">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;