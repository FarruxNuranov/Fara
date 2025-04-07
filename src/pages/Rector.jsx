import React, { useEffect, useState } from 'react'
import styles from './Rector.module.scss';
import { avat,  } from '../utils/getimg';
import Loader from '../Components/Loader';


const Rector = () => {

const [loading, setLoading] = useState(false)



useEffect(() => {
  setTimeout(() => {
    setLoading(true)
  }, 1000);
  
}, [loading])







  return (
    <>
   {loading ?  <section className={styles['home__title']}>
            <div className="container">
            <div className={styles["home__box"]}>
                <div className={styles['home__left']}>
                  <h2 className={styles["home__left-title"]}>Rektor - Имя Фамилия</h2>
                  <p className={styles["home__left-text"]}>ИМЯ ФАМИЛИЯ mehnat faoliyati 1986-1993-yillarda Toshkent irrigatsiya va qishloq xo‘jaligini mexanizatsiyalash injenerlari instituti talabasi, 1993-1994-yillarda Toshkent shahar Ziyokor ilmiy-ishlab chiqarish kichik korxonasi ilmiy izlanuvchisi, 1994-1997-yillarda Toshkent irrigatsiya va qishloq xo‘jaligini mexanizatsiyalash injenerlari instituti aspiranti, 1997-1999-yillarda Toshkent irrigatsiya va qishloq xo‘jaligini mexanizatsiyalash injenerlari instituti Axborot va texnik ta’minot bo‘limi muhandisi, 1999-2004-yillarda </p>
                  <a href="#" className={styles["home__link"]}>Ma`lumot olish</a>           
                </div>
    
                <div className={styles["home__right"]}>
                  <img src={avat} alt="" className={styles["home__right-img"]} />
                </div>
              </div>
            </div>
          </section>
          : <Loader/> }
    </>
  )
}

export default Rector