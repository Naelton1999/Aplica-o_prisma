import { application, Router } from "express";
import { Listproductcontroller } from "../modules/product/usecase/listproduct/listproductcontroller";


const Listproductrouter= Router()

const listproductcontroller= new Listproductcontroller()

Listproductrouter.get("/", listproductcontroller.handle)

export {Listproductrouter}