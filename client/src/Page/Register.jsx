import { Link, useNavigate } from 'react-router-dom';
import bgregister from '../assets/images/bgregister.jpg';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { registerUser } from '../helper/loginHelper';
import { useEffect, useState } from 'react';
export default function Register() {
  useEffect(function () {
    console.log(1)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams) {
      const responseDataString = urlParams.get('responseData');
      const responseDataObject = JSON.parse(responseDataString);
      // Use the responseData as needed
      sessionStorage.setItem('email', responseDataObject.email);

      sessionStorage.setItem('name', responseDataObject.name);

      navigate('/register');
    }
  }, []);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name:  sessionStorage.getItem('name')
      email: sessionStorage.getItem('email')
      password: '',
      phone: '',
      confirmPassword: '',
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (values) {
      try {
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
        if (!values.password) {
          toast.error('Vui lòng nhập mật khẩu');
          return 0;
        } else {
          const specialChars = /[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
          if (values.password.length < 8) {
            toast.error('Mật khẩu phải có từ 8 kí tự trở lên ');
            return 0;
          }
          if (!specialChars.test(values.password)) {
            toast.error('Mật khẩu phải có ít nhất 1 ký tự đặt biệt');
            return 0;
          }

          if (values.password.includes(' ')) {
            toast.error('Mật khẩu không hợp lệ');
            return 0;
          }
        }
        if (!values.confirmPassword) {
          toast.error('Vui lòng xác nhận mật khẩu');
          return 0;
        }
        if (values.password != values.confirmPassword) {
          toast.error('Mật khẩu xác nhận không chính xác!');
          return 0;
        }
        var exist = 0;
        const toastId = toast.loading('Đang xử lý...');
        let createPromise = registerUser(values);
        createPromise
          .then(function (res) {
            toast.dismiss(toastId);
            console.log(res);
            if (res === 'Email exist') {
              toast.error('Email đã được đăng ký, hãy đăng ký email khác!');
            } else if (res === 'Phone exist') {
              toast.error(
                'Số điện thoại đã được đăng ký, hãy đăng ký số khác!'
              );
            } else if (res === 'ok') {
              toast.success('Đăng ký thành công!');
              setTimeout(() => {
                navigate('/login');
              }, 1000);
            }
          })
          .catch(function (error) {
            toast.dismiss(toastId);
            toast.error('Đăng ký thất bại, xin vui lòng thử lại');
          });
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="w-full bg-[#f5f5f5f5] h-screen flex items-start">
        <div className="relative w-[50%] h-full flex flex-col hidden sm:block ">
          <div className="absolute top-[10%] left-[10%] flex flex-col">
            <h1 className="text-4xl text-white font-normal">AI-Care</h1>
            <p className="text-xl text-white font-normal">
              Tạo tài khoản của bạn
            </p>
          </div>
          <img src={bgregister} className="w-full h-full object-cover"></img>
        </div>{' '}
        <div className="w-full sm:w-[50%] h-full flex flex-col p-20 justify-between">
          <h1 className="text-xl text-[#060606] font-semibold">AI-Care</h1>
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-2xl font-semibold mb-2">Đăng ký</h3>
              <p className="text-base mb-2">
                {' '}
                Hãy điền các thông tin của bạn để đăng ký
              </p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="w-full flex flex-col">
                <input
                  {...formik.getFieldProps('name')}
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full text-black py-2  my-4 bg-transparent border-b border-black outline-none focus:outline-none"
                ></input>
                <input
                  {...formik.getFieldProps('email')}
                  type="email"
                  placeholder="Email"
                  className="w-full text-black py-2  my-4 bg-transparent border-b border-black outline-none focus:outline-none"
                ></input>
                <input
                  {...formik.getFieldProps('phone')}
                  type="tel"
                  pattern="^0\d{9,10}$"
                  placeholder="Số điện thoại"
                  className="w-full text-black py-2  my-4 bg-transparent border-b border-black outline-none focus:outline-none"
                ></input>
                <input
                  {...formik.getFieldProps('password')}
                  type="password"
                  placeholder="Mật khẩu"
                  className="w-full text-black py-2  my-4 bg-transparent border-b border-black outline-none focus:outline-none"
                ></input>
                <input
                  {...formik.getFieldProps('confirmPassword')}
                  type="password"
                  placeholder="Xác nhận mật khẩu"
                  className="w-full text-black py-2  my-4 bg-transparent border-b border-black outline-none focus:outline-none"
                ></input>
              </div>
              <button
                type="submit"
                className="w-full text-[#060606] mt-10 my-2 bg-[#F99B7D]
          rounded-md p-4 text-center
           flex items-center justify-center"
              >
                Tạo tài khoản
              </button>
            </form>
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex">
                <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2"></p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col my-4 ">
            <Link to="/login">
              <button
                className="w-full text-white my-2 bg-[#9BA4B5] 
          rounded-md p-4 text-center 
           flex items-center justify-center"
              >
                Quay lại
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
