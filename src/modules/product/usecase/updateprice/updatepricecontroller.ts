import {Request, Response} from "express"
import {container} from "tsyringe";
import { Updatepriceusecase } from "./updatepriceusecase";

class Updatepricecontroller{
    async handle(request:Request,response:Response){
        const {id, price}= request.body
        const updatepriceusecase= container.resolve(Updatepriceusecase)
        const update= await updatepriceusecase.execute(id,price)
        return response.json(update)
    }
}
export {Updatepricecontroller}