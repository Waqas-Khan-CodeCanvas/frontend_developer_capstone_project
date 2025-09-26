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
import HealthTips from './Components/HealthTips/HealthTips';
import SelfCheckup from './Components/SelfCheckup/SelfCheckup';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Notification />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/frontend_developer_capstone_project" element={<LandingPage />} />
          <Route path="/frontend_developer_capstone_project/login" element={<Login />} />
          <Route path="/frontend_developer_capstone_project/signup" element={<SignUp />} />
          <Route path="/frontend_developer_capstone_project/profile" element={<ProfileCard />} />
          <Route path="/frontend_developer_capstone_project/reports" element={<Reports />} />
          <Route path="/frontend_developer_capstone_project/services" element={<Services />} />
          <Route path="/frontend_developer_capstone_project/instant-consultation" element={<InstantConsultation />} />
          <Route path="/frontend_developer_capstone_project/booking-consultation" element={<BookingConsultation />} />
          <Route path='/frontend_developer_capstone_project/review-form' element={<ReviewForm />} />
          <Route path='/frontend_developer_capstone_project/health-tips' element={<HealthTips />} />
          <Route path='/frontend_developer_capstone_project/self-checkup' element={<SelfCheckup />} />
          <Route path="/frontend_developer_capstone_project/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
