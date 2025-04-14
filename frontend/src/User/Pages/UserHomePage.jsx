import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../GlobalComponents/Navbar'
import Navigator from '../../GlobalComponents/Navigator'
import { assets } from '../../assets/assets'
import ExploreCard from '../Components/ExploreCard'
import { Link, useNavigate, useParams } from 'react-router-dom'
import BestSales from '../Components/BestSales'
import BestBook from '../Components/BestBook'
import SalesDB from '../../assets/salesDB'
import BestAuthor from '../Components/BestAuthor'
import AuthorsDB from '../../assets/AuthorsDB'
import ScrollFadeComponent from '../../UI_Components/ScrollFade'
import { AuthContext } from '../../ContextAPI/AuthContext'
import LoginRemainder from '../../UI_Components/LoginRemainder'




const UserHomePage = () => { 
  const navigate = useNavigate();
  const { userId } = useParams(); 

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling..."); // Debugging
      document.querySelectorAll(".fade-in").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add("show");
        } else {
          el.classList.remove("show");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  // const enrolled_user = localStorage.getItem("UserToken");
  // const [show, setShow] = useState(false);
  // const [count, setCount] = useState(0); 
   
  // useEffect(() => {
  //   if (!enrolled_user && count < 5) {
  //     const interval = setInterval(() => {
  //       setShow(true);
        
  //       setTimeout(() => {
  //         setShow(false);
  //       }, 5000);
  
  //       setCount((prev) => prev + 1); 
  
  //     }, 50000); 
  
  //     return () => clearInterval(interval);
  //   }
  // }, [enrolled_user, count]);
  
  return ( 
    
    (<div className=' min-h-[100vh] w-full'>
      <Navigator icon={assets.home} address={'/'} position={'left-4'}bg={'coral'} />
      <Navbar/> 

      <div className=' relative w-[90%] my-3 h-auto mx-auto'>
        <img src={assets.banner} className='h-[600px] w-full object-cover' alt="" />
        
        <div className=' absolute p-4 top-10 left-10 rounded max-w-[700px] '>
          <h1 className='text-5xl font-semibold text-[#fff] bg-[#555555b9] py-2 px-5 rounded'>A World of Knowledge <br /> Awaits You!!</h1>
            
            <p className='max-w-[400px] font-light text-[#fff] bg-[#555555b9] py-2 px-5 mt-5 rounded'>
             Unlock the doors to imagination, wisdom, and learning with our carefully curated library collection. Start your journey today!
            </p>

        </div>
          <div className='  absolute w-auto h-auto  bottom-5 right-5'>
          <Link to={`/user/${userId}/plans`}>
            <p className='text-[#fff] bg-[#555555b9] py-5 cursor-pointer hover:bg-[#fff] hover:text-[#555] px-10 text-lg flex items-center justify-between '>Explore our plans and Membership
            <span><img src={assets.more} className='h-[40px] w-[40px]' alt="" /></span> </p>
          </Link>

            </div>  
      </div>

     <div className='fade-in py-10 w-[90%] mx-auto bg-[#ffdbcc] px-2 flex items-center justify-between'>
      <ExploreCard img={assets.offers} text={"Available Offers"} para={"Unlock exclusive discounts and special rental rates on your favorite books—explore our latest offers now!"}/>
      <ExploreCard img={assets.member} text={"3 Tier Membership Plans "} para={"Join our 3-tier membership plan for exclusive perks, priority access, and unbeatable savings!"}/>
      <ExploreCard img={assets.book} text={"Wide range of collection"} para={"Explore our wide range of books across various genres, offering something for every reader!"}/>
      <ExploreCard img={assets.service} text={"Personalized Recommendations"} para={"Discover books tailored just for you with our personalized recommendations based on your reading history and preferences!"}/>
      </div> 


      <div className='fade-in py-5 mx-auto w-[90%]'>

        <h1 className='text-3xl font-semibold text-[#c17130] '>Popular Choices</h1>
        <div className='fade-in flex items-center py-2 justify-between w-full h-auto'>

        <div className='fade-in max-w-[400px] bg-[#f48657] px-4 py-5 shadow-[10px_10px_1px_#f48657] border '>
          <h1 className='text-3xl py-2 text-[#fff]'>Popular Choices for Every Book Lover</h1>
          <p className='py-2 text-[#555]'>Explore a curated collection of our most loved books, handpicked by readers just like you. Whether you're into timeless classics, contemporary bestsellers, or gripping thrillers, our popular choices section has something for every taste and interest. Discover your next favorite read today!</p>
          <Link  to={`/user/${userId}/books`} className='inline-block text-lg text-white mt-5 py-2 px-4 border hover:bg-white hover:text-[#555] '>Explore Our Books</Link>
        
        </div>
        <div className='fade-in flex-1 flex items-center justify-between gap-2 flex-wrap p-5 '>

         <img src={assets.pbook1} className='flex-1 object-cover h-[300px] w-[400px] hover:scale-[1] cursor-pointer scale-[.97]' alt="" />
         <img src={assets.pbook2} className='flex-1 object-cover h-[300px] w-[400px] hover:scale-[1] cursor-pointer scale-[.97]' alt="" />
         <img src={assets.pbook3} className='flex-1 object-cover h-[300px] w-[400px] hover:scale-[1] cursor-pointer scale-[.97]' alt="" />
         <img src={assets.pbook4} className='flex-1 object-cover h-[300px] w-[400px] hover:scale-[1] cursor-pointer scale-[.97]' alt="" />
         <img src={assets.pbook5} className='flex-1 object-cover h-[300px] w-[400px] hover:scale-[1] cursor-pointer scale-[.97]' alt="" />
         <img src={assets.pbook6} className='flex-1 object-cover h-[300px] w-[400px] hover:scale-[1] cursor-pointer scale-[.97]' alt="" />
         <img src={assets.pbook7} className='flex-1 object-cover h-[300px] w-[400px] hover:scale-[1] cursor-pointer scale-[.97]' alt="" />
        </div>
        </div>
      </div>



 
      <div className='fade-in py-5 mx-auto w-[90%] bg-[#ffdbcc] pr-2 '>

        <h1 className='text-3xl pl-2 font-semibold text-[#c17130] '>New Arrivals</h1>
        <div className='fade-in flex items-center py-2 justify-between w-full h-auto'>

        <div className='fade-in flex-1 flex items-center justify-between gap-2 flex-wrap p-5 '>

         <img src={assets.pbook1} className='flex-1 object-cover h-[300px] w-[400px] hover:scale-[1] cursor-pointer scale-[.97]' alt="" />
         <img src={assets.pbook2} className='flex-1 object-cover h-[300px] w-[400px] hover:scale-[1] cursor-pointer scale-[.97]' alt="" />
         <img src={assets.pbook3} className='flex-1 object-cover h-[300px] w-[400px] hover:scale-[1] cursor-pointer scale-[.97]' alt="" />
         <img src={assets.pbook4} className='flex-1 object-cover h-[300px] w-[400px] hover:scale-[1] cursor-pointer scale-[.97]' alt="" />
         <img src={assets.pbook5} className='flex-1 object-cover h-[300px] w-[400px] hover:scale-[1] cursor-pointer scale-[.97]' alt="" />
         <img src={assets.pbook6} className='flex-1 object-cover h-[300px] w-[400px] hover:scale-[1] cursor-pointer scale-[.97]' alt="" />
         <img src={assets.pbook7} className='flex-1 object-cover h-[300px] w-[400px] hover:scale-[1] cursor-pointer scale-[.97]' alt="" />
        </div>
        
        <div className='fade-in max-w-[400px] bg-[#ffff] px-4 py-5 shadow-[-10px_-10px_1px_#fff] border '>
          <h1 className='text-3xl py-2 text-[#f48657]'>Fresh Off the Shelf</h1>
          <p className='py-2 text-[#555]'>Dive into the latest additions to our library, featuring captivating stories, groundbreaking ideas, and must-read titles. From fiction to non-fiction, explore the newest gems waiting to be discovered!</p>
          <Link  to={`/user/${userId}/books`} className='inline-block text-lg text-[#555] mt-5 py-2 px-4 border hover:bg-[#f48657] hover:text-[#fff] '>Explore Our Books</Link>
        
        </div>
        


        </div>
      </div>



      <div className='fade-in  w-[90%] mx-auto my-2  py-10'>
        <h1 className='text-center text-white text-5xl py-2 bg-[coral] w-fit mx-auto px-6 rounded shadow-2xl'>Our Best Sales</h1>


        <div className=" h-[600px] flex items-center flex-wrap justify-between gap-2 group">
  <img 
    src={assets.book1} 
    className="object-cover h-[500px] w-[400px] rounded transition-all duration-300 group-hover:h-[300px] group-hover:w-[220px] hover:!h-[500px] hover:!w-[400px] hover:!scale-100 cursor-pointer" 
    alt="" 
  />
  <img 
    src={assets.book2} 
    className="object-cover h-[300px] w-[220px] rounded transition-all duration-300 group-hover:h-[300px] group-hover:w-[220px] hover:!h-[500px] hover:!w-[400px] hover:!scale-100 cursor-pointer" 
    alt="" 
  />
  <img 
    src={assets.book3} 
    className="object-cover h-[300px] w-[220px] rounded transition-all duration-300 group-hover:h-[300px] group-hover:w-[220px] hover:!h-[500px] hover:!w-[400px] hover:!scale-100 cursor-pointer" 
    alt="" 
  />
  <img 
    src={assets.book4} 
    className="object-cover h-[300px] w-[220px] rounded transition-all duration-300 group-hover:h-[300px] group-hover:w-[220px] hover:!h-[500px] hover:!w-[400px] hover:!scale-100 cursor-pointer" 
    alt="" 
  />
  <img 
    src={assets.book5} 
    className="object-cover h-[300px] w-[220px] rounded transition-all duration-300 group-hover:h-[300px] group-hover:w-[220px] hover:!h-[500px] hover:!w-[400px] hover:!scale-100 cursor-pointer" 
    alt="" 
  />
</div>

<button className="px-12 mx-auto block my-4 py-3 bg-[#ffdbcc] text-[coral] text-lg font-medium hover:bg-[coral] hover:text-white transition">
    Explore More
  </button>




      <div className='fade-in flex px-5 py-4 pt-10 h-auto items-center justify-between gap-4 flex-wrap'>
        {
          SalesDB.map((item,index)=>{
            return(
              <BestBook key={index} coverImg={item.coverImg} price={item.price} title={item.title}/>
            )
          })
        }

      </div>
      </div>





      <div className='fade-in  w-[90%] mx-auto my-2 py-10 bg-[#ffdbcc]'>
        <h1 className='text-center text-[coral] text-5xl py-2 bg-[#fff] w-fit mx-auto px-6 rounded shadow-2xl'>Best Authors</h1>


   <div className='fade-in h-auto w-full flex items-center justify-between flex-col gap-10 px-2 py-10'>
   


   <div className=" h-[600px] flex items-center flex-wrap justify-between gap-2 group">
  <img 
    src={assets.author2} 
    className="object-cover h-[500px] w-[400px] rounded transition-all duration-300 group-hover:h-[300px] group-hover:w-[220px] hover:!h-[500px] hover:!w-[400px] hover:!scale-100 cursor-pointer" 
    alt="" 
  />
  <img 
    src={assets.author3} 
    className="object-cover h-[300px] w-[220px] rounded transition-all duration-300 group-hover:h-[300px] group-hover:w-[220px] hover:!h-[500px] hover:!w-[400px] hover:!scale-100 cursor-pointer" 
    alt="" 
  />
  <img 
    src={assets.author4} 
    className="object-cover h-[300px] w-[220px] rounded transition-all duration-300 group-hover:h-[300px] group-hover:w-[220px] hover:!h-[500px] hover:!w-[400px] hover:!scale-100 cursor-pointer" 
    alt="" 
  />
  <img 
    src={assets.author5} 
    className="object-cover h-[300px] w-[220px] rounded transition-all duration-300 group-hover:h-[300px] group-hover:w-[220px] hover:!h-[500px] hover:!w-[400px] hover:!scale-100 cursor-pointer" 
    alt="" 
  />
  <img 
    src={assets.author6} 
    className="object-cover h-[300px] w-[220px] rounded transition-all duration-300 group-hover:h-[300px] group-hover:w-[220px] hover:!h-[500px] hover:!w-[400px] hover:!scale-100 cursor-pointer" 
    alt="" 
  />
</div>



<button className="px-12 py-3 bg-[#fff] text-[coral] text-lg font-medium hover:bg-[coral] hover:text-white transition">
    Explore More
  </button>

   </div>



           <div className='fade-in flex items-center justify-center gap-5 flex-wrap mt-10'>
           {
            AuthorsDB.map((item,index)=>{
              return(
                <BestAuthor key={index} img={item.img} name={item.name} description = {item.description} />
              )
            })
           }
           </div>




            </div>

 



      <div className="userHomeBottom w-[90%] min-h-[300px] py-5 my-2 mx-auto rounded"
  
>
  <div className="py-4 px-10 bg-[#fff] shadow-xl shadow-black hover:shadow-2xl w-fit mx-auto rounded">
    <h1 className="text-2xl text-[coral] font-semibold">Request a book</h1>
    <div className="flex items-center justify-start gap-2">
      <input
        type="text"
        placeholder="Enter book / author's name"
        className="px-10 py-3 block mt-4 rounded w-[600px] outline-[#FF7F50] border border-[#FF7F50]"
      />
      <span className="py-3 px-4 rounded-md cursor-pointer shadow-lg text-[#fff] text-lg font-semibold bg-[coral] mt-4">
        Send
      </span>
    </div>
  </div>

  <div className="py-4 px-10 bg-[#fff] shadow-xl shadow-black hover:shadow-2xl w-fit mx-auto my-5 rounded">
    <h1 className="text-2xl text-[coral] font-semibold">
      Subscribe to us to stay connected
    </h1>
    <div className="flex items-center justify-start gap-2">
      <input
        type="text"
        placeholder="Enter your email"
        className="px-10 py-3 block mt-4 rounded w-[600px] outline-[#FF7F50] border border-[#FF7F50]"
      />
      <span className="py-3 px-4 rounded-md cursor-pointer shadow-lg text-[#fff] text-lg font-semibold bg-[coral] mt-4">
        Send
      </span>
    </div>
  </div>
</div>

 





    </div>)
  )
} 

export default UserHomePage