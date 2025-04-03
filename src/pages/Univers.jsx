import React from 'react'
import styles from './Univers.module.scss';
import { univer3 } from '../utils/getimg';

const Univers = () => {
  return (
    <>
<section className={styles['home__title']}>
            <div className="container">
            <div className={styles["home__box"]}>
                <div className={styles['home__left']}>
                  <h2 className={styles["home__left-title"]}>Tarixiy Universitet Binosi</h2>
                  <p className={styles["home__left-text"]}>Ushbu muhtasham bino nafaqat arxitektura yodgorligi, balki o‘zida ilm-fan, tarix va ma’naviyatni uyg‘unlashtirgan muhim markazdir.
                    Bu yerda minglab talabalar tahsil olgan, professor-o‘qituvchilar faoliyat yuritgan. Uning qizil g‘ishtdan qurilgan fasadi va minoradagi soat — bu universitet ramzidir.</p>
                  <a href="#" className={styles["home__link"]}>Ma`lumot olish</a>           
                </div>
    
                <div className={styles["home__right"]}>
                  <img src={univer3} alt="" className={styles["home__right-img"]} />
                </div>
              </div>
            </div>
          </section>

    </>
  )
}

export default Univers