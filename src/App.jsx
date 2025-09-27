import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import ProfileCard from './Components/Profile/ProfileCard';
import Reports from './Components/ReportsLayout/ReportsLayout';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Services from './Components/Services';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import { NotificationProvider } from './Components/Notification/NotificationContext';
import HealthBlog from './Components/HealthBlog/HealthBlog';
import SelfCheckup from './Components/SelfCheckup/SelfCheckup';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Notification />
        {/* <Navbar /> */}
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<ProfileCard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/services" element={<Services />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/booking-consultation" element={<BookingConsultation />} />
          <Route path='/review-form' element={<ReviewForm />} />
          <Route path='/HealthBlog' element={<HealthBlog />} />
          <Route path='/self-checkup' element={<SelfCheckup />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
