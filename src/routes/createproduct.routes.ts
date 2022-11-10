import {Router} from "express";
import { Createproductcontroller } from "../modules/product/usecase/createproduct/createproductcontroller";


const Createproductrouter= Router()

const createproductcontroller= new Createproductcontroller()

Createproductrouter.post("/", createproductcontroller.handle)

export {Createproductrouter}