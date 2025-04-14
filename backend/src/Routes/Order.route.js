import { removeOrder, getOrdersList, verifyOrder, PlaceOrder, findOrderByUserId, UpdateOrder } from "../Controllers/orderCRUD.controller.js";
import { Router } from "express";

const OrderRoute = Router();

OrderRoute.get('/list', getOrdersList);
OrderRoute.delete('/remove', removeOrder);
OrderRoute.post('/place', PlaceOrder);
OrderRoute.post('/verify', verifyOrder);
OrderRoute.put('/update/:id', UpdateOrder); 
OrderRoute.get('/list/user/:id', findOrderByUserId);

export default OrderRoute;
