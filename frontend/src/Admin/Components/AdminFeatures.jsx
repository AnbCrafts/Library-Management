import React from 'react'

const AdminFeatures = () => {
    const features = [
      "📌 Add & Manage Books",
      "👥 Approve or Remove Users",
      "📊 View Website Analytics",
      "🛠 Handle User Complaints",
      "📢 Send Announcements & Notifications",
      "🔄 Update Membership Plans & Benefits",
    ];
  
    return (
      <div className= "fade-in mb-5 max-w-[90%] mx-auto mt-3 bg-[coral] text-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-6">🛠 Admin Functionalities & Special Features 🛠</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Powerful tools designed to help admins efficiently manage users, books, and the platform.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-[coral] rounded-lg shadow-lg p-5 text-lg font-semibold hover:bg-[#f85215] hover:text-white transition-all duration-500"
            >
              {feature}
            </div>
          ))}
        </div>
  
        <button className="mt-10 px-8 py-3 bg-white text-[coral] text-xl font-bold rounded-lg shadow-md hover:bg-[#f85215] hover:text-white transition-all duration-500">
          Manage Admin Panel
        </button>
      </div>
    );
  };
  
  export default AdminFeatures;
  