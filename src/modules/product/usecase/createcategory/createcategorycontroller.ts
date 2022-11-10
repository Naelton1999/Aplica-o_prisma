import {Request, Response} from "express"
import { container } from "tsyringe"
import { Createcategoryusecase } from "./createcategoryusecase"

class Createcategorycontroller{
    async handle(request:Request, response:Response):Promise<Response>{
        const {body}= request
        const createcategoryusecase= container.resolve(Createcategoryusecase)
        await createcategoryusecase.execute(body)
        return response.json(body)
    }
}
export {Createcategorycontroller}






