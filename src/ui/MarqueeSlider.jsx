import React from "react";
import { Link } from "react-router-dom";
import styles from "./MarqueeSlider.module.scss";
import { book} from "../utils/getimg";

const items = [
  { name: "Moliya va moliyaviy texnolog...", link: "/rektor" },
  { name: "Soliqlar va soliqka tortish", link: "/univer" },
  { name: "Buxgalteriya hisobi va audit", link: "/" },
  { name: "Logistika", link: "/" },
  { name: "Bank ishi va audit", link: "/" },
  { name: "Menejment", link: "/" },
];

const MarqueeSlider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles['slider__track']}>
        {items.concat(items).map((item, index) => (
          <Link to={item.link} key={index} 
          className={styles.slider__item}>
            <div className={styles['book__box']}>
            <img src={book} alt="" />
            </div>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSlider;
