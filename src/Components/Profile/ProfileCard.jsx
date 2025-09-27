import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const [userDetails, setUserDetails] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");
    if (!authtoken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [navigate]);

  const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");

      if (!authtoken) {
        navigate("/login");
      } else {
        // Replace API_URL with your actual endpoint
        const response = await fetch(`/api/auth/user`, {
          headers: {
            Authorization: `Bearer ${authtoken}`,
            Email: email,
          },
        });
        if (response.ok) {
          const user = await response.json();
          setUserDetails(user);
          setUpdatedDetails(user);
        } else {
          throw new Error("Failed to fetch user profile");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => setEditMode(true);

  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");

      if (!authtoken || !email) {
        navigate("/login");
        return;
      }

      const payload = { ...updatedDetails };
      const response = await fetch(`/api/auth/user`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authtoken}`,
          "Content-Type": "application/json",
          Email: email,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        sessionStorage.setItem("name", updatedDetails.name);
        sessionStorage.setItem("phone", updatedDetails.phone);
        setUserDetails(updatedDetails);
        setEditMode(false);
        alert("Profile Updated Successfully!");
        navigate("/");
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {editMode ? (
          <>
            <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
              Edit Profile
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email (Read-only) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={userDetails.email || ""}
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={updatedDetails.name || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={updatedDetails.phone || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              {/* Save Button */}
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Save Changes
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
              Welcome, {userDetails.name || "User"}
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold text-gray-800">Email:</span>{" "}
                {userDetails.email || "waqaskhan@gmail.com"}
              </p>
              <p>
                <span className="font-semibold text-gray-800">Phone:</span>{" "}
                {userDetails.phone || "0345209379527"}
              </p>
            </div>
            <button
              onClick={handleEdit}
              className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;
