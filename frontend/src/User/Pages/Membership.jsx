import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../GlobalComponents/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../ContextAPI/AuthContext";
 
const Membership = () => {
  const { subscriptionDetails, backendURI, activePlans, setActivePlans, setSubscriptionDetails } = useContext(AuthContext);

  
  const { userId } = useParams();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [preference, setPreference] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [membershipType, setMembershipType] = useState("Paid");
  const [membershipDetails, setMembershipDetails] = useState({});

  useEffect(() => {
    setMembershipDetails({
      name: `${firstName} ${lastName}`.trim(),
      email,
      password,
      preference,
      address: `${street}, ${province}, ${postal}`.trim(),
      phoneNumber,
      membershipType
    });
  }, [firstName, lastName, street, province, postal, email, password, preference, phoneNumber,membershipType]);

  useEffect(() => {
    console.log("Membership Details:", membershipDetails);
  }, [membershipDetails]);

  const addMember = async (event) => {
    event.preventDefault();
    
    if (!backendURI) {
      console.error("Backend URI is undefined!");
      return alert("Backend server is not configured.");
    }

    if (!membershipDetails.name || !membershipDetails.email || !membershipDetails.password) {
      console.error("Some membership details are missing!");
      return alert("Please fill in all required fields.");
    }

    try {
      const response = await axios.post(`${backendURI}/api/membership/add`, membershipDetails);

      if (!response.data.success) {
        console.error("API Error:", response.data.message);
        return alert(response.data.message);
      }

      const details = response.data.data;
      const id = response.data.memID;

      setSubscriptionDetails(details);
      setActivePlans(id);

      alert("Subscription successful");
      navigate(`/user/${userId}`);

      setFirstName("");
      setLastName("");
      setStreet("");
      setProvince("");
      setPostal("");
      setEmail("");
      setPassword("");
      setPreference("");
      setPhoneNumber("");
    } catch (error) {
      console.error("Error occurred while subscribing:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    localStorage.setItem("subscriptionDetails", JSON.stringify(subscriptionDetails));
    localStorage.setItem("activePlans", JSON.stringify(activePlans));
  }, [subscriptionDetails, activePlans]);

  return (
    <div>
      <Navbar />

      <div className="min-h-[100vh] w-[90%] mx-auto">
        <div className="border border-[coral] mt-3 mx-auto bg-[#fff] p-6 rounded-lg shadow-lg text-[coral]">
          <h2 className="text-2xl font-bold text-center mb-4">MEMBERSHIP APPLICATION FORM</h2>

          <form className="space-y-4" onSubmit={addMember}>
            {/* Name of Applicant */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-lg">First Name</label>
                <input type="text" className="border w-full p-2 rounded text-black" placeholder="First Name"
                  value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div>
                <label className="block text-lg">Last Name</label>
                <input type="text" className="border w-full p-2 rounded text-black" placeholder="Last Name"
                  value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>

            {/* Mailing Address */}
            <div>
              <label className="block text-lg">Street Address</label>
              <input type="text" className="border w-full p-2 rounded text-black" placeholder="Street Address"
                value={street} onChange={(e) => setStreet(e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-lg">State/Province</label>
                <input type="text" className="border w-full p-2 rounded text-black" placeholder="State/Province"
                  value={province} onChange={(e) => setProvince(e.target.value)} />
              </div>
              <div>
                <label className="block text-lg">Postal Code</label>
                <input type="text" className="border w-full p-2 rounded text-black" placeholder="Postal Code"
                  value={postal} onChange={(e) => setPostal(e.target.value)} />
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-lg">Phone Number</label>
                <input type="text" className="border w-full p-2 rounded text-black" placeholder="Phone Number"
                  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              </div>
            </div>
            <div>
              <label className="block text-lg">Email Address</label>
              <input type="email" className="border w-full p-2 rounded text-black" placeholder="Email Address"
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label className="block text-lg">Password</label>
              <input type="password" className="border w-full p-2 rounded text-black" placeholder="Password"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
              <label className="block font-semibold">Membership Type</label>
              <select className="border w-full p-2 text-black rounded-md"
                value={preference} onChange={(e) => setPreference(e.target.value)}>
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
                <option value="elite">Elite</option>
              </select>
            </div>

            {/* Submit Button */}
            <button className="border w-full bg-white text-[coral] font-bold py-2 px-4 rounded hover:bg-gray-200 transition-all inline-block mx-auto">
              Submit Application
            </button>
          </form>
        </div>
      </div>

      <div className="fade-in bg-[coral] mx-auto max-w-[90%] mb-5 text-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-6">🌟 Unlock Exclusive Benefits! 🌟</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Join our membership and gain access to premium content, exclusive features, and special discounts.  
          Elevate your experience today!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "📚 Unlimited Access to Premium Content",
            "🚀 Early Access to New Features",
            "🎁 Special Discounts on Courses",
            "📞 Priority Customer Support",
            "🌟 Exclusive Member-Only Events",
            "📜 Personalized Recommendations",
          ].map((benefit, index) => (
            <div key={index} className="fade-in bg-white text-[coral] rounded-lg shadow-lg p-5 text-lg font-semibold hover:bg-[#f85215] hover:text-white transition-all duration-500">
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
