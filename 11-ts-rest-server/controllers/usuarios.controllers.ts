import { Request, Response } from "express";
import Usuario  from '../models/usuario';


export const getUsuarios = async( req: Request , res: Response ) => {

    const usuarios = await Usuario.findAll();

    res.status(200).json({
        mdg:'Usuarios',
        usuarios
    })

}


export const getUsuario = async ( req: Request , res: Response ) => {

    const {id} = req.params;

    const usuario = await Usuario.findByPk(id);

    if( !usuario ){
        return res.status(400).json({
            msg: `El id ${id} no esta registrado`
        })
    }

    res.status(200).json({
        mdg:'Usuario',
        usuario
    })

}


export const postUsuario = async ( req: Request , res: Response ) => {

    const { body } = req;


    try {

        const usuario = await Usuario.create(body);
        
        res.status(200).json({
            mdg:'PostUsuarios',
            usuario
        })
        
    } catch (error) {
        res.status(500).json({
            msg:'Hable con el administrador'
        })
    }
    


}

export const putUsuario = async ( req: Request , res: Response ) => {

    const {id} = req.params;
    const { body } = req;

    try {
        
        const usuario = await Usuario.findByPk(id);

        if( !usuario ){
            return res.status(400).json({
                msg: `El id ${id} no esta registrado`
            })
        }

        await usuario.update( body );

        res.status(200).json({
            mdg:'PutUsuarios',
            usuario
        });

    } catch (error) {
        res.status(500).json({
            msg:'Hable con el administrador'
        })
    }


}

export const deleteUsuario = async ( req: Request , res: Response ) => {

    const {id} = req.params;

    try {
        
        const usuario = await Usuario.findByPk(id);

        if( !usuario ){
            return res.status(400).json({
                msg: `El id ${id} no esta registrado`
            })
        }

        // await usuario.destroy();
        await usuario.update({estado:0});

        res.status(200).json({
            mdg:'DeleteUsuarios',
            id
        });

    } catch (error) {
        res.status(500).json({
            msg:'Hable con el administrador'
        })
    }


}