import React from "react";

const UserOverView = ({ mail, phone, name, img, clickHandler, status }) => {
  return (
    <div 
      className="p-2 bg-[#f4f1ed] w-[400px] min-h-[100px] relative rounded shadow-[0px_0px_10px_gray] cursor-pointer"
      onClick={clickHandler}
    >
      <div className="flex items-center justify-start gap-4">
        <div className="h-[70px] w-[70px] rounded-full">
          <img
            src={img}
            alt="profile"
            className="h-[100%] w-[100%] object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#272727]">{name}</h3>
          <p className="text-m font-semibold text-[#27272796]">{phone}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-m pt-1 font-normal text-[#27272796]">{mail}</p>{" "}
        <span
          className={`font-semibold text-white px-2 py-1 rounded text-xs ${
            status === "active" || status === "Active"
              ? "bg-[green]"
              : "bg-[red]"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default UserOverView;
