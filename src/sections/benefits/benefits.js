import React from 'react';

import { Section } from '../../components/page/page';

import styles from './benefits.module.scss';

export default function Benefits() {
  return (
    <div className={styles['benefits-container']}>
      <Section>
        <div className={styles['benefits']}>
          <div className={styles['left']}>
            <h2 className={styles['title']}>
              Why Us?
            </h2>
            <p className={styles['content']}>
              We always assure the best service from expert staff. Choosing one of our packages will guarantee that you will be taking the necessary steps to evolve your life.
            </p>
          </div>
          <div className={styles['right']}>
            <div className={styles['img-container']}>
              <img src={require('../../static/dev/benefit.png')} className={styles['img']} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
