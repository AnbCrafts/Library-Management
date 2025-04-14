import { Link, useNavigate, useParams } from "react-router-dom";

const MembershipPlans = () => {
  const navigate = useNavigate();
  const { userId } = useParams(); 
  const plans = [
    {
      title: "👑 VIP Membership",
      benefits: [
        "📚 Unlimited Book Borrowing",
        "🚀 Priority Book Requests",
        "🎁 Exclusive Member Discounts",
        "🔔 Early Access to New Books",
      ],
      bgColor: "bg-white",
      textColor: "text-[coral]",
      hoverBg: "hover:bg-[#f85215]",
      hoverText: "hover:text-white",
    },
    {
      title: "💎 Premium Membership",
      benefits: [
        "📖 Borrow Up to 10 Books/Month",
        "🎟 Special Member-Only Events",
        "📩 Personalized Book Suggestions",
        "🔄 Free Book Exchanges",
      ],
      bgColor: "bg-[#ff7f508f]",
      textColor: "text-white",
      hoverBg: "hover:bg-[#f85215]",
      hoverText: "hover:text-white",
    },
    {
      title: "🔥 Elite Membership",
      benefits: [
        "🎓 Access to Exclusive Research Papers",
        "📢 Invitations to Private Webinars",
        "🏆 VIP Lounge & Study Rooms",
        "📜 Certificate of Membership",
      ],
      bgColor: "bg-white",
      textColor: "text-[coral]",
      hoverBg: "hover:bg-[#f85215]",
      hoverText: "hover:text-white",
    },
  ];

  return (
    <div className="bg-[coral] text-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-bold mb-6">🌟 Choose Your Membership Plan 🌟</h2>
      <p className="text-lg mb-10 max-w-2xl mx-auto">
        Unlock exclusive benefits tailored to enhance your reading experience. Choose the plan that suits you best!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg  shadow-[0px_0px_5px_#fff] p-6 text-lg font-semibold ${plan.bgColor} ${plan.textColor} transition-all duration-500 ${plan.hoverBg} ${plan.hoverText} hover:shadow-[0px_0px_10px_#fff]`}
          >
            <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
            <ul className="text-left space-y-2">
              {plan.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2">
                  ✅ {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-10 items-center">
      <Link to={`/user/${userId}/membership`} className="mt-10 px-8 py-3 bg-[green] text-[white] text-xl font-bold rounded-lg shadow-md hover:bg-[#f85215] hover:text-white transition-all duration-500">
        Become a member
      </Link>
      <Link to={`/user/${userId}`} className="mt-10 px-8 py-3 bg-white text-[coral] text-xl font-bold rounded-lg shadow-md hover:bg-[#f85215] hover:text-white transition-all duration-500">
        Go Back to main menu
      </Link>
      
      </div>
    </div>
  );
};

export default MembershipPlans;
