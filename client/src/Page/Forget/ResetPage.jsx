import { Link, useNavigate, useParams } from 'react-router-dom';

import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import {
  changePassword,
  getUserbyId,
  registerUser,
  resetPassword,
  updateUser,
} from '../../helper/loginHelper';
import { useEffect, useState } from 'react';
export default function ResetPage() {
  const navigate = useNavigate();
  const { _id } = useParams();
  useEffect(function () {
    if (!localStorage.getItem('session')) {
      navigate('/forgot');
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmNewPassword: '',
    },

    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (values) {
      try {
        if (!values.newPassword) {
          toast.error('Vui lòng nhập mật khẩu mới');
          return 0;
        } else {
          const specialChars = /[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
          if (values.newPassword.length < 8) {
            toast.error('Mật khẩu phải có từ 8 kí tự trở lên ');
            return 0;
          }
          if (!specialChars.test(values.newPassword)) {
            toast.error('Mật khẩu phải có ít nhất 1 ký tự đặt biệt');
            return 0;
          }

          if (values.newPassword.includes(' ')) {
            toast.error('Mật khẩu không hợp lệ');
            return 0;
          }
        }
        if (!values.confirmNewPassword) {
          toast.error('Vui lòng xác nhận mật khẩu mới');
          return 0;
        }
        if (values.newPassword != values.confirmNewPassword) {
          toast.error('Mật khẩu xác nhận không chính xác!');
          return 0;
        }
        let passwordPromise = resetPassword(_id, values.newPassword);
        const toastId = toast.loading('Đang xử lý...');
        passwordPromise
          .then(function (res) {
            toast.dismiss(toastId);
            localStorage.removeItem('session');
            if (res.message === 'ok') {
              toast.success('Đặt lại mật khẩu thành công!');
              setTimeout(() => {
                navigate('/login');
              }, 1500);
            }
          })
          .catch(function (error) {
            toast.dismiss(toastId);
            console.log(error);
            toast.error('Có lỗi xảy ra, vui lòng thử lại');
          });
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="w-full bg-[#f5f5f5f5] h-screen flex items-center justify-center">
        <div className="w-full sm:w-1/2 h-full flex flex-col p-20 justify-center">
          <h1 className="text-xl text-[#060606] font-semibold">AI-Care</h1>
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-2xl font-semibold mb-2">Đặt lại mật khẩu</h3>
              <p className="text-base mb-2"> Hãy tạo mật khẩu mới của bạn</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="w-full flex flex-col">
                <input
                  {...formik.getFieldProps('newPassword')}
                  type="password"
                  placeholder="Mật khẩu mới"
                  className="w-full text-black py-2  my-4 bg-transparent border-b border-black outline-none focus:outline-none"
                ></input>
                <input
                  {...formik.getFieldProps('confirmNewPassword')}
                  type="password"
                  placeholder="Xác nhận mật khẩu mới"
                  className="w-full text-black py-2  my-4 bg-transparent border-b border-black outline-none focus:outline-none"
                ></input>
              </div>
              <button
                type="submit"
                className="w-full text-white mt-10 my-2 bg-[#4C4C6D]
          rounded-md p-4 text-center
           flex items-center justify-center"
              >
                Đổi mật khẩu
              </button>
            </form>
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex">
                <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
