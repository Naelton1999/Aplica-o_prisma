import { PrismaClient } from "@prisma/client";


const prisma= new PrismaClient()
async function admin(){
    const admin= await prisma.users.create({
        data:{
            name:'pedro',
            email:'pedro@admin.com',
            password:"201", 
            is_admin:true
        }
    })
}
admin() 