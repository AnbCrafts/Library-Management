import React from "react";
import { assets } from "../../assets/assets";

const SingleBookViewCard = ({ book,delBook }) => {
  if (!book) {
    return <p>Loading...</p>; // Show loading text if `book` is not available
  }

  const {
    title,
    author,
    authorImg,
    category,
    coverImg,
    language,
    location,
    price,
    publicationYear,
    publisher,
    status,
    totalCount,
    availableCount,
    borrowedCount,
    description,
  } = book;

  return (
    <div className="min-h-[100vh] w-full bg-[#fff] py-5">
      <div className="min-h-[40vh] h-full w-[90%] mx-auto shadow-[2px_2px_2px_#c17130] py-2 pb-5 px-5">
        <div className="flex items-start justify-center gap-5">
          <img
            src={coverImg} // Fallback for cover image
            className="h-[500px] w-[800px] object-cover rounded-lg"
            alt={title || "Book Cover"}
          />

          <div className="p-5 bg-[#f4f1ed] text-[#27272796] text-center rounded-md">
            <img
              src={authorImg} // Fallback for author image
              className="h-[200px] w-[200px] my-2 rounded-full"
              alt={author}
            />
            <h1>{title}</h1>
            <h2>{author}</h2>
          </div>
        </div>
        <div className="py-5">
          <p>
            <span>Description: </span> {description || 'No description available'}
          </p>
        </div>
        <div className="flex items-center justify-start gap-5">
        <div className=" w-fit px-2 rounded-full cursor-pointer text-lg font-semibold text-[#f4f1ed] bg-[#333] hover:bg-black hover:text-white" onClick={delBook}>Remove Book</div>
        <div className=" w-fit px-2 rounded-full cursor-pointer text-lg font-semibold text-[#fff] bg-[green] hover:bg-[#026102] hover:text-white" onClick={delBook}>Edit Book</div>


        </div>

        <div className="py-5 min-h-[300px] w-[100%] border border-[#c17130] my-5 p-2">
          <div className="flex items-center text-center justify-between gap-2 border-b border-[#c17130]">
            <h1 className="flex-1 text-2xl text-[#c17130] font-bold">
              Attributes
            </h1>
            <h1 className="flex-1 text-2xl text-[#c17130] font-bold">Value</h1>
          </div>

          <div className="flex items-center text-center justify-between gap-2">
            <ul className="flex-1 text-lg book-list h-[100vh] flex items-center justify-between flex-col">
              <li>title</li>
              <li>author</li>
              <li>category</li>
              <li>language</li>
              <li>location</li>
              <li>price</li>
              <li>publication year</li>
              <li>publisher</li>
              <li>status</li>
              <li>total count</li>
              <li>available count</li>
              <li>borrowed count</li>
              <li className="h-[80px]">author image</li>
              <li className="h-[80px]">cover image</li>
            </ul>
            <ul className="flex-1 text-lg book-list h-[100vh] flex items-center justify-between flex-col">
              <li>{title}</li>
              <li>{author}</li>
              <li>{category}</li>
              <li>{language}</li>
              <li>{location}</li>
              <li>{price}</li>
              <li>{publicationYear}</li>
              <li>{publisher}</li>
              <li>{status}</li>
              <li>{totalCount}</li>
              <li>{availableCount}</li>
              <li>{borrowedCount}</li>
              <li><img src={authorImg} className="h-[80px] w-[80px] mx-auto" alt="" /></li>
              <li><img 
              className="h-[80px] w-[80px] mx-auto" src={coverImg} alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBookViewCard;
