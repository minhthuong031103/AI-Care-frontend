import { Link, useNavigate } from 'react-router-dom';
import bgforgot from '../../assets/images/bgforgot.jpg';
import { useFormik } from 'formik';
import { sentOTP } from '../../helper/loginHelper';

import toast, { Toaster } from 'react-hot-toast';
export default function ForgotPage() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
    },

    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (values) {
      try {
        if (!values.email) {
          toast.error('Vui lòng nhập email');
          return 0;
        }
        const toastId = toast.loading('Đang xử lý...');
        let forgotPromise = sentOTP(values.email);

        forgotPromise
          .then(function (res) {
            toast.dismiss(toastId);
            console.log(res);
            if (res.message === 'ok') {
              let { _id } = res.data;

              toast.success('Mã xác nhận OTP đã được gửi đến Email của bạn');
              //
              setTimeout(() => {
                navigate(`/otppage/${_id}`);
              }, 500);
            } else if (res.message === 'ko co') {
              toast.error('Email không tồn tại');
            }
          })
          .catch(function (error) {
            console.log(error);
            toast.dismiss(toastId);
            toast.error('Có lỗi xảy ra, vui lòng thử lại');
          });

        // navigate(`/reset/${id}`);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="w-full bg-[#f5f5f5f5] h-screen flex items-start">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="relative w-1/2 h-full flex flex-col hidden sm:block ">
        <div className="absolute top-[10%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-normal">Quên mật khẩu?</h1>
          <p className="text-xl text-white font-normal">
            Hãy để chúng tôi giúp bạn
          </p>
        </div>
        <img src={bgforgot} className="w-full h-full object-cover"></img>
      </div>{' '}
      <div className="w-full sm:w-1/2 h-full flex flex-col p-20 justify-between">
        <h1 className="text-xl text-[#060606] font-semibold">AI-Care</h1>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-2xl font-semibold mb-2">Quên mật khẩu</h3>
            <p className="text-base mb-2">
              {' '}
              Vui lòng nhập email mà bạn đã đăng ký để lấy lại mật khẩu
              <br />
              Chúng tôi sẽ gửi mã xác minh OTP 6 chữ số đến email của bạn.
            </p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            {' '}
            <div className="w-full flex flex-col">
              <input
                {...formik.getFieldProps('email')}
                type="email"
                placeholder="Email"
                className="w-full text-black py-2  my-4 bg-transparent border-b border-black outline-none focus:outline-none"
              ></input>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex">
                <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2"></p>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white my-2 bg-[#060606] 
          rounded-md p-4 text-center mt-10
           flex items-center justify-center"
            >
              Gửi mã xác nhận{' '}
            </button>
            <Link to="/login">
              <button
                className="w-full mt-10 text-white my-2 bg-[#9BA4B5] 
            rounded-md p-4 text-center
            flex items-center justify-center"
              >
                Quay lại
              </button>
            </Link>
          </form>
        </div>
        <div className="w-full flex flex-col my-4"></div>
      </div>
    </div>
  );
}
