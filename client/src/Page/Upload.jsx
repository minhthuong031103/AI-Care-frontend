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
export default function Upload() {
  const _id = localStorage.getItem('_id');
  const navigate = useNavigate();
  const [temp, setTemp] = useState();
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('No selected file');
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
            labelName="Tên "
            type="text"
            name="name"
            placeholder="Tên của bạn"
            value={form.name}
            handleChange={handleChange}
          />
        </div>

        <div className=" flex flex-col py-5 gap-5">
          <FormField
            labelName="Ghi chú"
            type="text"
            name="prompt"
            placeholder="Hãy viết gì đó..."
            value={form.prompt}
            handleChange={handleChange}
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
        <div>
          {/* <ImageUploading
            value={form.photo}
            onChange={onChange}
            dataURLKey="data_url"
          >
            {({
              image,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <>
                <div
                  {...dragProps}
                  onClick={onImageUpload}
                  className="relative bg-gray-50 border border-gray-300
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 w-64 p-3 h-64 flex 
            justify-center items-center hover:cursor-pointer"
                >
                  {!form.photo ? (
                    <p>Nhấn hoặc kéo thả vào đây để thêm ảnh:</p>
                  ) : null}

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
                  {loading && (
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

        
              </>
            )}
          </ImageUploading> */}
        </div>
        <form
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
        </form>

        <section className="uploaded-row">
          <AiFillFileImage color="#1475cf" />
          <span className="upload-content">
            {fileName} -
            <MdDelete
              style={{ color: 'red' }}
              onClick={() => {
                setFileName('No selected File');
                setImage(null);
              }}
            />
          </span>
        </section>
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
