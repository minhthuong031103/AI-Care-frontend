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
import OtpPage from './Page/Forget/OtpPage';
import ResetPage from './Page/Forget/ResetPage';
import Blog from './Page/Blog';
import { AuthorizedUser, LoggedUser } from './Page/authenticate';
import { BlogDetail } from './Page/BlogDetail/BlogDetail';
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <main className="w-full px-[4px] bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<HomeTest></HomeTest>} />
          <Route path="/document" element={<Blog></Blog>} />
          <Route path="/details/:id" element={<BlogDetail></BlogDetail>} />
          <Route path="/exercise" element={<HomeExcercise></HomeExcercise>} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route
            path="/login"
            element={
              <LoggedUser>
                <Login />
              </LoggedUser>
            }
          />
          <Route
            path="/register"
            element={
              <LoggedUser>
                <Register />
              </LoggedUser>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthorizedUser>
                <Profile />
              </AuthorizedUser>
            }
          />
          <Route path="/schedule" element={<DoctorPage />} />
          <Route
            path="/diary"
            element={
              <AuthorizedUser>
                <DiaryPage />
              </AuthorizedUser>
            }
          />
          <Route
            path="/diary/upload"
            element={
              <AuthorizedUser>
                <Upload />
              </AuthorizedUser>
            }
          />
          <Route path="/doctor/:id" element={<DoctorInfor />} />
          <Route path="/doctor/schedule/:id" element={<DoctorSchedule />} />
          <Route
            path="/chat"
            element={
              <AuthorizedUser>
                <ChatPage></ChatPage>
              </AuthorizedUser>
            }
          ></Route>
          <Route
            path="/forgot"
            element={
              <LoggedUser>
                <ForgotPage></ForgotPage>
              </LoggedUser>
            }
          ></Route>
          <Route
            path="/changepassword/:id"
            element={
              <AuthorizedUser>
                <PasswordPage></PasswordPage>
              </AuthorizedUser>
            }
          />
          <Route
            path="/otppage/:_id"
            element={
              <LoggedUser>
                <OtpPage></OtpPage>
              </LoggedUser>
            }
          />
          <Route
            path="/reset/:_id"
            element={
              <LoggedUser>
                <ResetPage></ResetPage>
              </LoggedUser>
            }
          />
        </Routes>
      </main>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
}
export default App;
