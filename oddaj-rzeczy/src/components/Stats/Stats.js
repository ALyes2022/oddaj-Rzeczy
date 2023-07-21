import React from 'react';
import styles from './Stats.styling.module.scss';



const Stats = () => {
  return (
    <>
      <section>
        <div className={styles.mainsectionstyling}>
          <div className={styles.singleitemstyling}>
            <h1>10</h1>
            <h2>oddanych worków</h2>
            <p>eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
          </div>
          <div className={styles.singleitemstyling}>
            <h1>5</h1>
            <h2>wspartych organizacji</h2>
            <p>eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
          </div>
          <div className={styles.singleitemstyling}>
            <h1>7</h1>
            <h2>zorganizowany zbiórek</h2>
            <p>eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
          </div>
        </div>

      </section>
    </>
  )
}

export default Stats