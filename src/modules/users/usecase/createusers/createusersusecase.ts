import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { Iusersrepository, Userscreate } from "../../repository/Iusersrepository";

@injectable()
class Createuserusecase{
    constructor(
        @inject("Usersrepository")
        private usersrepository:Iusersrepository){}

    async execute(data:Userscreate){
        const usersexist= await this.usersrepository.findByPassword(data.password)
        if(usersexist){throw new Error("ja existe")}
        
        const createproduct= await this.usersrepository.create(data)
        return createproduct

    }
}
export {Createuserusecase} 