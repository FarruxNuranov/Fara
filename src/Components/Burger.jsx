import { useState, useEffect } from 'react';
import styles from './Burger.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/userSlice';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { avaicon } from '../utils/getimg';

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const user = useSelector(state => state.user.user)

  const dispatch = useDispatch()

  const navigate = useNavigate()


  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };


  function closeBuerger() {
    setIsOpen((prev) => !prev);
    navigate("login")
  }


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
    <div  className={styles.wrapper}>
      <div className={styles.burger} onClick={toggleMenu}>
        <span className={isOpen ? styles.line1open : ''}></span>
        <span className={isOpen ? styles.line2open : ''}></span>
        <span className={isOpen ? styles.line3open : ''}></span>
      </div>

      {isOpen && (
        <nav className={styles.menu}>
          <button className={styles.close} onClick={() => setIsOpen(false)}>✖</button>

          <h2 className={styles.burger__title}>FAN VA TEXNIYALOGI</h2>
          <ul onClick={toggleMenu} className={styles.burger__list}>
            <li className={styles.burger__list_link}>{t('about')}</li>
            <li className={styles.burger__list_link}>{t("Acceptance")}</li>
            <li className={styles.burger__list_link}>{t("Move_the_flow")}</li>
            <li className={styles.burger__list_link}>{t("LIFE_OF_USAT")}</li>
            <li className={styles.burger__list_link}>{t("INTERNATIONAL_COOPERATION")}</li>
            <li className={styles.burger__list_link}>{t("SCIENTIFIC_ACTIVITY")}</li>
            <li className={styles.burger__list_link}>{t("VACANCIES")}</li>
            {user ? (
              <>
                <li className={styles.burger__list_link}>
                  <img className={styles.Page} src={avaicon} alt="" />
                </li>
              </>
            ) : null}
             {user ?
                                    (<button className={styles.Output} onClick={() =>   dispatch(logout(false))}>{t("output")}</button>)
                                    : (<button className={styles.Output} onClick={() => navigate("/login")}>Войти</button>)}

                                <li className={styles.burger__list_link}><select className={styles.selected} value={i18n.language} onChange={handleChange}>
                                    <option className={styles.optin} value="en">EN</option>
                                    <option value="uz">UZ</option>
                                </select></li>

          </ul>
        </nav>
      )}

    </div>
  );
}
