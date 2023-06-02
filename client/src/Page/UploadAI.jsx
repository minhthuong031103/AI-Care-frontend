import React, { useState, useEffect } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import preview from '../assets/images/preview.png';
// import ImageUploading from 'react-images-uploading';
import toast, { Toaster } from 'react-hot-toast';
import { createPost } from '../helper/diaryHelper';
import { getRandomPrompt } from '../components/Diary';
import FormField from '../components/Diary/FormField';
import Loader from '../components/Loader';
import './Uploader/uploader.css';
import Uploader from './Uploader/Uploader';
export default function UploadAI() {
  const _id = localStorage.getItem('_id');
  const navigate = useNavigate();
  const [temp, setTemp] = useState();
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('No selected file');
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64Image = reader.result;
      setForm({ ...form, photo: base64Image });
      // Set the base64Image to the form.photo variable or use it as needed
    };

    reader.readAsDataURL(file);
  };

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: null,
    date: '',
  });

  useState(function () {
    const currentTime = new Date();
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    setForm({ ...form, date: currentTime.toLocaleString('en-US', options) }); // Convert to ISO string format
  }, []);

  //   const convertToBase64 = async function (imageUrl) {
  //     const response = await fetch(imageUrl);
  //     const blob = await response.blob();
  //     return new Promise((resolve, reject) => {
  //       const reader = new FileReader();
  //       reader.onloadend = () => resolve(reader.result);
  //       reader.onerror = reject;
  //       reader.readAsDataURL(blob);
  //     });
  //   };
  const logClick = function () {
    console.log(form.photo);
  };
  const removeClick = function () {
    setForm({ ...form, photo: null });
  };
  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('https://ai-care.onrender.com/api/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide proper prompt');
    }
  };

  const handleSubmit = async function () {
    try {
      setLoading(true);
      let CreatePostpromise = createPost(form, _id);
      CreatePostpromise.then(function () {
        setLoading(false);
        toast.success('Thêm thành công');
        setTimeout(() => {
          navigate('/diary');
        }, 500);
      });
    } catch (error) {
      toast.error('Có lỗi xảy ra');
      console.log(error);
    }
  };
  const handleChange = function (e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSurpriseMe = function () {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section
      className="max-w-7xl mx-auto mt-[100px] 
  "
    >
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div>
        <h1 className="font-medium text-[#222328] text-[32px]">
          Generative AI Dall-E
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px] ">
          Tạo một bức ảnh bằng trí tuệ nhân tạo thông qua sự sáng tạo của riêng
          bạn
        </p>
      </div>

      <form className="mt-16 max-w-xl">
        <div className="flex flex-col gap-5">
          <FormField
            disabled={true}
            labelName="Thời Gian"
            type="text"
            name="date"
            placeholder="Time..."
            value={form.date}
            handleChange={handleChange}
            style={{ backgroundColor: 'lightgray' }}
          />
        </div>
        <div className="flex flex-col mt-5 gap-5">
          <FormField
            labelName="Tiêu đề "
            type="text"
            name="name"
            placeholder="Nhập tiêu đề nhật ký"
            value={form.name}
            handleChange={handleChange}
          />
        </div>

        <div className=" flex flex-col py-5 gap-5">
          <FormField
            labelName="Yêu cầu về bức ảnh"
            type="text"
            name="prompt"
            placeholder="Hãy viết gì đó..."
            value={form.prompt}
            handleChange={handleChange}
            handleSurpriseMe={handleSurpriseMe}
            isSurpriseMe={true}
          />
        </div>

        {/* <form
          className="uploadform"
          onClick={() => document.querySelector('.input-field').click()}
        >
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={handleImageUpload}
          />

          {loading ? (
            <Loader></Loader>
          ) : form.photo ? (
            <img src={form.photo} width={150} height={150} alt={fileName} />
          ) : (
            <>
              <MdCloudUpload color="#1475cf" size={60} />
              <p>Browse Files to upload</p>
            </>
          )}
        </form> */}
        <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={preview}
              alt="preview"
              className="w-9/12 h-9/12 object-contain opacity-40"
            />
          )}

          {generatingImg && (
            <div className="absolute inset-0 z-0 flex justify-center items-center bg-white rounded-lg">
              <Loader />
            </div>
          )}
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className="mt-5 flex gap-5"></div>
        {/* <button
          type="button"
          onClick={removeClick}
          className="mt-3 text-white bg-[#B70404] font-medium
          rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Xóa ảnh
        </button> */}
        <div className="mt-2 text-[#666e75] text-[14px]">
          <button
            type="button"
            disabled={loading}
            onClick={handleSubmit}
            className="mt-3 text-white bg-[#5C8984] font-medium
          rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? 'Đang thêm...' : 'Thêm vào nhật ký'}
          </button>
          <p className="mt-10">
            Bạn có thể thêm hình ảnh vào nhật ký để thêm sinh động
          </p>
        </div>
      </form>
    </section>
  );
}
