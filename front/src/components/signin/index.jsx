import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../signin/styles.module.css";

const Signup = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
});

const [error, setError] = useState("");

const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value});
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const url ="http://localhost:4000/api/auth";
        const {data:res} = await axios.post(url, data);
        localStorage.setItem("token", res.data);
        window.location = "/"
       
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
        <div className={styles.signin_container} >
            <div className={styles.signin_form_container} >
                <div className={styles.left} >
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1> Entrar en su Cuenta </h1>

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

                        {error && <div className={styles.error_msg} > { error } </div> }

                        <button type="submit" className={styles.green_btn} > Iniciar Sesión </button>

                    </form>


                </div>
                <div className={styles.right} >
                    <h1> ¿ Nuevo en Store Stone ? </h1>
                    <Link to="/signup">
                        <button type="button" className={styles.white_btn} > 
                            Registrarse
                        </button>
                    </Link>

                </div>
            </div>
        </div>

    )
};

export default Signup;