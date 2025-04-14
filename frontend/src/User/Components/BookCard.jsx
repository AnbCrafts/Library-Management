import React, { useState } from "react";
import { Card } from "antd";

const { Meta } = Card;

const BookCard = ({ image, name, author, language,category, clickHandler,authorImg,status,description,available }) => {
  const [count,setCount]  = useState(0);
 
  function trimText(text, wordLimit = 15) {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + " ..." : text;
  }
 
  const desc = trimText(description); 


  return (
    <div className="min-h-[400px] w-[310px] shadow-md cursor-pointer text-center text-[#949393] rounded-sm relative bg-[#f4f1ed] z-0" >
     <div>
     <div className={`cursor-pointer p-3 rounded-full absolute flex items-center justify-center -top-2 -right-2 ${count<=available? "bg-[#ffdbcc] text-[#c17130]":"bg-[red] text-white"} border h-[10px] w-[10px] z-10  font-semibold text-2xl`} onClick={()=>setCount(count+1)}>
        +
      </div>
     <div className={`${
    count > 0
      ? "cursor-pointer p-3 rounded-full font-semibold absolute flex items-center justify-center -top-2 right-6 h-[10px] w-[10px] z-10 text-2xl bg-[#ffdbcc] text-[#555]" 
      : "hidden"
  }`} onClick={()=>setCount(count-1)}>
        -
      </div>
      <div
  className={`${
    count > 0
      ? `cursor-pointer p-4 rounded-full absolute flex items-center justify-center -top-2 -left-2 h-[10px] w-[10px] z-10 ${
          count <= available ? "bg-[#ffdbcc] text-[#555]" : "bg-[red] text-white"
        } font-light text-sm`
      : "hidden"
  }`}
>
  {count}
</div>

    <div className={`absolute top-5 right-5 z-10 text-sm font-semibold rounded ${status === 'Available' && count<=available? "bg-[green]":"bg-[red]"}  text-white`}>
    <span className=" py-1 px-2 rounded-md"> {count<=available ? status:"Out of Stock"}</span>

    </div>
     </div>

      <div className="h-[150px] w-full relative"onClick={clickHandler}>
        <img src={image} className="h-full w-full object-cover rounded-t-sm" alt="" />
      <div className="absolute left-[50%] -bottom-9 h-[100px] w-[100px] -translate-x-[50%] rounded-full p-1 border bg-[honeydew]">
    <img src={authorImg} className="h-full w-full rounded-full object-cover" alt="" />
        
      </div>
      </div>

      <div className="pt-12 px-3  h-auto w-full" onClick={clickHandler}>
        <h1 className="text-lg font-semibold text-[#c17130]">{name}</h1>
        <h2 className="">{author}</h2>
        <p className=" ">
          <span className="text-sm"> {language} </span>
          <span className="text-sm"> {category} </span>
        </p>

          <div className="pt-10 px-5 text-sm">
        <p className="bg-[#c17130] text-white p-1">{desc}</p>

          </div>
      </div>



    </div>
  );
};

export default BookCard;
