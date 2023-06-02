import React, { useEffect, useState } from 'react';
import { Category } from '../components/Category';
import Search from '../components/Search';
import { blog } from '../assets/data/data';
import Footerr from '../components/Footerr';
import { Blogs } from '../components/Doc.jsx/Blogs';
export default function Blog() {
  const [blogs, setBlogs] = useState(blog);
  const [searchKey, setSearchKey] = useState('');
  useEffect(
    function () {
      console.log(searchKey);
      const allBlogs = blog;
      const filteredBlogs = allBlogs.filter((blog) =>
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
      );

      setBlogs(filteredBlogs);
      console.log(blogs);
    },

    [searchKey]
  );
  // Search for blog by category

  return (
    <div>
      <Category />
      <Search setSearchKey={setSearchKey} value={searchKey} />

      <Blogs blog={blogs} />
      <Footerr />
    </div>
  );
}
