import { Request, Response } from "express";
import Usuario from "../models/usuario";


export const getUsuarios = async( req: Request , res: Response ) => {

    const usuarios = await Usuario.findAll();

    res.status(200).json({
        mdg:'Usuarios',
        usuarios
    })

}


export const getUsuario = ( req: Request , res: Response ) => {

    const {id} = req.params;

    res.status(200).json({
        mdg:'Usuario',
        id
    })

}


export const postUsuario = ( req: Request , res: Response ) => {

    const { body } = req;

    res.status(200).json({
        mdg:'PostUsuarios',
        body
    })

}

export const putUsuario = ( req: Request , res: Response ) => {

    const {id} = req.params;

    res.status(200).json({
        mdg:'PutUsuarios',
        id
    })

}

export const deleteUsuario = ( req: Request , res: Response ) => {

    const {id} = req.params;

    res.status(200).json({
        mdg:'DeleteUsuarios',
        id
    })

}