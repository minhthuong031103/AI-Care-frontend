import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import preview from '../assets/images/preview.png';

import toast, { Toaster } from 'react-hot-toast';
import { createPost } from '../helper/diaryHelper';
import { getRandomPrompt } from '../components/Diary';
import FormField from '../components/Diary/FormField';
import Loader from '../components/Loader';
export default function Upload() {
  const navigate = useNavigate();
  const [temp, setTemp] = useState();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
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
  //   const generateImage = async function () {
  //     if (form.prompt) {
  //       try {
  //         setGeneratingImg(true);
  //         await fetch(`https://lexica.art/api/v1/search?q=${form.prompt}`, {
  //           method: 'GET',
  //         })
  //           .then((response) => response.json())
  //           .then(async (data) => {
  //             if (data.images && data.images.length > 0) {
  //               const randomIndex = Math.floor(
  //                 Math.random() * data.images.length
  //               );
  //               const imageUrl = data.images[randomIndex].src;
  //               const base64data = await convertToBase64(imageUrl);
  //               setForm({ ...form, photo: base64data });
  //             } else {
  //               alert('No images found for the prompt');
  //             }
  //           });
  //       } catch (error) {
  //         alert(error);
  //       } finally {
  //         setGeneratingImg(false);
  //       }
  //     } else {
  //       alert('Please enter a prompt');
  //     }
  //   };
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
  const handleSubmit = async function () {
    try {
      setLoading(true);
      let CreatePostpromise = createPost(form);
      CreatePostpromise.then(function () {
        setLoading(false);
        toast.success('Shared');
      });
    } catch (error) {
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
      className="max-w-7xl mx-auto
  "
    >
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div>
        <h1 className="font-medium text-[#222328] text-[32px]">
          Tạo một khoảnh khắc vào nhật ký của bạn
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px] ">
          Ghi lại những khoảnh khắc, những điều cần lưu ý và sự kiện trong ngày
          của bạn
        </p>
      </div>

      <form className="mt-16 max-w-3xl">
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
            labelName="Tên "
            type="text"
            name="name"
            placeholder="Tên của bạn"
            value={form.name}
            handleChange={handleChange}
          />
        </div>
        <div>
          <input type="text"></input>
          <input
            className="visible h-[50%]"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>

        <div className="flex flex-col py-5 gap-5">
          <FormField
            labelName="Ghi chú"
            type="text"
            name="prompt"
            placeholder="Hãy viết gì đó..."
            value={form.prompt}
            handleChange={handleChange}
            handleSurpriseMe={handleSurpriseMe}
          />
          <input
            className="bg-slate-500"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <div
            className="relative bg-gray-50 border border-gray-300
          text-gray-900 text-sm rounded-lg focus:ring-blue-500 
          focus:border-blue-500 w-64 p-3 h-64 flex 
          justify-center items-center"
          >
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              ></img>
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              ></img>
            )}
            {generatingImg && (
              <div
                className="absolute inset-0 z-0 flex justify-center 
              items-center 
              bg-[rgba(0,0,0,0.5)]
              rounded-lg"
              >
                <Loader></Loader>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5"></div>
        <div className="mt-2 text-[#666e75] text-[14px]">
          <p>
            Once you have created the image you want, you can share it with
            others in the community
          </p>
          {loading ? (
            <div
              className="absolute inset-0 z-0 flex justify-center 
              items-center 
              bg-[rgba(0,0,0,0.5)]
              rounded-lg"
            >
              <Loader></Loader>
            </div>
          ) : (
            <button
              type="button"
              disabled={loading}
              onClick={handleSubmit}
              className="mt-3 text-white bg-[#6469ff] font-medium
          rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {loading ? 'Sharing...' : 'Share with the community'}
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={logClick}
          className="mt-3 text-white bg-[#6469ff] font-medium
          rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          click
        </button>
      </form>
    </section>
  );
}
