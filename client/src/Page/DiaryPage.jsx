import React, { useState, useEffect } from 'react';
import FormField from '../components/Diary/FormField';
import Loader from '../components/Loader';
import Card from '../components/Diary/Card';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footerr';
import Calendar from '../components/Calendar/Calendar';
import {BsJournalBookmark} from 'react-icons/bs'
const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2
      className="mt-5 font-bold text-[#6469ff] 
    text-xl uppercase"
    >
      {title}
    </h2>
  );
};
export default function DiaryPage() {
  const navigate = useNavigate();
  const _id = localStorage.getItem('_id');
  const [isLoading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);
  const handleUpload = () => {
    navigate('/diary/upload');
  };
  const handleGenerate = () => {
    navigate('/diary/upload/dalle');
  };
  // baseURL: 'https://ai-care.onrender.com'
  const fetchPosts = async function () {
    setLoading(true);
    try {
      const response = await fetch(
        'https://ai-care.onrender.com/api/v1/post/allofuser',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ _id }),
        }
      );
      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(function () {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <section className="max-w-7xl mt-[100px] mx-auto">
      <div className='pb-8'><Calendar/></div>
        <div className='borde border-t-2 border-gray-500 pt-6 flex flex-col'>
          <div>
          <h1 className="text-3xl text-blue-500 font-bold flex items-center">
            <BsJournalBookmark className='pr-4 text-blue-600' size={50} />
            Nhật ký
          </h1>
            <p className="mt-5 text-[#666e75] text-[14px] max-w-[600px]">
              Ghi lại những sự kiện, suy nghĩ và kỷ niệm quan trọng trong cuộc sống
              hàng ngày
            </p>

            <button type="Button" onClick={handleUpload}>
              <p
                className="font-inter font-medium bg-blue-500 hover:bg-blue-600 text-white px-5 py-3
                rounded-md ml-10 mt-10"
              >
                Thêm vào nhật ký
              </p>
            </button>
            <button type="Button" onClick={handleGenerate}>
              <p
                className="font-inter font-medium bg-red-500 text-white px-5 py-3
                rounded-md ml-10 sm:ml-20 mt-10"
              >
                Tạo ảnh AI-DallE
              </p>
            </button>
          </div>

          <div className="mt-16">
            <FormField
              labelName="Tìm kiếm"
              type="text"
              name="text"
              placeholder="Gõ nội dung cần tìm kiếm..."
              value={searchText}
              handleChange={handleSearchChange}
            />
          </div>

          <div className="mt-10">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Loader></Loader>
              </div>
            ) : (
              // if searchText null=> ko hien
              <>
                {searchText && (
                  <h2
                    className="font-medium text-[#666e75]
                text-xl mb-3"
                  >
                    Showing results for{' '}
                    <span className="text-[#222328]">{searchText}</span>
                  </h2>
                )}
                <div
                  className="grid lg:grid-cols-4 sm:grid-cols-3
                xs:grid-cols-2 grid-cols-1 gap-3
                "
                >
                  {searchText ? (
                    <RenderCards
                      data={searchedResults}
                      title="No Search Results Found"
                    />
                  ) : (
                    <RenderCards data={allPosts} title="KHÔNG TÌM THẤY BÀI VIẾT" />
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      <Footer></Footer>
    </section>
  );
}
