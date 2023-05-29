import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { doctorList } from '../config/data';
import style from '../../components/Doctors/DoctorSchedule/Username.module.css';
import { Toaster, toast } from 'react-hot-toast';
import { useFormik } from 'formik';
import {
  getUserbyId,
  scheduleDoctor,
  verifyLogin,
  verifyOTP,
} from '../../helper/loginHelper';

function OtpPage() {
  const { _id } = useParams();

  const formik = useFormik({
    initialValues: {
      otp: '',
    },
    enableReinitialize: true,

    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (values) {
      if (!values.otp) {
        toast.error('Vui lòng nhập mã xác thực!');
        return 0;
      }
      const toastId = toast.loading('Đang xử lý...');
      const otpPromise = verifyOTP(_id, values.otp);
      otpPromise
        .then(function (res) {
          toast.dismiss(toastId);
          if (res.message === 'ok') {
            toast.success('Xác thực thành công!');
            localStorage.setItem('session', 'ok');
            setTimeout(() => {
              navigate(`/reset/${_id}`);
            }, 500);
          } else if (res.message === 'sai') {
            toast.error('sai otp');
          }
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
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center">
        <div className="bg-transparent sm:bg-transparent rounded-3xl shadow-lg   border-4 border-opacity-30 border-gray-50 flex-shrink-0 w-full sm:w-auto py-20 px-7">
          <div className="title text-center">
            <h4 className="text-3xl font-bold mb-10">Xác thực bảo mật</h4>
            <span className="p-4 text-sm text-start text-gray-500">
              Vui lòng điền mã xác thực gồm 6 chữ số đã được gửi đến địa chỉ
              email của bạn để tiến hành đặt lại mật khẩu
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps('otp')}
                type="text"
                pattern="[0-9]{6}"
                maxLength="6"
                placeholder="OTP"
                className="w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none"
              />
              <button
                type="submit"
                className="w-full text-white my-2 bg-[#060606] rounded-md px-8 py-5 text-center"
              >
                Xác nhận OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default OtpPage;
