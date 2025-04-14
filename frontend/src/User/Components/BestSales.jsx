import React from "react";
import { Card } from "antd";
import "./BestSales.css";

const BestSales = ({ title, author, coverImg, price }) => {
  return (
    <div className="best-sales-card">
      <div className="card-front">
        <img src={coverImg} alt={title} className="card-image object-cover" />
        <h2 className="card-title">{title}</h2>

      </div>
      <div className="card-back">
        <h2 className="card-title">{title}</h2>
        <p className="card-author">By {author}</p>
        <p className="card-price">Price: ₹{price}</p>
        <button className="view-button">View</button>

      </div>
    </div>
  );
};

export default BestSales;
