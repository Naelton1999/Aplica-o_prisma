import { Router } from "express";
import { Listusercontroller } from "../modules/users/usecase/listuser/listusecontroller";


const Listusersrouter= Router()

const listusercontroller= new Listusercontroller()

Listusersrouter.get("/", listusercontroller.handle)

export {Listusersrouter}