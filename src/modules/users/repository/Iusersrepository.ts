import { Users } from "@prisma/client"


export type Userscreate={
    id?: string,
    name: string,
    email: string,
    password: string,
    is_admin?: boolean
}
export type Useradmin={
    id:string,
    is_admin:boolean
}

export interface Iusersrepository{
    create(data:Userscreate):Promise<Userscreate>
    findByPassword(password:string):Promise<Users | null>
    findById(id:string):Promise<Users | null>
    list():Promise<Users[]>
    updateUser(id:string):Promise<Users>
    
}