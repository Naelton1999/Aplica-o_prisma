import { Product } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IProductrepository } from "../../repository/Iproductrepository";

@injectable()
class Updatepriceusecase{
    constructor(
        @inject('Productrepository')
        private productrepository:IProductrepository
    ){}
    async execute(id:string,price:number){
        const product= await this.productrepository.updatePrice(id,price)
        return product
    }
}
export {Updatepriceusecase} 