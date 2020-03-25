import React from 'react';
import { Button } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';

import { Section } from '../../components/page/page';

import styles from './blogOverview.module.scss';

export default function BlogOverview() {
  return (
    <Section>
      <div className={styles['blog-overview']}>
        <div className={`${styles['item-1']} ${styles['item']}`}>
          <h2 className={styles['title']}>
            Are you an avid reader?
          </h2>

          <p className={styles['content']}>
            Take a look at our collection of blog posts to expand your knowledge and evolve.
          </p>
        </div>

        <div className={`${styles['item-2']} ${styles['item']}`}>
          <img src={require('../../static/dev/blog_overview/img_1.png')} className={styles['img']} />
          <div className={styles['content']}>
            <h3 className={styles['content-title']}>
              Being a leader
            </h3>

            {/* <div className={styles['content-info']}>
              <Favorite color='primary' />
            </div>

            <Button
              variant='outlined'
              color='default'
            >
              View
            </Button> */}
          </div>
        </div>

        <div className={`${styles['item-3']} ${styles['item']}`}>
          <img src={require('../../static/dev/blog_overview/img_2.png')} className={styles['img']} />
        </div>

        <div className={`${styles['item-4']} ${styles['item']}`}>
          <img src={require('../../static/dev/blog_overview/img_3.png')} className={styles['img']} />
        </div>

        <div className={`${styles['item-5']} ${styles['item']}`}>
          <img src={require('../../static/dev/blog_overview/img_4.png')} className={styles['img']} />
        </div>

        <div className={`${styles['item-6']} ${styles['item']}`}>
          <img src={require('../../static/dev/blog_overview/img_6.png')} className={styles['img']} />
        </div>

        <div className={`${styles['item-7']} ${styles['item']}`}>
          <img src={require('../../static/dev/blog_overview/img_5.png')} className={styles['img']} />
        </div>
      </div>
    </Section>
  )
}
