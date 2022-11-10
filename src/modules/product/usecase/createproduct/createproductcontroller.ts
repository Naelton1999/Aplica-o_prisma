import {Request, Response} from "express"
import {container} from "tsyringe";
import { Createproductusecase } from "./createproductusecase";

class Createproductcontroller{
    async handle(request:Request, response:Response){
        const {body}= request
        const createproductusecase= container.resolve(Createproductusecase)

        const createproduct= await createproductusecase.execute(body)
        return response.json(createproduct) 
    }
}

export {Createproductcontroller}

