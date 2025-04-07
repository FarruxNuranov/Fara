import React from 'react'
import styles from './Footer.module.scss';
import { bib, bild, ditori, star } from '../utils/getimg';


const Footer = () => {
  return (
    <footer  className={styles['footer']}>
      <div className="container">
        <div data-aos="fade-up" className={styles["footer__box"]}>
          <h3 className={styles["footer__title"]}>UNIVERSITET HAQIDA</h3>
          <p className={styles["footer__text"]}>Bugungi kunga qadar universitet O‘zbekiston va xorijdagi xalqaro universitetlar va ta’lim tashkilotlari bilan hamkorlik qilib, bakalavriat va magistratura ixtisosliklari bo‘yicha ta’lim dasturlari hamda kadrlar tayyorlash va qayta tayyorlash dasturlarini amalga oshiradi.</p>
        </div>


        <div data-aos="fade-up" className={styles['footer__grid-box']}>
          <div className={styles["footer__item"]}>
            <div className={styles['footer_icon']}>
              <img src={bild} alt="icon__img" className={styles.icon} />
            </div>
            <p className={styles['item__title']}>Kampus</p>
            <h2 className={styles['item__text']}>Shaharning ortasida joylashgan qulay va shinam kampus</h2>
          </div>
          <div className={styles["footer__item"]}>
            <div className={styles['footer_icon']}>
              <img src={ditori} alt="icon__img" className={styles.icon} />
            </div>
            <p className={styles['item__title']}>Auditoriya</p>
            <h2 className={styles['item__text']}>keng va shinam auditoriyalar</h2>
          </div>
          <div className={styles["footer__item"]}>
            <div className={styles['footer_icon']}>
              <img src={star} alt="icon__img" className={styles.icon} />
            </div>
            <p className={styles['item__title']}>Faollar zali</p>
            <h2 className={styles['item__text']}>Keng va zamonaviy sahnaga ega fidoyi faollar zali</h2>
          </div>
          <div className={styles["footer__item"]}>
            <div className={styles['footer_icon']}>
              <img src={bib} alt="icon__img" className={styles.icon} />
            </div>
            <p className={styles['item__title']}>Kutubxona</p>
            <h2 className={styles['item__text']}>Saraning dunyo kitoblari yigilgan sokin va kozni qamashtiruvchi kutish zali</h2>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer