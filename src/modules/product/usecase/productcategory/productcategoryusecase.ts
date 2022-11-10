import { inject, injectable } from "tsyringe";
import { Iproductcategory, Productcategorycreate } from "../../repository/Iproductcategory";


@injectable()
class ProductCategoryusecase{
    constructor(
        @inject("Productcategoryrepositore")
        private productcategoryrepositore: Iproductcategory
    ){}
    async execute(data: Productcategorycreate){
        await this.productcategoryrepositore.create(data)
    }

}
export {ProductCategoryusecase}