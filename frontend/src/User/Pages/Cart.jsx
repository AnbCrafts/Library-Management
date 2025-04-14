import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import Coupons from '../Components/Coupons'
import Item from '../Components/Item'
import Navigator from '../../GlobalComponents/Navigator'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../ContextAPI/AuthContext'

const Cart = () => { 
    const {userId} = useParams();
    const {orderDetails} = useContext(AuthContext);
    const [obtainedItem, setObtainedItem] = useState({
        img:"",
        price:"",
        author:"",
        title:"",
        quantity:1
    });

    useEffect(()=>{
        const details = localStorage.getItem("orderDetails");
        if (details) {
            console.log(details)
            // setObtainedItem(details); 
            // console.log("Obtained Item -> ", obtainedItem)
        }
    },[])
    
  return (
    <div className='  min-h-[100vh] w-[100%] mx-auto'>
        <Navigator address={`/user/${userId}`} icon={assets.home} position={'left-2'}/>
        <div className="px-12 py-6 bg-[#f45f29] shadow-lg text-center">
    <div className='flex items-center justify-center gap-5'>
        <img src={assets.LOGO} className='h-[80px] w-[80px] rounded-full shadow-[0px_0px_5px_#fff]' alt="" />
    <h1 className="text-black font-bold text-5xl tracking-wide">BiblioTek</h1>

    </div>
    <h2 className="text-3xl text-white font-semibold mt-2 flex items-center justify-center gap-2">
        🎉 <span>Great Picks! Ready to Check Out?</span>
    </h2>
    <p className="text-lg text-[#fff] mt-3 max-w-2xl mx-auto">
        Looks like you’ve found something awesome! Let’s make sure you get everything you love before it’s gone.
    </p>
</div>

    <div className='py-3 w-[90%] mx-auto flex h-full justify-between gap-4'>
            {/* items */}
            <div className='px-3 shadow-lg rounded-md  min-h-[10vh] flex-1'>
                {/* <Item/> */}

                {
                    // orderDetails.length !=0
                    // ? <Item img={obtainedItem?.items[0]?.img} author={obtainedItem?.items[0]?.author} title={obtainedItem?.items[0]?.title} price={obtainedItem?.items[0]?.price} quantity={1}/>
                    // :<p>No Order placed yet</p>
                }
            </div>

            {/* amount and coupons */}
            <div className='px-2 w-[400px] '>
            <div className="flex mb-4 border flex-wrap gap-4 p-4 bg-white shadow-lg rounded-lg">
    <div className="flex items-center justify-between gap-10 w-full min-w-[240px] mx-auto bg-[coral] text-white font-semibold p-3 rounded-lg shadow-md">
        <span>💰 Savings</span>
        <span>$20</span>
    </div>

    <div className="flex items-center justify-between gap-10 w-full min-w-[240px] mx-auto bg-[coral] text-white font-semibold p-3 rounded-lg shadow-md">
        <span>🎟️ Discount</span>
        <span>15%</span>
    </div>

    <div className="flex items-center justify-between gap-10 w-full min-w-[240px] mx-auto bg-[coral] text-white font-semibold p-3 rounded-lg shadow-md">
        <span>📦 Items</span>
        <span>5</span>
    </div>

    <div className="flex items-center justify-between gap-10 w-full min-w-[240px] mx-auto bg-[coral] text-white font-semibold p-3 rounded-lg shadow-md">
        <span>💳 Total Price</span>
        <span>$100</span>
    </div>

    <div className="flex items-center justify-between gap-10 w-full min-w-[240px] mx-auto bg-[coral] text-white font-semibold p-3 rounded-lg shadow-md">
        <span>🚀 Delivery By</span>
        <span>4th Jan</span>
    </div>
</div>


            <div className='h-[400px] border px-2 rounded-lg shadow-lg shadow-[#5557] bg-white'>
    <h1 className='text-[coral] font-semibold text-3xl text-center py-2'>🛒 Cart Total</h1>

    <div className='px-3 py-2 flex items-center justify-between'>
        <span className=' text-[#555]  font-semibold text-md'>💰 Total Amount</span>
        <span className=' text-[#000] font-semibold text-lg'>—</span>
        <span className=' text-[#000] font-semibold text-lg'>$100</span>
    </div>

    <div className='px-3 py-2 flex items-center justify-between'>
        <span className=' text-[#555]  font-semibold text-md'>🎟️ Coupon Discount</span>
        <span className=' text-[#000] font-semibold text-lg'>—</span>
        <span className=' text-[#000] font-semibold text-lg'>$1</span>
    </div>

    <div className='px-3 py-2 flex items-center justify-between'>
        <span className=' text-[#555]  font-semibold text-md'>⚖️ Fine</span>
        <span className=' text-[#000] font-semibold text-lg'>—</span>
        <span className=' text-[#000] font-semibold text-lg'>$0</span>
    </div>

    <div className='px-3 py-2 flex items-center justify-between'>
        <span className=' text-[#555]  font-semibold text-md'>🕒 Previous Dues</span>
        <span className=' text-[#000] font-semibold text-lg'>—</span>
        <span className=' text-[#000] font-semibold text-lg'>$0</span>
    </div>

    <div className='px-3 py-2 flex items-center justify-between border-t-2 border-b-2'>
        <span className=' text-[coral] font-semibold text-lg'>💳 Grand Total</span>
        <span className=' text-[#000] font-semibold text-lg'>—</span>
        <span className=' text-[#000] font-semibold text-2xl'>$99</span>
    </div>

    <button className='block mt-10 mx-auto bg-[coral] px-5 py-2 rounded-md text-white font-semibold cursor-pointer hover:bg-[#e04e1a] transition flex items-center gap-2'>
         Proceed to Pay <span>🔒</span>
    </button>

    <p className=' mt-4 text-sm italic font-semibold text-[#55555591]'>🪙 Your total saving - 1$</p>
</div>



            </div>





        </div>

        <Coupons/>


        <div className="p-10 bg-white shadow-xl my-5 rounded-lg w-full max-w-6xl mx-auto">
    <h2 className="text-[coral] text-4xl font-bold text-center mb-6">🌟 Why Shop With Us?</h2>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center bg-[coral] text-white font-semibold p-6 rounded-lg shadow-md">
            <span className="text-5xl">🚚</span>
            <h3 className="text-xl mt-3">Fast & Free Delivery</h3>
            <p className="text-sm mt-1 text-center">Get your books delivered quickly at no extra cost!</p>
        </div>

        <div className="flex flex-col items-center bg-[coral] text-white font-semibold p-6 rounded-lg shadow-md">
            <span className="text-5xl">📚</span>
            <h3 className="text-xl mt-3">Wide Collection</h3>
            <p className="text-sm mt-1 text-center">Choose from thousands of books across various genres.</p>
        </div>

        <div className="flex flex-col items-center bg-[coral] text-white font-semibold p-6 rounded-lg shadow-md">
            <span className="text-5xl">💰</span>
            <h3 className="text-xl mt-3">Best Discounts</h3>
            <p className="text-sm mt-1 text-center">Enjoy exclusive deals and discounts on every purchase.</p>
        </div>

        <div className="flex flex-col items-center bg-[coral] text-white font-semibold p-6 rounded-lg shadow-md">
            <span className="text-5xl">🔄</span>
            <h3 className="text-xl mt-3">Easy Returns</h3>
            <p className="text-sm mt-1 text-center">Hassle-free returns and refund policies for your convenience.</p>
        </div>

        <div className="flex flex-col items-center bg-[coral] text-white font-semibold p-6 rounded-lg shadow-md">
            <span className="text-5xl">🌍</span>
            <h3 className="text-xl mt-3">Eco-Friendly</h3>
            <p className="text-sm mt-1 text-center">We use sustainable packaging to reduce our carbon footprint.</p>
        </div>

        <div className="flex flex-col items-center bg-[coral] text-white font-semibold p-6 rounded-lg shadow-md">
            <span className="text-5xl">✨</span>
            <h3 className="text-xl mt-3">24/7 Support</h3>
            <p className="text-sm mt-1 text-center">Our customer support team is always here to assist you.</p>
        </div>
    </div>
</div>



    </div>
  )
}

export default Cart