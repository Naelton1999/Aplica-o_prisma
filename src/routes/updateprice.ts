import { Router } from "express"
import { Updatepricecontroller } from "../modules/product/usecase/updateprice/updatepricecontroller"



const Updatepricerouter= Router()

const updatepricecontroller= new Updatepricecontroller()

Updatepricerouter.put("/", updatepricecontroller.handle )

export {Updatepricerouter}