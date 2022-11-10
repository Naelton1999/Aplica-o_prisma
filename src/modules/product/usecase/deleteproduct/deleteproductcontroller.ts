import {Request, Response} from "express"
import {container} from "tsyringe";
import { Deleteproductusecase } from "./deleteproductusecase";


class Deleteproductconroller{
    async handle(request:Request, response:Response){
        const {body}= request
        const deleteproductusecase= container.resolve(Deleteproductusecase)
        const product= await deleteproductusecase.execute(body)
        return response.send('excluido')
    }
}
export {Deleteproductconroller}