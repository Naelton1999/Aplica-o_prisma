import { Router } from "express";
import { Createusercontroller } from "../modules/users/usecase/createusers/createuserscontroller";


const Createusersrouter= Router()

const createusercontroller= new Createusercontroller()

Createusersrouter.post("/", createusercontroller.handle)

export {Createusersrouter}

