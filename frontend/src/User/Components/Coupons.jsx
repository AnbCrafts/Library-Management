import { BadgePercent, Gift, Ticket } from "lucide-react";

export default function Coupons() {
  const coupons = [
    { code: "SAVE20", discount: "20% Off", desc: "On orders above ₹999", icon: <BadgePercent size={35} /> },
    { code: "FREESHIP", discount: "Free Shipping", desc: "No delivery charges", icon: <Gift size={35} /> },
    { code: "WELCOME10", discount: "₹100 Off", desc: "On first purchase", icon: <Ticket size={35} /> },
  ];

  return (
    <div className="p-10 my-5 bg-gray-100 flex flex-col items-center w-full">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">🎟️ Exclusive Coupons for You</h2>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
        {coupons.map((coupon, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-5 border-l-8 border-orange-500 w-full">
            <div className="text-orange-500">{coupon.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold">{coupon.discount}</h3>
              <p className="text-gray-600 text-lg">{coupon.desc}</p>
              <div className="mt-3 bg-gray-200 text-gray-800 px-4 py-2 inline-block rounded-lg font-mono text-md">
                {coupon.code}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
