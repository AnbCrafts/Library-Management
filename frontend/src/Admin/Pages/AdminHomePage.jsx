import React, { useContext } from "react";
import RouteCard from "../Components/RouteCard";
import { assets } from "../../assets/assets.js";
import Navigator from "../../GlobalComponents/Navigator.jsx";
import IntroHead from "../../GlobalComponents/IntroHead.jsx";
import AdminFeatures from "../Components/AdminFeatures.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserNotation from "../../GlobalComponents/UserNotation.jsx";
import { AuthContext } from "../../ContextAPI/AuthContext.jsx";
import AdminNotation from "../../GlobalComponents/AdminNotation.jsx";

const AdminHomePage = () => {
  const { token,loggedInAdminData } = useContext(AuthContext);
  const navigate = useNavigate();
  const { adminId } = useParams(); 
 
   
  return (
    <div className="h-full w-full relative bg-white">
      <IntroHead text={'Manage users, monitor activity, and oversee platform operations effortlessly.'}/>
          
      <Navigator icon={assets.user} position={'left-4'} address={'/user/:userId'}/>
    
 <div className="min-w-[300px] max-w-[500px] mx-auto my-5">
 
{token
?
<AdminNotation 
  email={loggedInAdminData?.email }
/>

:(
  <div className="">
    <Link to={'/admin/login'} className="px-6 py-2 border bg-[#555] rounded text-white hover:bg-[coral] ">
    Login Now
    </Link>

  </div>
)}
 </div>       

    <div className="w-[90%] m-auto py-5 flex flex-wrap items-center justify-center gap-8 relative">
      
      <RouteCard
        title={"Add Admins"}
        desc={
          "Add new administrators to manage the library system effectively and assign their roles."
        }
        address={`/admin/${adminId}/add-admin`}
        img={assets.adminImg}
      />

      <RouteCard
        title={"Admins List"}
        desc={
          "View and manage the list of all administrators currently associated with the library system."
        }
        address={`/admin/${adminId}/admin-list`}
        img={assets.adminList}
      />

      <RouteCard
        title={"Add Books"}
        desc={
          "Expand the library collection by adding new books to the catalog with all necessary details."
        }
        address={`/admin/${adminId}/add-books`}
        img={assets.books}
      />

      <RouteCard
        title={"Book List"}
        desc={
          "Browse and manage the complete list of books available in the library system."
        }
        address={`/admin/${adminId}/book-list`}
        img={assets.bookShelf}
      />

      <RouteCard
        title={"Add Blogs"}
        desc={
          "Create engaging blogs to keep users informed and share updates or insights about the library."
        }
        address={`/admin/${adminId}/add-blogs`}
        img={assets.blogs}
      />

      <RouteCard
        title={"Blogs List"}
        desc={
          "Manage existing blogs, edit their content, or remove outdated posts as needed."
        }
        address={`/admin/${adminId}/blog-list`}
        img={assets.dashboard}
      />

      <RouteCard
        title={"Enrolled Users"}
        desc={
          "Access and manage the list of users enrolled in the library, including their activity details."
        }
        address={`/admin/${adminId}/handle-users`}
        img={assets.user}
      />


      <RouteCard
        title={"Membership List"}
        desc={
          "Access and manage the list of subscribed users in the library, including their activity details."
        }
        address={`/admin/${adminId}/handle-membership`}
        img={assets.membership}
      />


    </div>
    <AdminFeatures/>
    </div>
  );
};

export default AdminHomePage;
