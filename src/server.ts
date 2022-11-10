import express from "express";
import "reflect-metadata"
import { Createcategoryrouter } from "./routes/createcategory.routes";
import { Createproductrouter } from "./routes/createproduct.routes";
import { Createusersrouter } from "./routes/createusers.routes";
import { Deleteproductrouter } from "./routes/deleteproduct.routes";
import { Listproductrouter } from "./routes/listproduct.routes";
import { Productcategoryrouter } from "./routes/productcategory.routes";
import { Updatepricerouter } from "./routes/updateprice";
import { Updateuserrouter } from "./routes/updateuser.routes";
import { Listusersrouter } from "./routes/users.routes";

import './shared/container'

const app= express()
app.use(express.json())

app.use("/deleteproduct", Deleteproductrouter)
app.use("/createproduct", Createproductrouter)
app.use("/createcategory", Createcategoryrouter)
app.use("/product", Listproductrouter )
app.use("/createusers", Createusersrouter)
app.use("/productcategory", Productcategoryrouter)
app.use("/users", Listusersrouter)
app.use("/updateusers", Updateuserrouter)
app.use("/updateprice", Updatepricerouter)



app.listen(7500, ()=>{console.log("Eaii")})