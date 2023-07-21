import React from 'react';
import { Link } from 'react-router-dom';
import Decoration from '../../assets/Decoration.svg';
import styles from './Home.styles.module.scss';
import HomeHeroImage from '../../assets/HomeHeroImage.jpg'


const HomeHeader = () => {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.home}>
          <div className={styles.headermenu}>

          </div>


        </div>
        <div className={styles.bodysection}>
          <div className={styles.headercontainer}>
            <div className={styles.correctionheaderbuttons}>
              <Link to='login' >
                <button className={styles.buttonsHeader}>Zaloguj</button>
              </Link>
              <Link to='registration'>
                <button className={styles.buttonsHeader}>Załóż konto</button>
              </Link>
            </div>
            <ul className={styles.topmenu}>
              <li>Start</li>
              <li>O co chodzi</li>
              <li>O nas</li>
              <li>Fundacja i organizacja</li>
              <li>Kontakt</li>
            </ul>
          </div>
          <div className={styles.bodyitems}>
            <h1>zacznij pomagać oddaj niechciane rzeczy w zaufane ręce</h1>
            <img src={Decoration} alt="decoration" className={styles.decorationstyling} />
          </div>
          <div className={styles.buttonsbottom}>
            <Link to='login'>
              <button >oddaj rzeczy</button>
              <button >zorganizuj zbiórkę</button>
            </Link>
          </div>
        </div>

      </section>
    </>
  )
}

export default HomeHeader