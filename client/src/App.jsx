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
import DoctorPage from './Page/DoctorPage';
import DoctorInfor from './components/Doctors/DoctorInfor/DoctorInfo';
import Footer from './components/Footer';
import DoctorSchedule from './components/Doctors/DoctorSchedule/DoctorSchedule';
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/exercise" element={<HomeExcercise></HomeExcercise>} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/schedule" element={<DoctorPage />} />
          <Route path="/doctor/:id" element={<DoctorInfor />} />
          <Route path="/doctor/schedule/:id" element={<DoctorSchedule />} />
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}
export default App;
