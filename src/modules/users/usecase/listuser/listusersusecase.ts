import { Users } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { Iusersrepository } from "../../repository/Iusersrepository";

@injectable()
class Listuserusecase{
    constructor(
        @inject("Usersrepository")
        private usersrepository:Iusersrepository
    ){}
    async execute(data:Users){
        const users= this.usersrepository.list()
        return users
    }
}
export {Listuserusecase}