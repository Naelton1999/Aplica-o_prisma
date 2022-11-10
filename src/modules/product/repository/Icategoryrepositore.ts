import { Category } from "@prisma/client"

export interface Categorycreate{
    name:string,
    description:string
}

export interface Icategoryrepository{
    create(data:Categorycreate):Promise<Categorycreate>
    findById(id:string):Promise <Category | null>
}