import { Request, Response } from "express";
import knex from 'knex'
import user_accounts from "../models/user_accounts/user_accounts";
import {hash} from 'bcrypt'
import addresses from "../models/adresses/adresses";
import contacts from "../models/contacts/contacts";

export const userRegister = async (req:Request,res:Response) => {
    console.log(req.body)
   const user = await user_accounts.query().insert({
        name:req.body.name,
        email:req.body.email,
        cpf:req.body.CPF,
        birth_date:req.body.birth_date,
        password:await hash(req.body.password,12)
    })
    await addresses.query().insert({
        city:req.body.city,
        state:req.body.state,
        street:req.body.street,
        zip_code:req.body.zip_code,
        user_account_id:user.id

    })
    // await contacts.query().insert({
    //     user_account_id:req.body.user_account_id,
    //     contact_name.req.body.contact_name,
    //     phone.req.body.phone,
    // })

    res.status(200).json({
        status:'sucess',
        data:{user},


    })
}