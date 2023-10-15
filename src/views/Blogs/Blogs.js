import React, { useState, useEffect } from 'react';
import './Blogs.css';
import Navbar from '../../components/Navbar/Navbar';
import showToast from 'crunchy-toast';
import Footer from '../../components/Footer/Footer';

export default function Blog() {
  const [blog, setBlogs] = React.useState([
    {
      name: 'Shreya Kar',
      date: '11-4-2023',
      blog:
        'Out of Town Blog is a travel, food, and lifestyle online magazine. This travel blog started as a site where the publisher shares his personal travel experiences, photographs and travel tips to his friends, relatives, and online readers. Today, Out of Town Blog showcases travel tales, food reviews, hotel guides and reviews, travel destination guides and other travel-related inputs from various contributors from all over the world. ✈️❤️',
    },
    {
      name: 'Kashish Dadghaye',
      date: '11-4-2024',
      blog:
        'Out of Town Blog is a travel, food, and lifestyle online magazine. This travel blog started as a site where the publisher shares his personal travel experiences, photographs and travel tips to his friends, relatives, and online readers. Today, Out of Town Blog showcases travel tales, food reviews, hotel guides and reviews, travel destination guides and other travel-related inputs from various contributors from all over the world.',
    },
  ]);

  const [likes, setLikes] = useState(new Array(blog.length).fill(0));

  function increase(index) {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  }

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const addBlog = () => {
    const obj = {
      name: name,
      date: date,
      blog: message,
    };
    setBlogs([...blog, obj]);
    setLikes([...likes, 0]);

    showToast('Your Blog has been added successfully!', 'success', 3000);

    setName('');
    setDate('');
    setMessage('');
  };

  return (
    <div>
      <Navbar />
      <div className='blog-header-img '>
      <h1 className="hero_section-title fade-in-bottom"  ><br /> <br /><br />Blogs </h1>
       
      </div>

      <p className='app-desc destination-app-desc'>
        A blog is a digital platform where individuals or organizations share written content, often in the form of articles,
        posts, essays. It serves as a space for sharing information, options, experiences, and expertise on a wide range of topics,
        catering to various interests and audiences. Blogs can be personal diaries, educational resources, marketing tools, or
        sources of entertainment, making them a versatile medium for online communication.
      </p>

      <hr className="destination-hr" />

      <h1 className="destination-descrpition description blog-description">Share Your Journey with Us</h1>

      <div className="division1">
        <div className="division4">
          <form>
            <div className="name-date">
              <input
                type="text"
                placeholder="Your name"
                className="user-input-name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />

              <input
                type="Date"
                placeholder="26/11/2023"
                className="user-input-date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                value={date}
              />
            </div>

            <input
              type="text"
              placeholder="Share your Travel Blog"
              className="user-input3"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            />

            <button type="button" className="btn-add-blog" onClick={addBlog}>
              ➕
            </button>
          </form>
        </div>
      </div>

      <hr className="destination-hr" />

      <div className="division2">
        <h2 className="heading2">Inspiring Travel Blogs</h2>
        <h3 className="heading5">To Travel is to Live ..!</h3>
        {blog.map((blog, index) => {
          return (
            <div className="BlogCard" key={index}>
              <p className="blog-name m-2">🎒 {blog.name}</p>
              <date className="blog-date m-2">📅 {blog.date}</date>
              <p className="blog-blog m-2">📝 {blog.blog}</p>
              <div className="like-division">
                {/* <div className="comment">💬 Comment</div> */}
                <div className="like">
                  <button onClick={() => increase(index)} className="button">
                    ❤️
                  </button>
                  <span className="span"> {likes[index]} </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
