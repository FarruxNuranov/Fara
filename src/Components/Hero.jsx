import React from 'react';
import { video1, video2, video3, video4,   } from '../utils/getVideo';
import styles from './Hero.module.scss';
import { award, categories, classroom, folder, grad, gradu, student, teacher, univer } from '../utils/getimg';

const videoFiles = [video1, video2, video3, video4];

const Hero = () => {
  return (
    <>
      <section className={styles['hero']}>
       <div className={styles[`video-menu`]}>
          {videoFiles.map((video, index) => (
            <video
              key={index}
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className={styles[`video-item`]}
            />
          ))}
          <h1 className={styles['video__title']}>UNIVERSITET</h1>
        </div>
      </section>
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
              <img src={univer} alt="" className={styles["home__right-img"]} />
            </div>
          </div>
        </div>
      
      </section>
      <section className={styles['hero__info']}>
       <div className="container">
       <div className={styles['statsGrid']}>
          <div className={styles['card']}>
            <img src={student} alt="Students" className={styles.icon} />
            <p className={styles['title']}>Umumiy talabalar soni</p>
            <h2 className={styles['number']}>4903</h2>
          </div>
          <div className={styles['card']}>
            <img src={teacher} alt="Students" className={styles.icon} />
            <p className={styles['title']}>Professor-o`qituvchilar</p>
            <h2 className={styles['number']}>36</h2>
          </div>
          <div className={styles['card']}>
            <img src={classroom} alt="Students" className={styles.icon} />
            <p className={styles['title']}>Auditoriyalar soni</p>
            <h2 className={styles['number']}>41</h2>
          </div>
          <div className={styles['card']}>
            <img src={categories} alt="Students" className={styles.icon} />
            <p className={styles['title']}>Talim sohalari</p>
            <h2 className={styles['number']}>44</h2>
          </div>
          <div className={styles['card']}>
            <img src={award} alt="Students" className={styles.icon} />
            <p className={styles['title']}>Fakultetlar</p>
            <h2 className={styles['number']}>6</h2>
          </div>
          <div className={styles['card']}>
            <img src={grad} alt="Students" className={styles.icon} />
            <p className={styles['title']}>Ilmiy daraja</p>
            <h2 className={styles['number']}>36</h2>
          </div>
          <div className={styles['card']}>
            <img src={folder} alt="Students" className={styles.icon} />
            <p className={styles['title']}>Mustaqil tadqiqotchilar</p>
            <h2 className={styles['number']}>10</h2>
          </div>
          <div className={styles['card']}>
            <img src={gradu} alt="Students" className={styles.icon} />
            <p className={styles['title']}>Ilmiy salohiyat korsatkichi</p>
            <h2 className={styles['number']}>47</h2>
          </div>
        </div>
       </div>
      </section>
    </>
  );
};

export default Hero;
