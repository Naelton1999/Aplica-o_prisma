
import { Iproductcategory, Productcategorycreate } from "./Iproductcategory";
import { prismaClient } from "../../../database/client";
import { Product, ProductCategory } from "@prisma/client";

class Productcategoryrepositore implements Iproductcategory{
    
    async create({id_product, id_category}:Productcategorycreate): Promise<Productcategorycreate> {
        const create= await prismaClient.productCategory.create({
            data:{id_product, id_category}
        })
        return create
    }
    
    

}
export {Productcategoryrepositore}

