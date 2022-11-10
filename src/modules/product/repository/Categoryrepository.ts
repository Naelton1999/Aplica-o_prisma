import { Category } from "@prisma/client";
import { prismaClient } from "../../../database/client";
import { Categorycreate, Icategoryrepository } from "./Icategoryrepositore";

class Categoryrepository implements Icategoryrepository{
    async findById(id: string): Promise<Category | null> {
        const categoryexist= await prismaClient.category.findFirst({
            where:{id}
        })
        return categoryexist
    }
    async create({name,description}: Categorycreate): Promise<Categorycreate> {
        const category= await prismaClient.category.create({
            data:{name, description}
        })
        return category
    }

}
export {Categoryrepository}
