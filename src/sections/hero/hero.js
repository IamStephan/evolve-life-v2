import React from 'react';

import { Section } from '../../components/page/page';

import styles from './hero.module.scss';

export default function Hero() {
  return (
    <div className={styles['hero']}>
      <img src={require('../../static/dev/hero.jpg')} className={styles['img']} />
        
      <div className={styles['info']}>
        <h1 className={styles['title']}>
          Evolving Your Life Now
        </h1>

        <p className={styles['subtitle']}>
          Evolving Your potential into action
        </p>
      </div>
    </div>
  )
}
