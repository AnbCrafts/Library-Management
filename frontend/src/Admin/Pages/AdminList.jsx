import React, { useEffect, useState } from "react";
import axios from "axios";
import UserOverView from "../Components/UserOverView";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import SingleAdmin from "../Components/SingleAdmin";
import Navigator from "../../GlobalComponents/Navigator";
import { assets } from "../../assets/assets";
import IntroHead from "../../GlobalComponents/IntroHead";

const AdminList = () => {
  const backendURI = "https://backend-v1bd.onrender.com";
  const [adminList, setAdminList] = useState([]);
  const [admin, setAdmin] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const {adminId} = useParams();

  const fetchAllAdmins = async () => {
    try {
      const response = await axios.get(`${backendURI}/api/enroll/admin/list`);
      if (response.data.success) {
        setAdminList(response.data.admins);
      } else {
        console.log("Error while getting admins");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllAdmins();
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const adminId = searchParams.get("id");
    const foundAdmin = adminList.find((admin) => admin._id === adminId);
    setAdmin(foundAdmin || null);
  }, [location.search, adminList]);

  const deleteAdmin = async () => {
    try {
      const searchParams = new URLSearchParams(location.search);
      const adminId = searchParams.get("id");
  
      if (!adminId) {
        console.log("Id not found");
        return;
      }
  
      const response = await axios.delete(`${backendURI}/api/enroll/admin/delete/${adminId}`);
  
      if (response.data.success) {
        console.log("Admin deleted successfully");
        navigate('/admin/:adminId/admin-list');
        
        if (typeof fetchAllAdmins === "function") {
          await fetchAllAdmins();
        }
      } else {
        console.log("Error deleting admin by id");
      }
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };
  

  return (
    <div className="h-full w-full relative">
      <IntroHead text={"Manage Admins"} />
      <Navigator address={"/admin/:adminId"} position={"left-4"} icon={assets.admin} />
      <div className="w-[90%] m-auto p-4 pt-8 pb-8 min-h-[100vh] relative">
        {admin ? (
          <SingleAdmin
            name={admin.firstName + " " + admin.lastName}
            status={admin.status}
            img={admin.profilePic}
            mail={admin.email}
            phone={admin.phone}
            role={admin.role}
            permissions={
              admin.permissions &&
              admin.permissions.map((item, index) => (
                <span className="block font-semibold text-center" key={index}>
                  {index + 1 + ". " + item + " "}
                </span>
              ))
            }
            delAdmin={deleteAdmin}
          />
        ) : (
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {adminList.map((item) => (
              <UserOverView
                key={item._id}
                img={item.profilePic}
                name={item.firstName + " " + item.lastName}
                mail={item.email}
                phone={item.phone}
                status={item.status}
                clickHandler={() =>
                  navigate(`/admin/${adminId}/admin-list?id=${item._id}`)
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminList;
