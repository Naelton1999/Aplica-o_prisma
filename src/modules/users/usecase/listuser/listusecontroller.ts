import {Request, Response} from "express"
import {container} from "tsyringe";
import { Listuserusecase } from "./listusersusecase";

class Listusercontroller{
    async handle(request:Request, response:Response){
        const {body}= request
        const listuserusecase= container.resolve(Listuserusecase)
        const list= await listuserusecase.execute(body)
        return response.json(list)
    }
}
export {Listusercontroller}