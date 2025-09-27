import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserDropdown from './UserDropdown';

function Navbar() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    localStorage.removeItem("doctorData");
    setIsLoggedIn(false);

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("reviewFormData_")) {
        localStorage.removeItem(key);
      }
    }
    setEmail('');
    window.location.reload();
  };

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) {
      setIsLoggedIn(true);
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    if (email) {
      const extractedUsername = email.split('@')[0];
      setUsername(extractedUsername);
    }
  }, [email]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDisplayed(true);
      } else {
        setIsDisplayed(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const toggleMenu = () => setIsDisplayed(!isDisplayed);
  const hideMenu = () => window.innerWidth < 768 && setIsDisplayed(false);
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);
  const handleDropdownItemClick = () => setIsDropdownVisible(false);

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-semibold text-gray-900 no-underline"
        >
          StayHealthy🩺
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div
        className="text-2xl text-gray-800 cursor-pointer md:hidden"
        onClick={toggleMenu}
      >
        <i className={`fa ${isDisplayed ? 'fa-times' : 'fa-bars'}`}></i>
      </div>

      {/* Links */}
      {isDisplayed && (
        <ul
          className={`${
            isDisplayed
              ? 'flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-white shadow-md md:shadow-none px-6 md:px-0 py-4 md:py-0 z-50 items-center gap-6'
              : 'hidden md:flex items-center gap-8'
          }`}
        >
          <li>
            <Link
              to="/"
              onClick={hideMenu}
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/appointments"
              onClick={hideMenu}
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Appointments
            </Link>
          </li>
          <li>
            <Link
              to="/HealthBlog"
              onClick={hideMenu}
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Health Blog
            </Link>
          </li>
          <li>
            <Link
              to="/review-form"
              onClick={hideMenu}
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Reviews
            </Link>
          </li>

          {isLoggedIn ? (
            <>
              <li>
                <span
                  onClick={toggleDropdown}
                  className="text-gray-900 font-semibold cursor-pointer hover:text-blue-600"
                >
                  {username}
                </span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="border border-blue-400 text-blue-600 font-medium rounded-full px-5 py-2 hover:bg-blue-50 transition duration-200"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/signup"
                  onClick={hideMenu}
                >
                  <button className="border border-blue-400 text-blue-600 font-medium rounded-full px-5 py-2 hover:bg-blue-50 transition duration-200">
                    Sign Up
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  onClick={hideMenu}
                >
                  <button className="border border-blue-400 text-blue-600 font-medium rounded-full px-5 py-2 hover:bg-blue-50 transition duration-200">
                    Login
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      )}

      {isDropdownVisible && (
        <UserDropdown ref={dropdownRef} onItemClick={handleDropdownItemClick} />
      )}
    </nav>
  );
}

export default Navbar;
