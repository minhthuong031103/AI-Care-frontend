import React from 'react';
import { blog } from '../../assets/data/data';
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './style.css';
export const Blogs = () => {
  return (
    <>
      <section className="blog">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
          {blog.map((item) => (
            <div className="box boxItems" key={item.id}>
              <Link to={`/details/${item.id}`} className="link">
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
              </Link>
              <div className="details">
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  <a href="/">#{item.category}</a>
                </div>

                <h3 className="text-2xl">{item.title}</h3>

                <p>{item.desc.slice(0, 180)}...</p>
                <div className="date">
                  <AiOutlineClockCircle className="icon" />{' '}
                  <label htmlFor="">{item.date}</label>
                  <AiOutlineComment className="icon" />{' '}
                  <label htmlFor="">27</label>
                  <AiOutlineShareAlt className="icon" />{' '}
                  <label htmlFor="">Chia sẻ</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
