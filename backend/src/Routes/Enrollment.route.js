import { deleteAdmin, deleteUser, getAllAdmins, getAllUsers, loginRegisteredAdmin, loginRegisteredUser, registerNewAdmin, registerNewUser } from "../Controllers/Enrollment.controller.js";
import { Router } from "express";
import { upload } from "../Middleware/multer.middleware.js";

const EnrollmentRoute = Router();

EnrollmentRoute.post(
  '/user/register',
  upload.fields([{ name: "profilePic", maxCount: 1 }]),
  registerNewUser
); 

EnrollmentRoute.post('/user/login',loginRegisteredUser);
EnrollmentRoute.get('/user/list',getAllUsers);

EnrollmentRoute.post('/admin/register',upload.fields([{ name: "profilePic", maxCount: 1 }]),registerNewAdmin);
EnrollmentRoute.post('/admin/login',loginRegisteredAdmin);
EnrollmentRoute.get('/admin/list',getAllAdmins);

EnrollmentRoute.delete('/user/delete/:id',deleteUser)
EnrollmentRoute.delete('/admin/delete/:id',deleteAdmin)
 

export default EnrollmentRoute;
