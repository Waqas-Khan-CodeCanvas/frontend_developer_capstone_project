import React from "react";
import { Link } from "react-router-dom";

function UserDropdown({ onItemClick }) {
  return (
    <div className="absolute top-16 right-8 bg-white shadow-lg rounded-lg border border-gray-100 flex flex-col w-40 p-2 z-50">
      <Link
        to="/profile"
        onClick={onItemClick}
        className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition duration-150"
      >
        Profile
      </Link>
      <Link
        to="/reports"
        onClick={onItemClick}
        className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition duration-150"
      >
        Reports
      </Link>
    </div>
  );
}

export default UserDropdown;
