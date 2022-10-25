//Es la validación (saber si el rol y el usuario existen)
import {ROLES} from "../models/Role"
import User from "../models/User"
export const checkDuplicateUser = async (req, res, next) => {
    //Username
    const user = User.findOne({username: req.body.username})
    if(user) return res.status(400).json({message:"El Usuario ya existe"})
    //Correo
    const email = User.findOne({email: req.body.username})
    if(email) return res.status(400).json({message:"El E-mail ya existe"})
    next()
}

export const checkRolesExisted = (req, res, next) => {
    if(req.body.roles){
        for(let i=0; i < req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({message: "El Rol al que trata de acceder no existe, por favor verifique su Rol e intente de nuevo"})

            }

        }
    }
    next();
}