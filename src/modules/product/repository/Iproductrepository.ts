import {Product} from "@prisma/client";

export type Productcreate={
    id?: string,
    name: string,
    price: any
    description: string,
    bar_code: string
}
export type Productcategory={
    id: string,
}

export interface IProductrepository{
    create(data:Productcreate):Promise<Productcreate>
    findByBarCode(bar_code:string):Promise<Product | null>
    list():Promise<Product[]>
    updatePrice(id:string, price:number):Promise<Product>
    delete(id:string):Promise<void>
}