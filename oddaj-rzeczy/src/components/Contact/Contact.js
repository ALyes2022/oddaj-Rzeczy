import React from 'react';
import styles from './Contact.styling.module.scss';
import Decoration from '../../assets/Decoration.svg';
import instagram from '../../assets/Instagram.svg';
import facebook from '../../assets/Facebook.svg';

const Contact = () => {
  return (
    <>
      <section>
        <div className={styles.main__container}>
          <div className={styles.header__container}>
            <h1>Skontaktuj się z nami</h1>
            <img src={Decoration} alt="decoration" />
          </div>
          <div className={styles.form__container}>
            <div className={styles.first__last__name__container}>
              <div className={styles.first__name__input__container}>
                <label>Wpisz swój imię</label>
                <input type="text" className={styles.first__name__input} placeholder='Imię' />
              </div>
              <div className={styles.first__email__input__container}>
                <label>Wpisz swój email</label>
                <input type="email" className={styles.email__input} placeholder='Email' />
              </div>
            </div>
            <div className={styles.messege__container}>
              <div className={styles.message__input__container}>
                <label>Wpisz swoją wiadomość</label>
                <input type="textarea" className={styles.message__input} placeholder='Wiadomość' />
              </div>
            </div>
          </div>
          <div className={styles.submit__button__container}>
            <button className={styles.submit__button}>Wyślij</button>
          </div>
          <div className={styles.icons__social__media}>
            <img src={instagram} alt="instagram" className={styles.instagram} />
            <img src={facebook} alt="facebook" className={styles.facebook} />
          </div>
        </div>

      </section>
    </>
  )
}

export default Contact