import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import ScrollFadeComponent from './UI_Components/ScrollFade';
import AdminHomePage from './Admin/Pages/AdminHomePage';
import UserHomePage from './User/Pages/UserHomePage';
import AddAdmin from './Admin/Pages/AddAdmin';
import AddBooks from './Admin/Pages/AddBooks';
import AddBlog from './Admin/Pages/AddBlog';
import BlogList from './Admin/Pages/BlogList';
import BookList from './Admin/Pages/BookList';
import AdminList from './Admin/Pages/AdminList';
import UserList from './Admin/Pages/UserList';
import Portal from './GlobalComponents/Portal';
import Footer from './GlobalComponents/Footer';
import Enroll from './User/Pages/Enroll';
import SingleBookViewCard from './Admin/Components/SingleBookViewCard';
import LoginAdmin from './Admin/Pages/LoginAdmin';
import LoginUser from './User/Pages/LoginUser';
import Books from './User/Pages/Books';
import Blogs from './User/Pages/Blogs';
import About from './User/Pages/About';
import Contact from './User/Pages/Contact';
import Help from './User/Pages/help';
import Dashboard from './User/Pages/Dashboard';
import WarningPage from './User/Components/LoginWarning';
import DisplaySingleBook from './User/Components/DisplaySingleBook';
import DisplaySingleBlog from './User/Components/DisplaySingleBlog';
import Membership from './User/Pages/Membership';
import MembershipPlans from './User/Pages/Plans';
import NotFound from './GlobalComponents/NotFound';

import { AuthContext } from './ContextAPI/AuthContext';
import { jwtDecode } from 'jwt-decode';
import Cart from './User/Pages/Cart';
import MembershipList from './Admin/Pages/MembershipList';
import MemberDetails from './Admin/Components/MemberDetails';
const App = () => {

  const { token, setToken, userToken, setUserToken,isAuthChecked, setIsAuthChecked} = useContext(AuthContext);
  const location = useLocation();


  useEffect(() => {
    setToken(localStorage.getItem("AdminToken"));
    setUserToken(localStorage.getItem("UserToken"));
    setIsAuthChecked(true);
  }, [location.pathname]);

  if (!isAuthChecked) return null;

  // const [userId, setUserId] = useState('');

// useEffect(() => {
//   if (userToken) {
//     const userData = jwtDecode(userToken);
//     const id = userData.userId;
//     setUserId(id);
//     console.log("id from app.jsx -> ", id);  
//   }
// }, [userToken]); 

  
  

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Portal />} />
        <Route path='*' element={<NotFound />} />

        {/* User Routes */}
<Route path='/user/:userId' element={<ScrollFadeComponent><UserHomePage /></ScrollFadeComponent>} />
<Route path='/user/:userId/membership' element={<ScrollFadeComponent><Membership /></ScrollFadeComponent>} />
<Route path='/user/enroll' element={<ScrollFadeComponent><Enroll /></ScrollFadeComponent>} />
<Route path='/user/:userId/books' element={<ScrollFadeComponent><Books /></ScrollFadeComponent>} />
<Route path='/user/:userId/blogs' element={<ScrollFadeComponent><Blogs /></ScrollFadeComponent>} />
<Route path='/user/:userId/about' element={<ScrollFadeComponent><About /></ScrollFadeComponent>} />
<Route path='/user/:userId/contact' element={<ScrollFadeComponent><Contact /></ScrollFadeComponent>} />
<Route path='/user/:userId/help' element={<ScrollFadeComponent><Help /></ScrollFadeComponent>} />
<Route path='/user/:userId/dashboard' element={userToken ? <ScrollFadeComponent><Dashboard /></ScrollFadeComponent> : <Navigate to='/user/login-warning' />} />
<Route path='/user/:userId/plans' element={<ScrollFadeComponent><MembershipPlans /></ScrollFadeComponent>} />
<Route path='/user/:userId/books/:id' element={<ScrollFadeComponent><DisplaySingleBook /></ScrollFadeComponent>} />
<Route path='/user/:userId/blogs/:id' element={<ScrollFadeComponent><DisplaySingleBlog /></ScrollFadeComponent>} />
<Route path='/user/:userId/cart' element={<ScrollFadeComponent><Cart /></ScrollFadeComponent>} />
<Route path='/user/:userId/book/:bookId/cart' element={<ScrollFadeComponent><Cart /></ScrollFadeComponent>} />


        <Route path='/user/login' element={<ScrollFadeComponent><LoginUser /></ScrollFadeComponent>} />
        <Route path='/user/login-warning' element={<ScrollFadeComponent><WarningPage /></ScrollFadeComponent>} />
        
        {/* Admin Routes */}
<Route path='/admin/:adminId' element={token ? <ScrollFadeComponent><AdminHomePage /></ScrollFadeComponent> : <Navigate to="/admin/login" />} />
<Route path='/admin/:adminId/add-admin' element={token ? <ScrollFadeComponent><AddAdmin /></ScrollFadeComponent> : <Navigate to="/admin/login" />} />
<Route path='/admin/:adminId/add-books' element={token ? <ScrollFadeComponent><AddBooks /></ScrollFadeComponent> : <Navigate to="/admin/login" />} />
<Route path='/admin/:adminId/add-blogs' element={token ? <ScrollFadeComponent><AddBlog /></ScrollFadeComponent> : <Navigate to="/admin/login" />} />
<Route path='/admin/:adminId/blog-list' element={token ? <ScrollFadeComponent><BlogList /></ScrollFadeComponent> : <Navigate to="/admin/login" />} />
<Route path='/admin/:adminId/book-list' element={token ? <ScrollFadeComponent><BookList /></ScrollFadeComponent> : <Navigate to="/admin/login" />} />
<Route path='/admin/:adminId/book-list/:id' element={token ? <ScrollFadeComponent><SingleBookViewCard /></ScrollFadeComponent> : <Navigate to="/admin/login" />} />
<Route path='/admin/:adminId/admin-list' element={token ? <ScrollFadeComponent><AdminList /></ScrollFadeComponent> : <Navigate to="/admin/login" />} />
<Route path='/admin/:adminId/handle-users' element={token ? <ScrollFadeComponent><UserList /></ScrollFadeComponent> : <Navigate to="/admin/login" />} />
<Route path='/admin/:adminId/handle-membership' element={token ? <ScrollFadeComponent><MembershipList /></ScrollFadeComponent> : <Navigate to="/admin/login" />} />
<Route path='/admin/:adminId/handle-membership/user/details/:userId/subscription/:membershipId' element={token ? <ScrollFadeComponent><MemberDetails /></ScrollFadeComponent> : <Navigate to="/admin/login" />} />

        <Route path='/admin/login' element={<ScrollFadeComponent><LoginAdmin /></ScrollFadeComponent>} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
