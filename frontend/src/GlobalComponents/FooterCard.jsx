import React from 'react';

const FooterCard = ({ imageSrc, text }) => {
  return (
    <div className="relative w-64 h-40 m-4 text-center bg-cover bg-center rounded-lg shadow-lg overflow-hidden group hover:shadow-[8px_8px_5px_gray]" style={{ backgroundImage: `url(${imageSrc})` }}>
      {/* Default Overlay */}
      <div className="absolute inset-0 bg-[#c1713056] bg-opacity-50 flex items-center justify-center flex-col text-[#c17130] transition-transform duration-300 transform group-hover:-translate-y-full">
        <h4 className="px-2 py-1 text-lg font-semibold text-white rounded bg-[#c17130] my-4">{text}</h4>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-0 flex items-center justify-center flex-col transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
        <button className="px-4 py-1 text-white bg-red-500 rounded hover:bg-white hover:text-red-500 transition-all duration-300">
          Visit Now
        </button>
      </div>
    </div>
  );
};

export default FooterCard;
