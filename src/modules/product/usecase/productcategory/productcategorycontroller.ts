import {Request, Response} from "express"
import {container} from "tsyringe";
import { Createcategoryusecase } from "../createcategory/createcategoryusecase";
import { ProductCategoryusecase } from "./productcategoryusecase";

class Productcategorycontroller{
    async handle(request:Request, response:Response){
        const {body}= request
        const productCategoryusecase= container.resolve(ProductCategoryusecase)
        await productCategoryusecase.execute(body)
        return response.json(body)
    }
}
export {Productcategorycontroller}
