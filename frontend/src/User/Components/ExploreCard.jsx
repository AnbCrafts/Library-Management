import React from "react";
import { Card, Button } from "antd";
import "./ExploreCard.css"; 

const ExploreCard = ({ img, text, para }) => {
  const { Meta } = Card;

  return (
    <Card
      hoverable
      style={{ width: 300, borderRadius: "10px", overflow: "hidden" }}
      className="explore-card"
    >
      <div className="explore-card-content">
        <Meta title={text} description={para} />
      </div>
      <div className="explore-card-img">
        <img alt={text} src={img} className="object-cover h-full w-full"   />
        <Button className="redeem-button hover:bg-white text-[#555]">Redeem Offer</Button>
      </div>
    </Card>
  );
};

export default ExploreCard;
