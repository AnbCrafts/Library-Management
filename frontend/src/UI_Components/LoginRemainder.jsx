import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const LoginRemainder = () => {

    const features = [
      "📖 Add Books to Wishlist",
      "📊 Track Reading Progress",
      "🔔 Receive Due Date Reminders",
      "📝 Write & Manage Reviews",
      "🎯 Personalized Book Recommendations",
      "📬 Get Notifications on New Arrivals",
    ];


    const navigate = useNavigate();
    const {userId} = useParams();

  
    return (
      <div className="bg-[coral] text-white min-w-[100%] z-10 py-16 px-6 md:px-20 min-h-[100vh] text-center">
        <h2 className="text-4xl font-bold mb-6">📚 Look likes you have not joined us yet 📚</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Enhance your reading experience with our interactive and personalized features, just enroll with us or log in to your account
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
  

            <div className='flex items-center justify-center gap-10 w-full '>

        <Link to={'/'} className="inline-block mt-20 px-8 py-3 bg-white text-[coral] text-xl font-bold rounded-lg shadow-md hover:bg-[#f85215] hover:text-white transition-all duration-500">
          Enroll yourself
        </Link>
        <Link to={`/user/${userId}`} className="inline-block mt-20 px-8 py-3 bg-white text-[coral] text-xl font-bold rounded-lg shadow-md hover:bg-[#f85215] hover:text-white transition-all duration-500">
          I'll do it later
        </Link>

            </div>

      </div>
    );
  };
  
  export default LoginRemainder;
  
