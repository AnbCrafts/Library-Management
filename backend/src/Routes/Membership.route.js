import {Router} from 'express'
import { AddMember, deleteMembershipByUserID, getAllMemberships, getAllMembershipsByUSerID } from '../Controllers/memberShipCRUD.controller.js'


const MemberRoute = Router();


MemberRoute.post('/add',AddMember);
MemberRoute.delete('/remove/:memID',deleteMembershipByUserID);
MemberRoute.get('/list',getAllMemberships);
MemberRoute.get('/list/user/:userId',getAllMembershipsByUSerID);

export default MemberRoute; 