import { Router } from "express";
import { Productcategorycontroller } from "../modules/product/usecase/productcategory/productcategorycontroller";


const Productcategoryrouter= Router()

const productcategorycontroller= new Productcategorycontroller()

Productcategoryrouter.post("/", productcategorycontroller.handle )

export {Productcategoryrouter}