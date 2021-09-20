import { Request, Response } from "express";


export const getUsuarios = ( req: Request , res: Response ) => {

    res.status(200).json({
        mdg:'Usuarios'
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