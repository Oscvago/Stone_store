import React from "react";
import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

const Signup = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        roles: ""

});

const [error, setError] = useState("");

const navigate = useNavigate();

const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value});
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const url ="http://localhost:3000/api/users";
        const {data:res} = await axios.post(url, data);
        navigate("/users")
        console.log(res.message);
    } catch (error) {
        if (error.response 
            && error.response.status >= 400 && 
            error.response.status <= 500 
        ){
            setError(error.response.data.message);

        }
    };

}

    return(
        <div className={styles.signup_container} >
            <div className={styles.signup_form_container} >
                <div className={styles.left} >
                    <h1> Bienvenido a Stone Store </h1>
                    <Link to="/signin">
                        <button type="button" className={styles.white_btn} >
                            Iniciar Sesión
                        </button>
                    </Link>
                </div>
                <div className={styles.right} >
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1> Crear una Cuenta </h1>

                        <input 
                        type="text"
                        placeholder="Nombre de Usuario"
                        name="username"
                        onChange={handleChange}
                        value={data.username}
                        required
                        className={styles.input}
                        />

                        <input 
                        type="text"
                        placeholder="Correo Electrónico"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        required
                        className={styles.input}
                        />

                        <input 
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                        className={styles.input}
                        />

                        <input 
                        type="text"
                        placeholder="Rol"
                        name="roles"
                        onChange={handleChange}
                        value={data.roles}
                        required
                        className={styles.input}
                        />

                        {error && <div className={styles.error_msg} > { error } </div> }

                        <button type="submit" className={styles.green_btn} > Registrarse </button>

                    </form>
                </div>
            </div>
        </div>

    )
};

export default Signup;