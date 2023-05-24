import { Link, useNavigate } from 'react-router-dom';
import bgregister from '../assets/images/bgforgot.jpg';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { getUserbyId, registerUser, updateUser } from '../helper/loginHelper';
import { useEffect, useState } from 'react';
export default function Profile() {
  const _id = localStorage.getItem('_id');
  const navigate = useNavigate();
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

      phone: phone,
      name: name,
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
          toast.error('Vui lòng nhập số điện thoại!');
          return 0;
        }

        let exist = 0;
        let profilePromise = updateUser(values, _id);
        await profilePromise.then(function (res) {
          console.log(res);
          if (res === 'Email exist') {
            toast.error('Email đã được đăng ký, hãy đăng ký email khác!');
            exist = 1;
          } else if (res === 'Phone exist') {
            toast.error('Số điện thoại đã được đăng ký, hãy đăng ký số khác!');
            exist = 1;
          }
        });
        console.log(exist);
        if (exist) return 0;
        else {
          toast.promise(profilePromise, {
            loading: 'Cập nhật...',
            success: <b>Cập nhật thông tin thành công! </b>,
            error: <b>Có lỗi xảy ra, vui lòng thử lại</b>,
          });
        }
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
              <h3 className="text-2xl font-semibold mb-2">Tài khoản</h3>
              <p className="text-base mb-2">
                {' '}
                Bạn có thể thay đổi và cập nhật các thông tin cá nhân đã đăng ký
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
                {/* <input
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
                ></input> */}
              </div>
              <button
                type="submit"
                className="w-full text-[#060606] mt-10 my-2 bg-[#1B9C85]
          rounded-md p-4 text-center
           flex items-center justify-center"
              >
                Cập nhật
              </button>
            </form>
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex">
                <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2"></p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col my-4 ">
            <Link to={`/changepassword/${_id}`}>
              <button
                className="w-full text-white my-2 bg-[#4C4C6D] 
          rounded-md p-4 text-center 
           flex items-center justify-center"
              >
                Đổi mật khẩu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
