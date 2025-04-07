import styles from './Login.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/UserSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Login = () => {



  const dispatch = useDispatch()
  const navigate = useNavigate()
  const registeredUsers = useSelector(state => state.user.registeredUsers);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


 

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      dispatch(login({
        user: foundUser,
      
        
      })
    );
    console.log( registeredUsers)
      navigate('/');
    } else {
      alert('Неверный логин или пароль');
      
    }
  };








  return (
    <>
      <div className="container">
        <section className={styles.login__box}>
          <h2>ВХОД</h2>
          <form onSubmit={handleSubmit} action="" className={styles.login__form}>
            <input
              type="text"
              placeholder='Введите логин'
              className={styles.login__input}
              onChange={(e) => setUsername(e.target.value)} />


            <input
              type="text"
              placeholder='Введите пароль'
              className={styles.login__input}
              onChange={(e) => setPassword(e.target.value)} />


            <button className={styles.login__button}>Войти</button>
          </form>
          <Link to={"/registration"}>Регистрация</Link>

        </section>
      </div>

    </>
  )
}

export default Login