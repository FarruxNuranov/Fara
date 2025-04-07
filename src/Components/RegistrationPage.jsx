import React, { useState } from 'react'
import styles from './RegistrationPage.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  Registration } from '../store/userSlice';

const RegistrationPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   



    const navigate = useNavigate()
    const dispatch = useDispatch()



    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            username,
            password,
        };
        dispatch(Registration(userData))
 
        navigate("/login")

        console.log(userData);
        
        

        
    }

    return (
        <div className="container">
            <section className={styles.login__box}>
            <h2>Регистрация</h2>
                <form onSubmit={handleSubmit} className={styles.login__form}>
                    <input
                        type="text"
                        placeholder="Введите логин"
                        className={styles.login__input}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Введите пароль"
                        className={styles.login__input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

               

                    <button type="submit" className={styles.login__button}>
                    Зарегистрироваться
                    </button>
                </form>
                <Link to={"/login"}>Уже есть аккаунт ?</Link>
            </section>
        </div>
    );
}


    export default RegistrationPage