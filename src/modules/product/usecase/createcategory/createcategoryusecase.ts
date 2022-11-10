import { inject, injectable } from "tsyringe"
import { Categorycreate, Icategoryrepository } from "../../repository/Icategoryrepositore"


@injectable()
class Createcategoryusecase{
    constructor(
        @inject("Categoryrepository")
        private categoryrepository:Icategoryrepository
    ){}
    async execute(data:Categorycreate){
        
        await this.categoryrepository.create(data)
    }
}
export {Createcategoryusecase} 



