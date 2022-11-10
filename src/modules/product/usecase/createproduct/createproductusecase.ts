import { IProductrepository, Productcreate } from "../../repository/Iproductrepository";
import {injectable, inject} from "tsyringe";

@injectable()
class Createproductusecase{
    constructor (
        @inject("Productrepository")
        private productrepository:IProductrepository){}
        async execute(data: Productcreate){
            const productexists= await this.productrepository.findByBarCode(data.bar_code)
            if (productexists){throw new Error('produto ja existente')}
            
            const product= await this.productrepository.create(data)
            return product
        }
}

export {Createproductusecase}

