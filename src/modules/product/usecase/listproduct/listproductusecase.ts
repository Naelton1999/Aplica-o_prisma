import { Product } from "@prisma/client";
import { response } from "express";
import { inject, injectable } from "tsyringe";
import { IProductrepository } from "../../repository/Iproductrepository";

@injectable()
class Listproductusecase{
    constructor(
        @inject("Productrepository")
        private productrepository: IProductrepository
    ){}
    async execute(data: Product[]){
        const product= await this.productrepository.list()
        return product
    }
}
export {Listproductusecase}