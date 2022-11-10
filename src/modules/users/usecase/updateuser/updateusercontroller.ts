import {Request, Response} from "express"
import {container} from "tsyringe";
import { Updateuserusecase } from "./updateuserusecase";


class Updateusercontroller{
    async handle(request:Request, response:Response){
        const {body}= request
        const updateuserusecase= container.resolve(Updateuserusecase)
        const updateuser= await updateuserusecase.execute(body)
        return response.json(updateuser)

    }
}
export {Updateusercontroller}