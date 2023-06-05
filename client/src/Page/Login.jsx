import { Link, useNavigate } from 'react-router-dom';
import bg from '../assets/images/bg.jpg';
import google from '../assets/images/google.jpg';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { verifyLogin } from '../helper/loginHelper';
import { useEffect } from 'react';
export default function Login() {
  const navigate = useNavigate();
  const googleOnclick = async function () {
    const url = 'http://localhost:8080/google';
    window.location.href = url;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (values) {
      try {
        if (!values.email) {
          toast.error('Vui lòng nhập email!');
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
        if (!values.password) {
          toast.error('Vui lòng nhập mật khẩu');
          return 0;
        }
        const toastId = toast.loading('Đang xử lý...');
        let loginPromise = verifyLogin({
          email: values.email,
          password: values.password,
        });

        loginPromise
          .then(function (res) {
            toast.dismiss(toastId);
            let { token, _id, username } = res.data;
            toast.success('Đăng nhập thành công!');
            localStorage.setItem('token', token);
            localStorage.setItem('_id', _id);
            localStorage.setItem('username', username);
            setTimeout(() => {
              navigate('/');
            }, 500);
          })
          .catch(function (error) {
            toast.dismiss(toastId);
            console.log(error);
            toast.error(
              'Email hoặc mật khẩu không chính xác, vui lòng thử lại!'
            );
          });
        // var exist = 0;
        // let createPromise = registerUser(values);
        // await createPromise.then(function (res) {
        //   console.log(res);
        //   if (res === 'Email exist') {
        //     toast.error('Email existed!');
        //     exist = 1;
        //   }
        // });
        // if (exist) return 0;
        // await toast.promise(createPromise, {
        //   loading: 'Registering...',
        //   success: <b>Register Successfully!</b>,
        //   error: <b>An error occured, try again</b>,
        // });
        // navigate('/login');
        // console.log(values);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="w-full bg-[#f5f5f5f5] h-screen flex items-start">
        <div className="relative w-1/2 h-full flex flex-col hidden sm:block ">
          <div className="absolute top-[15%] left-[10%] flex flex-col">
            <h1 className="text-4xl text-white font-normal">
              Bạn gặp vấn đề về tâm lý?
            </h1>
            <p className="text-xl text-white font-normal">
              Hãy tìm đến chúng tôi
            </p>
          </div>
          <img src={bg} className="w-full h-full object-cover"></img>
        </div>{' '}
        <div className="w-full sm:w-1/2 h-full flex flex-col p-20 justify-between">
          <h1 className="text-xl text-[#060606] font-semibold">AI-Care</h1>
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-2xl font-semibold mb-2">Đăng nhập</h3>
              <p className="text-base mb-2">
                {/* Welcome! Please enter your details */}
                Hãy đăng nhập để sử dụng các dịch vụ của chúng tôi một cách trọn
                vẹn <br />
              </p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="w-full flex flex-col">
                <input
                  {...formik.getFieldProps('email')}
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full text-black py-2  my-4 bg-transparent border-b border-black outline-none focus:outline-none"
                ></input>
                <input
                  {...formik.getFieldProps('password')}
                  type="password"
                  placeholder="Mật khẩu"
                  className="w-full text-black py-2  my-4 bg-transparent border-b border-black outline-none focus:outline-none"
                ></input>
              </div>
              <button
                type="submit"
                className="w-full text-white my-2 bg-[#060606] 
          rounded-md p-4 text-center
           flex items-center justify-center"
              >
                Đăng nhập
              </button>
            </form>
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex">
                <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                  <Link to="/forgot"> Quên mật khẩu</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col my-4">
            <Link to={'/register'}>
              <button
                className="w-full text-[#060606] my-2 bg-white border-2 border-black 
          rounded-md p-4 text-center
           flex items-center justify-center"
              >
                Đăng ký
              </button>
            </Link>
          </div>
          <div className="w-full flex items-center justify-center relative">
            <div className="w-full h-[1px] bg-black"> </div>
            <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">Hoặc</p>
          </div>

          <div className="w-full flex flex-col my-4">
            <button
              type="button"
              onClick={googleOnclick}
              className="w-full text-[#060606] my-2 bg-white border-2 border-black 
          rounded-md p-4 text-center
           flex items-center justify-center"
            >
              <div className="flex items-center flex-row justify-center">
                <img src={google} className="h-[30px] w-[30px] mr-[10px] " />
                <p> Đăng nhập với Google</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
