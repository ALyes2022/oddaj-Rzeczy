import React from 'react';
import { Link } from 'react-router-dom';
import Decoration from '../../assets/Decoration.svg';
import styles from './steps.styling.module.scss';
import Icon1 from '../../assets/Icon-1.svg';
import Icon2 from '../../assets/Icon-2.svg';
import Icon3 from '../../assets/Icon-3.svg';
import Icon4 from '../../assets/Icon-4.svg';


const Steps = () => {
  return (
    <>
      <section>
        <div className={styles.section__container}>
          <div className={styles.header__container}>
            <h1>Wystarczą 4 proste kroki</h1>
            <img src={Decoration} alt="decoration" />
          </div>
          <div className={styles.body__container}>
            <div className={styles.body__items__container}>
              <img src={Icon1} alt="clothing-icon" />
              <h2>Wybierz rzeczy</h2>
              <div className={styles.border}></div>
              <p>Ubrania, zabawki, sprzęt i inne</p>
            </div>
            <div className={styles.body__items__container}>
              <img src={Icon2} alt="packaging-icon" />
              <h2>Spakuj je</h2>
              <div className={styles.border}></div>
              <p>skorzystaj z worków na śmieci</p>
            </div>
            <div className={styles.body__items__container}>
              <img src={Icon3} alt="loup-icon" />
              <h2>Zdecyduj komu chcesz pomoc</h2>
              <div className={styles.border}></div>
              <p>Wybierz zaufane miejsce</p>
            </div>
            <div className={styles.body__items__container}>
              <img src={Icon4} alt="recycling-icon" />
              <h2>Zamów kuriera</h2>
              <div className={styles.border}></div>
              <p>Kurier przyjdzie w dogodnym terminie</p>
            </div>
          </div>
          <div className={styles.footer__container}>
            <Link to={'login'}>
              <button className={styles.button__styling}>oddaj rzeczy</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Steps