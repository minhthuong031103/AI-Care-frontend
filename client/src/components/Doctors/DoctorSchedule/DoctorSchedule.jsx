import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { doctorList } from '../../../Page/config/data';
import style from './Username.module.css';
import { Toaster, toast } from 'react-hot-toast';
import { useFormik } from 'formik';
import { getUserbyId, scheduleDoctor } from '../../../helper/loginHelper';

function DoctorSchedule() {
  const _id = localStorage.getItem('_id');
  const { id } = useParams();
  const doctor = doctorList.find((doctor) => doctor.id === id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(function () {
    let profilePromise = getUserbyId(_id);
    profilePromise.then(function (res) {
      let { email, name, phone } = res.data;
      setName(name);
      setPhone(phone);
      setEmail(email);
    });
  }, []);
  const formik = useFormik({
    initialValues: {
      email: email,
      name: name,
      phone: phone,
      message: '',
    },
    enableReinitialize: true,

    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (values) {
      const schedulePromise = scheduleDoctor(values, doctor.name, doctor.email);
      if (!values.name) {
        toast.error('Vui lòng nhập họ và tên!');
        return 0;
      }
      if (!values.email) {
        toast.error('Vui lòng nhập email');
        return 0;
      } else {
        if (
          !/^[a-z0-9!'#$%&*+\/=?^_`{|}~-]+(?:\.[a-z0-9!'#$%&*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-zA-Z]{2,}$/i.test(
            values.email
          )
        ) {
          toast.error('Email không hợp lệ!');
          return 0;
        }
      }
      if (!values.phone) {
        toast.error('Vui lòng số điện thoại!');
        return 0;
      }
      if (!values.message) {
        toast.error('Vui lòng để lại lời nhắn!');
        return 0;
      }
      const toastId = toast.loading('Đang xử lý...');
      schedulePromise
        .then(function () {
          toast.dismiss(toastId);
          toast.success(
            'Đã gửi yêu cầu tư vấn đến bác sĩ thành công, bác sĩ sẽ liên lạc với bạn trong thời gian sớm nhất'
          );
        })
        .catch(function (error) {
          console.log(error);
          toast.dismiss(toastId);
          toast.error('Có lỗi xảy ra, vui lòng thử lại');
        });

      console.log(values);
    },
  });
  const navigate = useNavigate();
  //   const onUpload = async function (e) {
  //     const base64 = await convertToBase64(e.target.files[0]);
  //     setFile(base64);
  //   };
  //   function userLogout() {
  //     localStorage.removeItem('token');
  //     navigate('/');
  //   }
  return (
    <div className="container mt-[100px] items-center mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-auto">
        <div className="bg-f8e8ee  sm:bg-transparent justify-items-center rounded-3xl shadow-lg sm:backdrop-filter sm:backdrop-blur-md border-4 border-opacity-30 border-gray-50 flex-shrink-0 w-full sm:w-auto py-20 px-7">
          <div className="title flex flex-col justify-between items-center">
            <h4 className="text-3xl font-bold">Phiếu liên hệ tư vấn tâm lý</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Bác sĩ {doctor.name}
            </span>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Địa chỉ {doctor.address}
            </span>
            <span className="py-4 text-sm w-2/3 text-center text-gray-500">
              Hãy điền các đầy đủ và chính xác các thông tin để chúng tôi có thể
              liên hệ với bạn
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps('name')}
                type="text"
                placeholder="Họ và tên"
                className="w-full sm:w-1/2 text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none"
              />

              <input
                {...formik.getFieldProps('email')}
                type="email"
                placeholder="Email"
                className="w-full sm:w-1/2 text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none"
              />

              <div className="textbox flex flex-col gap-6 items-center w-full">
                <input
                  {...formik.getFieldProps('phone')}
                  type="tel"
                  pattern="^0\d{9,10}$"
                  placeholder="Số điện thoại"
                  className="w-full sm:w-1/2 text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                <input
                  {...formik.getFieldProps('message')}
                  type="text"
                  placeholder="Lời nhắn"
                  className="w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-30 text-white my-2 bg-[#060606] rounded-md px-8 py-5 text-center flex items-center justify-center"
              >
                Xác nhận đặt lịch
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default DoctorSchedule;
