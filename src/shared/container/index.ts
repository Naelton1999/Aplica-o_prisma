import {container} from "tsyringe";
import { Categoryrepository } from "../../modules/product/repository/Categoryrepository";
import { Icategoryrepository } from "../../modules/product/repository/Icategoryrepositore";
import { Iproductcategory } from "../../modules/product/repository/Iproductcategory";
import { IProductrepository } from "../../modules/product/repository/Iproductrepository";
import { Productcategoryrepositore } from "../../modules/product/repository/Productcategoryrepositore";
import { Productrepository } from "../../modules/product/repository/Productrepository";
import { Iusersrepository } from "../../modules/users/repository/Iusersrepository";
import { Usersrepository } from "../../modules/users/repository/Usersrepository";


container.registerSingleton<IProductrepository>(
    "Productrepository", Productrepository
)
container.registerSingleton<Icategoryrepository>(
    "Categoryrepository", Categoryrepository
)
container.registerSingleton<Iusersrepository>(
    "Usersrepository", Usersrepository
)
container.registerSingleton<Iproductcategory>(
    "Productcategoryrepositore", Productcategoryrepositore
)

