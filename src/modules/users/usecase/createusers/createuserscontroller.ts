import {Request, Response} from "express"
import {container} from "tsyringe";
import { Createuserusecase } from "./createusersusecase";

class Createusercontroller{
    async handle(request:Request, response:Response){
        const {body}= request
        const createuserusecase= container.resolve(Createuserusecase)
        const createuser= await createuserusecase.execute(body)
        return response.json(createuser)

    }
}
export {Createusercontroller}