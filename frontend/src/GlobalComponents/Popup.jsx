import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  

  useEffect(() => {
    setIsOpen(true); 
  }, []);

  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Popup Modal"
        className="bg-white p-8 rounded-lg shadow-lg w-96 mx-auto my-auto"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-50"
      >
        <h2 className="text-xl font-bold">Welcome to Our Website!</h2>
        <p className="mt-4">We are glad to have you here.</p>
        <button
          onClick={closeModal}
          className="mt-6 bg-[#c17130] text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Popup;
