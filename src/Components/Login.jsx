import styles from './Login.module.scss'
import { useDispatch} from 'react-redux'
import {  login } from '../store/UserSlice'
import { useNavigate } from 'react-router-dom'
const Login = () => {



const dispatch = useDispatch()


const navigate = useNavigate()



const handleSubmit = (e) => {
    e.preventDefault(); 
 
   
  };



function Vxod () {
    dispatch(login(true))
    navigate('/')
    
}


  return (
    <>
             <div className="container">
    <section className={styles.login__box}>
             <form onSubmit={handleSubmit} action="" className={styles.login__form}>
                <input 
                type="text"
                 placeholder='Введите логин' 
                 className={styles.login__input} />


                <input
                 type="text" 
                 placeholder='Введите пароль' 
                 className={styles.login__input} />


                <button onClick={() =>  Vxod()} className={styles.login__button}>Войти</button>
             </form>
          
           </section>
               </div>
        
     </>
  )
}

export default Login