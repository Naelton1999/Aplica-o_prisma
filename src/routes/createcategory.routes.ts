import { Router } from "express";
import { Createcategorycontroller } from "../modules/product/usecase/createcategory/createcategorycontroller";


const Createcategoryrouter= Router()

const createcategorycontroller= new Createcategorycontroller()

Createcategoryrouter.post("/", createcategorycontroller.handle)

export {Createcategoryrouter}