import { Product } from "@prisma/client";
import { prismaClient } from "../../../database/client";
import { IProductrepository, Productcreate } from "./Iproductrepository";

class Productrepository implements IProductrepository{
    
    async create({name, description, price, bar_code}:Productcreate): Promise<Productcreate> {
        const product= await prismaClient.product.create({
            data:{
                name, description, price, bar_code
            }
        })
        const productresult: Productcreate={
            name:product.name,
            description: product.description,
            price: Number(product.price),
            bar_code: product.bar_code
        }
        return productresult 
    }
    async findByBarCode(bar_code: string): Promise<Product | null> {
        const productexists= await prismaClient.product.findFirst({
            where: {bar_code}
        })
        return productexists
    }
    async list():Promise <Product[]> {
        const product= await prismaClient.product.findMany()
        return product
    } 
    async updatePrice(id: string, price:number): Promise<Product> {
        const update= await prismaClient.product.update({
            where:{id},
            data:{price}
        })
        return update
    }
    async delete(id: string, ): Promise<void> {
        const product= await prismaClient.product.deleteMany({
            where:{id}
        })
    }
}
export {Productrepository}