import React from 'react';
import styles from './AboutUs.styling.module.scss';
import Decoration from '../../assets/Decoration.svg';
import aboutus from '../../assets/People.jpg';
import signature from '../../assets/Signature.svg'

const AboutUs = () => {
  return (
    <>
      <section>
        <div className={styles.main__section__container}>
          <div className={styles.left__side__container}>
            <div className={styles.header__container}>
              <h1>O nas</h1>
              <img src={Decoration} alt="decoration" className={styles.decoration} />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img src={signature} alt="signature" className={styles.signature} />
          </div>
          <div className={styles.img__right__side__container}>
            <img src={aboutus} alt="people" />
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs