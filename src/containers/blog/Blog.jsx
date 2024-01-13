import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className="gpt3_blog section_padding" id='blog'>
      <div className="gpt3_blog-heading">
        <h1 className="gradient_text">A lot is happening, are blogging about it.</h1>
      </div>
      <div className="gpt3_blog-container">
        <div className="gpt3_blog-container_groupA">
          <Article imgurl={blog01} date="Jan 13, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      <div className="gpt3_blog-container_groupB">
        <Article imgurl={blog02} date="Jan 13, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgurl={blog03} date="Jan 13, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgurl={blog04} date="Jan 13, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgurl={blog05} date="Jan 13, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
      </div>
      </div>
    </div>
  )
}

export default Blog
