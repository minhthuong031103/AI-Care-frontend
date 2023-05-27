import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Page/HomeExcercise';
import './App.css';
import ExerciseDetail from './Page/ExerciseDetail';
import Navbar from './components/NavBar';
import HomeExcercise from './Page/HomeExcercise';
import Login from './Page/Login';
import Register from './Page/Register';
import Profile from './Page/Profile';

import DoctorInfor from './components/Doctors/DoctorInfor/DoctorInfo';
import Footer from './components/Footer';
import DoctorSchedule from './components/Doctors/DoctorSchedule/DoctorSchedule';
import DiaryPage from './Page/DiaryPage';
import Upload from './Page/Upload';
import { ChatPage } from './Page/ChatPage/ChatPage';
import DoctorPage from './Page/DoctorPage/DoctorPage';
import PasswordPage from './Page/PasswordPage';
import HomeTest from './Page/HomeTest';
import ForgotPage from './Page/Forget/ForgotPage';
import OtpPage from './Page/Forget/otpPage';
import ResetPage from './Page/Forget/ResetPage';
import Blog from './Page/Blog';
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <main className="w-full px-[4px] bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/hometest" element={<HomeTest></HomeTest>} />
          <Route path="/document" element={<Blog></Blog>} />
          <Route path="/exercise" element={<HomeExcercise></HomeExcercise>} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/schedule" element={<DoctorPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/diary/upload" element={<Upload />} />
          <Route path="/doctor/:id" element={<DoctorInfor />} />
          <Route path="/doctor/schedule/:id" element={<DoctorSchedule />} />
          <Route path="/chat" element={<ChatPage></ChatPage>}></Route>
          <Route path="/forgot" element={<ForgotPage></ForgotPage>}></Route>
          <Route
            path="/changepassword/:id"
            element={<PasswordPage></PasswordPage>}
          />
          <Route path="/otppage/:_id" element={<OtpPage></OtpPage>} />
          <Route path="/reset/:_id" element={<ResetPage></ResetPage>} />
        </Routes>
      </main>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
}
export default App;
