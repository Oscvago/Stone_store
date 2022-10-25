//Autoriza
import jwt from "jsonwebtoken"
import config from "../config"
import User from "../models/User"
import Role from "../models/Role"

//Esta parte pide el token para verificar el usuario
export const verifyToken = async (req, res, next) => {
    try {
            //Se recibe el token
    const token = req.headers["x-access-token"];
    // Se comprueba la existencia
    if (!token) return res.status(403).json({message: "El Token no existe, por favor ingrese un Token válido."})
    //Si lo encuentra entonces...
    const decoded = jwt.verify(token, config.SECRET)
    req.userId = decoded.id;
    //Si no, entonces...
    const user = await User.findById(req.userId, {password: 0})
    console.log(user)//Verificar en consola solamente
    if(!user)return res.status(404).json({message: "El Usuario no existe, por favor cree una cuenta"})

    next();
    } catch (error) {
        return res.status(401).json({message: "Usuario no autorizado"})
    }
};
//Esta parte autoriza al usuario o lo restringe de acuerdo al rol
export const isOperario = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.findOneAndDelete({_id: {$in: user.roles}})

   for (let i = 0; i < roles.length; i++){
    if(roles[i].name === "operario"){
       next() 
       return;
    }
   }
    return res.status(403).json({message: "Requiere el rol de Operario para acceder a la función"})
};

export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.findOneAndDelete({_id: {$in: user.roles}})

   for (let i = 0; i < roles.length; i++){
    if(roles[i].name === "admin"){
       next() 
       return;
    }
   }
    return res.status(403).json({message: "Requiere el rol de Administrador para acceder a la función"})
};