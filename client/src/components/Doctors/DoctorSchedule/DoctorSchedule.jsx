import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import style from './Username.module.css';
import { Toaster, toast } from 'react-hot-toast';
import { useFormik } from 'formik';

function DoctorSchedule() {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      mobile: '',
      address: '',
      firstName: '',
      lastName: '',
    },
    enableReinitialize: true,

    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (values) {
      //   values = await Object.assign(values, {
      //     profile: file || apiData?.profile || '',
      //   });
      //   let updatePromise = updateUser(values);
      //   toast.promise(updatePromise, {
      //     loading: 'Updating...',
      //     success: <b>Updated successfully</b>,
      //     error: <b>Error updated</b>,
      //   });
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
    <div className="container items-center mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center  h-auto ">
        <div className={style.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-3xl font-bold">Đặt lịch tư vấn tâm lý</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Bác sĩ A
            </span>
            <span className="py-4 text-sm w-2/3 text-start text-gray-500">
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
                className="w-3/4 text-black py-2  my-4 bg-transparent border-b border-black outline-none focus:outline-none"
              ></input>

              <input
                {...formik.getFieldProps('email')}
                type="email"
                placeholder="Email"
                className="w-3/4 text-black py-2  my-4 bg-transparent border-b border-black outline-none focus:outline-none"
              ></input>

              <div className=" textbox flex flex-col gap-6 items-center w-full">
                <input
                  {...formik.getFieldProps('phone')}
                  type="tel"
                  pattern="^0\d{9,10}$"
                  placeholder="Số điện thoại"
                  className="w-3/4 text-black py-2  my-4 bg-transparent border-b border-black outline-none focus:outline-none"
                ></input>
                <input
                  {...formik.getFieldProps('message')}
                  type="text"
                  placeholder="Lời nhắn"
                  className="w-full text-black py-2  my-4 bg-transparent border-b border-black outline-none focus:outline-none"
                ></input>
              </div>
              <button
                type="submit"
                className="w-30 text-white my-2 bg-[#060606] 
          rounded-md px-8 py-5 text-center
           flex items-center justify-center"
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
