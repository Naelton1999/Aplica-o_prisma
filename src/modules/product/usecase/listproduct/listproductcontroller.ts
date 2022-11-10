import {Request, Response} from "express"
import {container} from "tsyringe";
import { Listproductusecase } from "./listproductusecase";

class Listproductcontroller{
    async handle(request:Request, response:Response){
        const {body}= request
        const listproductusecase= container.resolve(Listproductusecase)
        const list= await listproductusecase.execute(body)
        return response.json(list)

    }
}
export {Listproductcontroller}