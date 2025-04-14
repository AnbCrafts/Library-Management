import React from 'react'

const DashboardBenefits = () => {
    const dashboardFeatures = [
      "📚 Track Your Borrowed Books",
      "📝 View & Manage Bookmarks",
      "📅 Check Due Dates & Fines",
      "💬 Request New Books",
      "🛒 Upgrade Your Membership",
      "📩 Get Personalized Recommendations",
    ];
  
    const importantReminders = [
      "⚠️ Don't forget to return books on time to avoid fines!",
      "📌 Pay your dues before the deadline to continue your membership benefits.",
      "🚀 Explore new arrivals and trending books every week!",
      "🔔 Enable notifications to get important updates instantly!",
    ];
  
    return (
      <div className="fade-in mx-auto max-w-[90%] mt-5 mb-10 bg-[coral] text-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-6">📌 User Dashboard & Important Reminders 📌</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Access and manage your activities effortlessly with our interactive dashboard.
        </p>
  
        {/* Features Grid */}
        <div className="fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-[coral] rounded-lg shadow-lg p-5 text-lg font-semibold hover:bg-[#f85215] hover:text-white transition-all duration-500"
            >
              {feature}
            </div>
          ))}
        </div>
  
        {/* Important Reminders */}
        <div className="fade-in bg-white text-[coral] rounded-lg shadow-md p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">⚠️ Important Reminders</h3>
          <ul className="text-lg space-y-3">
            {importantReminders.map((reminder, index) => (
              <li key={index} className="bg-[#ff7f506d] text-white p-3 rounded-md">
                {reminder}
              </li>
            ))}
          </ul>
        </div>
  
        
      </div>
    );
  };
  
  

export default DashboardBenefits