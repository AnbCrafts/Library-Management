import React, { useContext } from 'react'
import Navbar from '../../GlobalComponents/Navbar'
import { assets } from '../../assets/assets'
import DashboardBenefits from '../Components/DashboardBenefits'
import { AuthContext } from '../../ContextAPI/AuthContext'
import OrderHistory from '../Components/OrderHistory'

const Dashboard = () => { 


  const {loggedInUserData} = useContext(AuthContext);
  const exp_date = loggedInUserData?.memberShipExpiryDate
  ? new Date(loggedInUserData.memberShipExpiryDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  : "N/A";
  const joining_date = loggedInUserData?.memberShipStartDate?new Date(loggedInUserData.memberShipExpiryDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
: "N/A";

  return (
    <div> 
      <Navbar/> 

      <div className='min-h-[90vh] w-full '>

        <div className=' py-2 my-2 w-[90%] mx-auto flex gap-5 items-center justify-between'>

          <div className='px-5 py-5 min-h-[150px] flex-1 shadow-lg bg-[#f4f1ed] rounded-md flex items-center justify-center flex-col font-bold text-[coral] text-2xl'>
             <h2 className='text-[coral] text-lg font-normal '>Books Borrowed</h2>
             <span className='text-3xl font-extrabold text-[coral] '>{loggedInUserData.borrowings?.length}</span>
             </div>
          <div className='px-5 py-5 min-h-[150px] flex-1 shadow-lg bg-[#f4f1ed] rounded-md flex items-center justify-center flex-col font-bold text-[coral] text-2xl'>
             <h2 className='text-[coral] text-lg font-normal '>Active Plan</h2>
             <span className='text-3xl font-extrabold text-[coral] '>{loggedInUserData?.membership}</span>
             </div>
          <div className='px-5 py-5 min-h-[150px] flex-1 shadow-lg bg-[#f4f1ed] rounded-md flex items-center justify-center flex-col font-bold text-[coral] text-2xl'>
             <h2 className='text-[coral] text-lg font-normal '>Plan Expires on</h2>
             <span className='text-3xl font-extrabold text-[coral] '>{exp_date}</span>
             </div>
          <div className='px-5 py-5 min-h-[150px] flex-1 shadow-lg bg-[#f4f1ed] rounded-md flex items-center justify-center flex-col font-bold text-[coral] text-2xl'>
             <h2 className='text-[coral] text-lg font-normal '>Fine charged</h2>
             <span className='text-3xl font-extrabold text-[coral] '>{loggedInUserData?.fine}</span>
             </div>
          <div className='px-5 py-5 min-h-[150px] flex-1 shadow-lg bg-[#f4f1ed] rounded-md flex items-center justify-center flex-col font-bold text-[coral] text-2xl'>
             <h2 className='text-[coral] text-lg font-normal '>Dues</h2>
             <span className='text-3xl font-extrabold text-[coral] '>{loggedInUserData?.fine}</span>
             </div>

        </div>

        <div className='min-h-[500px] my-5 py-5 w-full bg-[#ff7f5092] px-3 pb-10'>
          <h1 className='text-3xl py-2 text-[coral] bg-[#ffffffb1] px-5 w-fit font-semibold mb-3 rounded-sm mx-auto'>User Profile</h1>


    <div className='h-auto w-fit mx-auto py-3 px-5 bg-[#fff] rounded-2xl shadow-[coral] shadow-2xl'>

    <div className="flex p-1 bg-[coral] rounded-full h-[100px] w-[100px] mt-1 shadow-sm items-center justify-center">
  <img src={loggedInUserData?.profilePic} alt="Profile" className="w-full h-full object-cover rounded-full" />
</div>


<div className="flex flex-1 min-w-[300px] shrink-0 mt-1 shadow-sm items-center justify-between gap-5 px-5 py-1 w-fit ">
  <label className="font-semibold text-lg text-[#783701]">Full Name:</label>
  <span className="text-2xl text-[coral]">{loggedInUserData?.firstName + " "+ loggedInUserData?.lastName}</span>
</div>

<div className="flex flex-1 min-w-[300px] shrink-0 mt-1 shadow-sm items-center justify-between gap-5 px-5 py-1 w-fit ">
  <label className="font-semibold text-lg text-[#783701]">Phone:</label>
  <span className="text-2xl text-[coral]">+91 {loggedInUserData?.phone}</span>
</div>

<div className="flex flex-1 min-w-[300px] shrink-0 mt-1 shadow-sm  items-center justify-between gap-5 px-5 py-1 w-fit ">
  <label className="font-semibold text-lg text-[#783701]">Address:</label>
  <span className="text-2xl text-[coral]">{loggedInUserData?.address}</span>
</div>

<div className="flex flex-1 min-w-[300px] shrink-0 mt-1 shadow-sm items-center justify-between gap-5 px-5 py-1 w-fit ">
  <label className="font-semibold text-lg text-[#783701]">Gmail:</label>
  <span className="text-2xl text-[coral]">{loggedInUserData?.email}</span>
</div>



<div className="flex flex-1 min-w-[300px] shrink-0 mt-1 shadow-sm items-center justify-between gap-5 px-5 py-1 w-fit ">
  <label className="font-semibold text-lg text-[#783701]">Date of Joining:</label>
  <span className="text-2xl text-[coral]">{joining_date}</span>
</div>

<div className="flex flex-1 min-w-[300px] shrink-0 mt-1 shadow-sm items-center justify-between gap-5 px-5 py-1 w-fit ">
  <label className="font-semibold text-lg text-[#783701]">Status:</label>
  <span className="text-2xl text-[coral]">{loggedInUserData?.status}</span>
</div>

{/* Newly Added Fields */}
<div className="flex flex-1 min-w-[300px] shrink-0 mt-1 shadow-sm items-center justify-between gap-5 px-5 py-1 w-fit ">
  <label className="font-semibold text-lg text-[#783701]">Membership ID:</label>
  <span className="text-2xl text-[coral]">LIB123456</span>
</div>

<div className="flex flex-1 min-w-[300px] shrink-0 mt-1 shadow-sm items-center justify-between gap-5 px-5 py-1 w-fit ">
  <label className="font-semibold text-lg text-[#783701]">Membership Type:</label>
  <span className="text-2xl text-[coral]">Premium</span>
</div>

<div className="flex flex-1 min-w-[300px] shrink-0 mt-1 shadow-sm items-center justify-between gap-5 px-5 py-1 w-fit ">
  <label className="font-semibold text-lg text-[#783701]">Membership Expiry Date:</label>
  <span className="text-2xl text-[coral]">{joining_date}</span>
</div>

<div className="flex flex-1 min-w-[300px] shrink-0 mt-1 shadow-sm items-center justify-between gap-5 px-5 py-1 w-fit ">
  <label className="font-semibold text-lg text-[#783701]">Books Borrowed:</label>
  <span className="text-2xl text-[coral]">{loggedInUserData?.borrowings?.length}</span>
</div>

{/* <div className="flex flex-1 min-w-[300px] shrink-0 mt-1 shadow-sm items-center justify-between gap-5 px-5 py-1 w-fit ">
  <label className="font-semibold text-lg text-[#783701]">Total Books Borrowed:</label>
  <span className="text-2xl text-[coral]">25</span>
</div> */}

<div className="flex flex-1 min-w-[300px] shrink-0 mt-1 shadow-sm items-center justify-between gap-5 px-5 py-1 w-fit ">
  <label className="font-semibold text-lg text-[#783701]">Due Amount/Penalties:</label>
  <span className="text-2xl text-[coral]">₹{loggedInUserData?.fine}</span>
</div>

</div>




           

        </div>
        


      </div>


      {/* Orders History */}

      {/* <div className='h-auto w-[90%] mx-auto my-3 py-2'>
        <OrderHistory/>
      </div> */}
      


      <DashboardBenefits/>


    </div>
  )
}

export default Dashboard