import { Users } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { Iusersrepository } from "../../repository/Iusersrepository";


@injectable()
class Updateuserusecase{
    constructor(
        @inject("Usersrepository")
        private usersrepository:Iusersrepository
    ){}
    async execute(data:Users){
        const updateuser= await this.usersrepository.updateUser(data.id)
        return updateuser
    }
    
}
export {Updateuserusecase}