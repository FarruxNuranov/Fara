import React from 'react';
import { video1, video2, video3, video4, } from '../utils/getVideo';
import styles from './Hero.module.scss';
import { award, categories, classroom, folder, grad, gradu, student, teacher, univ, univer, univer3, } from '../utils/getimg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import AnimatedCounter from '../ui/AnimatedCounter.jsx'
import { useSelector } from 'react-redux';


const videoFiles = [video1, video2, video3, video4];




const Hero = () => {


  const userLog = useSelector(state => state.user.user)



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
              <h1
                className={styles['video__title']}>UNIVERSITET</h1>
            </div>
          </section>
          <section className={styles['home__title']}>
            <div className="container">
         
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Autoplay, Pagination]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
              >
                <SwiperSlide><div className={styles["home__box"]}>
                  <div className={styles['home__left']}>
                    <h2 data-aos="zoom-in-right" className={styles["home__left-title"]}>Tarixiy Universitet Binosi</h2>
                    <p data-aos="zoom-in-right" className={styles["home__left-text"]}>Ushbu muhtasham bino nafaqat arxitektura yodgorligi, balki o‘zida ilm-fan, tarix va ma’naviyatni uyg‘unlashtirgan muhim markazdir.
                      Bu yerda minglab talabalar tahsil olgan, professor-o‘qituvchilar faoliyat yuritgan. Uning qizil g‘ishtdan qurilgan fasadi va minoradagi soat — bu universitet ramzidir.</p>
                    <a href="#" className={styles["home__link"]}>Ma`lumot olish</a>
                  </div>

                  <div data-aos="zoom-in-left" className={styles["home__right"]}>
                    <img src={univer} alt="" className={styles["home__right-img"]} />
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className={styles["home__box"]}>
                  <div className={styles['home__left']}>
                    <h2 className={styles["home__left-title"]}>Yangi avlod uchun zamonaviy universitet!</h2>
                    <p className={styles["home__left-text"]}>Bizning universitet – bilimga, innovatsiyaga va kelajakka yo‘naltirilgan mukammal ta’lim maskani. Bu yerda siz nafaqat zamonaviy bilimlarni egallaysiz, balki tajribali ustozlardan o‘rganib, o‘z kasbiy yo‘nalishingizni aniqlab olasiz. Interaktiv darslar, xalqaro hamkorliklar va talabalar uchun barcha qulayliklar – bularning hammasi siz uchun!</p>
                    <a href="#" className={styles["home__link"]}>Ma`lumot olish</a>
                  </div>

                  <div className={styles["home__right"]}>
                    <img src={univ} alt="" className={styles["home__right-img"]} />
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className={styles["home__box"]}>
                  <div className={styles['home__left']}>
                    <h2 className={styles["home__left-title"]}>Kelajak sari ishonchli qadam!
                    </h2>
                    <p className={styles["home__left-text"]}>Zamonaviy bilim, ilg‘or texnologiyalar va ilhomlantiruvchi muhit – bularning barchasi bizning universitetda sizni kutmoqda. Har bir talaba individual yondashuv, amaliy mashg‘ulotlar va real loyihalar orqali o‘z iqtidorini ro‘yobga chiqaradi. Kelajagingizni biz bilan birga qurishga tayyormisiz?</p>
                    <a href="#" className={styles["home__link"]}>Ma`lumot olish</a>
                  </div>

                  <div className={styles["home__right"]}>
                    <img src={univer3} alt="" className={styles["home__right-img"]} />
                  </div>
                </div></SwiperSlide>
              </Swiper>

            </div>

          </section>
          <section className={styles['hero__info']}>
            <div className="container">
              <div data-aos="fade-up" className={styles['statsGrid']}>
                <div className={styles['card']}>
                  <img src={student} alt="Students" className={styles.icon} />
                  <p className={styles['title']}>Umumiy talabalar soni</p>
                  <AnimatedCounter target={4903} />
                </div>
                <div className={styles['card']}>
                  <img src={teacher} alt="Students" className={styles.icon} />
                  <p className={styles['title']}>Professor-o`qituvchilar</p>
                  <AnimatedCounter target={36} />
                </div>
                <div className={styles['card']}>
                  <img src={classroom} alt="Students" className={styles.icon} />
                  <p className={styles['title']}>Auditoriyalar soni</p>
                  <AnimatedCounter target={41} />
                </div>
                <div className={styles['card']}>
                  <img src={categories} alt="Students" className={styles.icon} />
                  <p className={styles['title']}>Talim sohalari</p>
                  <AnimatedCounter target={44} />
                </div>
                <div className={styles['card']}>
                  <img src={award} alt="Students" className={styles.icon} />
                  <p className={styles['title']}>Fakultetlar</p>
                  <AnimatedCounter target={6} />
                </div>
                <div className={styles['card']}>
                  <img src={grad} alt="Students" className={styles.icon} />
                  <p className={styles['title']}>Ilmiy daraja</p>
                  <AnimatedCounter target={36} />
                </div>
                <div className={styles['card']}>
                  <img src={folder} alt="Students" className={styles.icon} />
                  <p className={styles['title']}>Mustaqil tadqiqotchilar</p>
                  <AnimatedCounter target={10} />
                </div>
                <div className={styles['card']}>
                  <img src={gradu} alt="Students" className={styles.icon} />
                  <p className={styles['title']}>Ilmiy salohiyat korsatkichi</p>
                  <AnimatedCounter target={47} />
                </div>
              </div>
            </div>
          </section>
        
      
    </>
  );
};

export default Hero;
