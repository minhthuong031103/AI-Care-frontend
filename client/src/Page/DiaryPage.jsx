import React, { useState, useEffect } from 'react';
import FormField from '../components/Diary/FormField';
import Loader from '../components/Loader';
import Card from '../components/Diary/Card';
import { Link, useNavigate } from 'react-router-dom';

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
  const [isLoading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);
  const handleUpload = () => {
    navigate('/diary/upload');
  };
  const fetchPosts = async function () {
    setLoading(true);
    try {
      const response = await fetch(
        'https://aigeneratingapp.onrender.com/api/v1/post/all',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
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
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className=" text-[#222328] text-[32px]">Nhật ký</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Ghi lại những sự kiện, suy nghĩ và kỷ niệm quan trọng trong cuộc sống
          hàng ngày
        </p>

        <button type="Button" onClick={handleUpload}>
          <p
            className="font-inter font-medium bg-[#27374D] text-white px-5 py-3
            rounded-md mt-10"
          >
            Thêm vào nhật ký
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
                <RenderCards data={allPosts} title="No Posts Yet" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}