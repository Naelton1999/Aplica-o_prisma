import { Users } from "@prisma/client";
import { hash } from "bcrypt";
import { prismaClient } from "../../../database/client";
import { Iusersrepository, Useradmin, Userscreate } from "./Iusersrepository";

    class Usersrepository implements Iusersrepository{
        
        async create({name, email, password}: Userscreate): Promise<Userscreate> {
            const user= await prismaClient.users.create({
                data:{name, email, password}
            })
            const useresult:Userscreate={
                name: user.name,
                email: user.email,
                password: user.password  
            }
            return useresult   
        }
        async findByPassword(password: string): Promise<Users | null> {
            const passwordexists= await prismaClient.users.findFirst({
                where:{password}
            })
            return passwordexists
        }
        async findById(id: string): Promise<Users | null> {
            const userexist= await prismaClient.users.findFirst({
                where:{id}
            })
            return userexist
        }
        async list(): Promise<Users[]> {
            const users= await prismaClient.users.findMany()
            return users
        }
        async updateUser(id: string): Promise<Users> {
            const updatuser= await prismaClient.users.update({
                where:{id},
                data:{is_admin:true}
            })
            return updatuser
        }
    }
    export{Usersrepository}
