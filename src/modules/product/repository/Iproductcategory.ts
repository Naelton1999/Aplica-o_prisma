import { Product, ProductCategory } from "@prisma/client"

export type Productcategorycreate={
    id?: string,
    id_product: string,
    id_category: string
}

export interface Iproductcategory{
    create(data:Productcategorycreate):Promise<Productcategorycreate>
    
    
}