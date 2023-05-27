import React, { useState } from 'react';
import './detail.css';

import { BsPencilSquare } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { blog } from '../../assets/data/data';

export const BlogDetail = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id));
    if (blogs) {
      setBlogs(blogs);
    }
  }, []);

  return (
    <>
      {blogs ? (
        <section className="singlePage">
          <div className="container">
            <div className="flex justify-center items-center">
              <img src={blogs.cover} alt="" className="w-full max-w-lg" />
            </div>

            <div className="mt-8">
              <h1 className="text-4xl font-bold mb-4">{blogs.title}</h1>
              <p className="text-lg mb-4">{blogs.desc}</p>
              <p className="text-gray-500">{blogs.date}</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
