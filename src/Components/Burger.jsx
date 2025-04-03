import { useState, useEffect } from 'react';
import styles from './Burger.module.scss';

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.burger} onClick={toggleMenu}>
        <span className={isOpen ? styles.line1open : ''}></span>
        <span className={isOpen ? styles.line2open : ''}></span>
        <span className={isOpen ? styles.line3open : ''}></span>
      </div>

      {isOpen && (
  <nav className={styles.menu}>
    <button className={styles.close} onClick={() => setIsOpen(false)}>✖</button>

    <h2 className={styles.burger__title}>FAN VA TEXNIYALOGI</h2>
    <ul className={styles.nav__list}>
      <li className={styles["nav_link"]}>BIZ HAKIMIZDA</li>
      <li className={styles["nav_link"]}>QABUL 2025</li>
      <li className={styles["nav_link"]}>USAT HAYOTI</li>
      <li className={styles["nav_link"]}>XALQARO HAMKORLIK</li>
      <li className={styles["nav_link"]}>ILMIY FAOLIYAT</li>
      <li className={styles["nav_link"]}>HEMIS</li>
    </ul>
  </nav>
)}
    
    </div>
  );
}
