import React from 'react';
import { Card } from 'antd';
import { format } from 'date-fns';

const SingleBlog = ({ blog,delCard,updateCard }) => {
  if (!blog) return null;

  const { title, content, category, coverImg, date } = blog;

  const formattedDate = format(new Date(date), 'MMMM dd, yyyy'); // Format the blog date
  return (
    <Card
      hoverable
      style={{ width: '800px', margin: '20px auto', background:'#f4f1ed' }}
      cover={
        <img
          src={coverImg}
          alt={title}
          style={{ height: '400px', objectFit: 'cover' }}
        />
      }
    >
      <Card.Meta
        title={title}
        description={
          <div>
            <p>{content}</p>
            <span style={{ fontWeight: 'bold' }}>{category}</span>
            <br />
            <time>{formattedDate}</time>
            
            <div className='flex items-center justify-start gap-5'>
            <div 
        className="my-3 w-fit px-4 py-1 rounded-full cursor-pointer text-sm font-semibold text-[#f4f1ed] bg-[#333] hover:bg-black hover:text-white" 
        onClick={(e) => {
          console.log("Clicked")
          e.stopPropagation(); 
          delCard();
        }}
      >
        Delete Blog
      </div>

      <div 
        className="my-3 w-fit px-4 py-1 rounded-full cursor-pointer text-sm font-semibold text-[#fff] bg-[green] hover:bg-[#026702] hover:text-white" 
        onClick={(e) => {
          console.log("Clicked")
          e.stopPropagation(); 
          updateCard()
        }}
      >
        Edit Blog
      </div>
            </div>


          </div>

          
        }
      />
    </Card>
  );
};

export default SingleBlog;
