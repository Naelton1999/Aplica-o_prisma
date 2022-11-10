import { inject, injectable } from "tsyringe";
import { IProductrepository } from "../../repository/Iproductrepository";

@injectable()
class Deleteproductusecase{
    constructor (
        @inject("Productrepository")
        private productrepository:IProductrepository){}
    async execute(id:string){
        await this.productrepository.delete(id)
    }
}
export {Deleteproductusecase}