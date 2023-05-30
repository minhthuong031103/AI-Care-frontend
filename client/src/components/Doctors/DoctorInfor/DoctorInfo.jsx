import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { Link } from 'react-router-dom';
import { doctorList } from '../../../Page/config/data';
import Footer from '../../Footerr';

const DoctorInfor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    let doctor = doctorList.find((doctor) => doctor.id === id);
    if (doctor) {
      setDoctor(doctor);
    }
  }, []);
  const Schedule = function () {
    navigate(`/doctor/schedule/${id}`);
  };
  return (
    <>
      <Link className="blog-goBack mt-[100px]" to="/schedule">
        <span> &#8592;</span> <span>Quay lại</span>
      </Link>
      {doctor ? (
        <>
          <div className="blog-wrap  w-full h-full">
            <header>
              <p className="blog-date text-gray-700">Địa chỉ: {doctor.address}</p>
              <h1>B.S {doctor.name}</h1>
              <div className="blog-subCategory">
                {doctor.certificate.map((certificate, i) => (
                  <div key={i}>
                    <p className="chip">{certificate}</p>
                  </div>
                ))}
              </div>
            </header>
            <img src={doctor.avatar} alt="cover" />
            <p className="blog-desc">{doctor.description}</p>
            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={Schedule}
                className="w-50 text-white my-2 bg-[#3b82f6] 
          rounded-md px-8 py-5 text-center
           flex items-center justify-center"
              >
                Liên hệ tư vấn ngay
              </button>
            </div>
          </div>
          <Footer></Footer>
        </>
      ) : (
        <h1>cha co gi</h1>
      )}
    </>
  );
};

export default DoctorInfor;
