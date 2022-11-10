import { Router } from "express";
import { Deleteproductconroller } from "../modules/product/usecase/deleteproduct/deleteproductcontroller";


const Deleteproductrouter= Router()

const deleteproductconroller= new Deleteproductconroller()

Deleteproductrouter.delete("/", deleteproductconroller.handle )

export {Deleteproductrouter}