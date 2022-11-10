import { Router } from "express";
import { Updateusercontroller } from "../modules/users/usecase/updateuser/updateusercontroller";


const Updateuserrouter= Router()

const updateusercontroller= new Updateusercontroller()

Updateuserrouter.put("/", updateusercontroller.handle )

export {Updateuserrouter}