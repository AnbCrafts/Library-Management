import React from "react";
import { Card } from "antd";
import { format } from "date-fns";

const BlogCard = ({ content, title, date, coverImg, clickHandler }) => {
  function trimText(text, wordLimit = 15) {
    if(!text) return ""
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + " ..." : text;
  }

  const newContent = trimText(content);
  const formattedDate = date ? format(new Date(date), "MMMM/dd/yy") : "";

  return ( 
    <Card
      hoverable
      onClick={clickHandler}
      cover={<img alt={title} src={coverImg} className="h-[200px] object-cover" />}
      className="min-h-[400px] w-[320px] shadow-md cursor-pointer text-center text-[#949393] rounded-sm bg-[#f4f1ed]"
    >
      <Card.Meta
        title={title}
        description={
          <div>
            <p>{newContent}</p>
            {formattedDate && <p className="text-sm py-2 text-[#c17130]">{formattedDate}</p>}
          </div>
        }
      />
    </Card>
  );
};

export default BlogCard;
