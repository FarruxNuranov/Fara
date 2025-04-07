import { Link, useNavigate } from 'react-router-dom';
import MarqueeSlider from '../ui/MarqueeSlider'
import styles from './Header.module.scss';
import Burger from './Burger';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/userSlice';



const Header = () => {

    

    const { t, i18n } = useTranslation();

    const user = useSelector(state => state.user.user)

    const dispatch = useDispatch()

    const navigate = useNavigate()


    const handleChange = (e) => {
        const lang = e.target.value;
        i18n.changeLanguage(lang);
    };


    function logoutUser ( ) {
        dispatch(logout(false))
        navigate('/')
    }

  

    return (
        <>
            <header className={styles.header}>
                <div className={styles['header__box']}>
                    <MarqueeSlider />
                </div>
                <nav className={styles['header__nav']}>
                    <div className="container">
                        <div className={styles['nav__box']}>
                            <Link to="/" className={styles['header__title']}>
                               {t("nameOfUniver")}<span>{t("nameOfUniverspan")}</span>
                            </Link>
                            <ul className={styles['nav__list']}>
                                <li className={styles['nav__list-itm']}>
                                    <a className={styles['nav__list-itm-link']}>{t('about')}</a>
                                    <ul className={styles['list__itm']}>
                                        <Link  to={'/rector'} className={styles['list__itm-link']}>{t('Rector')}</Link>
                                        <li className={styles['list__itm-link']}>{t('Univers')}</li>
                                        <li className={`${styles['list__itm-link']} ${styles.on}`}>
                                            {t('team')}
                                            <ul className={styles.list}>
                                                <li t className={styles['list__list']}>{t("management_staff")}</li>
                                                <li className={styles['list__list']}>{t("Academic_staff")}</li>
                                            </ul>
                                        </li>
                                        <a className={styles['list__itm-link']}>{t("Campus")}</a>
                                    </ul>
                                </li>
                                {user ? (
                                    <>
                                        <li className={styles['nav__list-itm']}>
                                            <a className={styles['nav__list-itm-link']}>{t("Acceptance")}</a>
                                            <ul className={styles['list__itm']}>
                                                <li className={`${styles['list__itm-link']} ${styles.on}`}>
                                                    {t("Undergraduate")}
                                                    <ul className={styles.list}>
                                                        <li className={styles['list__list']}>Yonalishlar</li>
                                                        <li className={styles['list__list']}>1 Yonalish</li>
                                                        <li className={styles['list__list']}>2 Yonalish</li>
                                                        <li className={styles['list__list']}>3 Yonalish</li>
                                                        <li className={styles['list__list']}>5 Yonalish</li>
                                                        <li className={styles['list__list']}>6 Yonalish</li>
                                                        <li className={styles['list__list']}>7 Yonalish</li>
                                                        <li className={styles['list__list']}>8 Yonalish</li>
                                                        <li className={styles['list__list']}>9 Yonalish</li>
                                                        <li className={styles['list__list']}>10 Yonalish</li>
                                                    </ul>
                                                </li>
                                                <li className={`${styles['list__itm-link']} ${styles.on}`}>
                                                    {t("Master's_degree")}
                                                    <ul className={styles.list}>
                                                        <li className={styles['list__list']}>Yonalishlar</li>
                                                        <li className={styles['list__list']}>1 Yonalish</li>
                                                        <li className={styles['list__list']}>2 Yonalish</li>
                                                        <li className={styles['list__list']}>3 Yonalish</li>
                                                        <li className={styles['list__list']}>5 Yonalish</li>
                                                    </ul>
                                                </li>
                                                <li className={styles['list__itm-link']}>{t("Move_the_flow")}</li>
                                                <a className={styles['list__itm-link']}>{t("Grants_and_Scholarships")}</a>
                                            </ul>
                                        </li>
                                        <li className={styles['nav__list-itm']}>
                                            <a className={styles['nav__list-itm-link']}>{t("LIFE_OF_USAT")}</a>
                                            <ul className={styles['list__itm']}>
                                                <li className={`${styles['list__itm-link']} ${styles.on}`}>
                                                    TALABALAR
                                                    <ul className={styles.list}>
                                                        <li className={styles['list__list']}>Talabarlar fikri</li>
                                                        <li className={styles['list__list']}>Karyera ximzati</li>
                                                    </ul>
                                                </li>
                                                <li className={`${styles['list__itm-link']} ${styles.on}`}>
                                                    GALEREYA
                                                    <ul className={styles.list}>
                                                        <li className={styles['list__list']}>Rasmlar</li>
                                                        <li className={styles['list__list']}>Videolar</li>
                                                    </ul>
                                                </li>
                                                <li className={`${styles['list__itm-link']} ${styles.on}`}>
                                                    YANGILIKLAR
                                                </li>
                                                <li className={`${styles['list__itm-link']} ${styles.on}`}>
                                                    Fan-klublar
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={styles['nav__list-itm']}>
                                            <a className={styles['nav__list-itm-link']}>{t("INTERNATIONAL_COOPERATION")}</a>
                                            <ul className={styles['list__itm']}>
                                                <li className={styles['list__itm-link']}>Hamkor universitetlar</li>
                                                <li className={styles['list__itm-link']}>Work and Travel</li>
                                            </ul>
                                        </li>
                                        <li className={styles['nav__list-itm']}>
                                            <a className={styles['nav__list-itm-link']}>{t("SCIENTIFIC_ACTIVITY")}</a>
                                            <ul className={styles['list__itm']}>
                                                <li className={styles['list__itm-link']}>Ilmiy jurnal</li>
                                                <li className={styles['list__itm-link']}>E-LIBRARY</li>
                                                <li className={styles['list__itm-link']}>Konferensiyalar</li>
                                            </ul>
                                        </li>
                                        <li className={styles['nav__list-itm']}>
                                            <a className={styles['nav__list-itm-link']}>HEMIS</a>
                                            <ul className={styles['list__itm']}>
                                                <li className={styles['list__itm-link']}>HEMIS talaba</li>
                                                <li className={styles['list__itm-link']}>HEMIS o`qituvchi` </li>
                                            </ul>
                                        </li>
                                        <li className={styles['nav__list-itm']}>
                                            <a className={styles['nav__list-itm-link']}>{t("VACANCIES")}</a>
                                            <ul className={styles['list__itm']}>
                                                <li className={styles['list__itm-link']}>Akademik vakansiyalar</li>
                                                <li className={styles['list__itm-link']}>Mamuriy va boshqa lavomzimlari</li>
                                                <li className={styles['list__itm-link']}>Volontyorlik</li>
                                            </ul>
                                        </li>
                                        <li className={styles['nav__list-itm']}>
                                            <a className={styles['nav__list-itm-link']}>{t("CONTACT_US")}</a>
                                            <ul className={styles['list__itm']}>
                                                <li className={styles['list__itm-link']}>USAT bayrog`i</li>
                                                <li className={styles['list__itm-link']}>USAT gerbi</li>
                                                <li className={styles['list__itm-link']}>USAT madgiyasi</li>
                                            </ul>
                                        </li>
                                    </>
                                ) : null}
                                {user ?
                                    (<button className={styles.Output} onClick={() => logoutUser()}>{t("output")}</button>)
                                    : (<button className={styles.Output} onClick={() => navigate('/login')}>Войти</button>)}

                                <li><select className={styles.selected} value={i18n.language} onChange={handleChange}>
                                    <option className={styles.optin} value="en">EN</option>
                                    <option value="uz">UZ</option>
                                </select></li>
                            </ul>
                            <Burger />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;
