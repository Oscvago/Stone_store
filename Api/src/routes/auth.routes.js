///Sirve para la autenticación (loggin and registrer)
import { Router } from "express";
const router = Router()

//Importación del auth
import * as authCtrl from "../controllers/auth.controller";

//Importación para verificar si existe o no el usuario o el email
import {verifySignup} from "../middlewares";

//Regristrarse en la página Web
router.post("/signup", [verifySignup.checkDuplicateUser,verifySignup.checkRolesExisted], authCtrl.signUp);

//Ingreso a la página Web
router.post("/signin", authCtrl.signIn);



export default router;