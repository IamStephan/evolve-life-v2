import React from 'react';
import { Button } from '@material-ui/core';

import { Section } from '../../components/page/page';

import styles from './features.module.scss';

export default function Features() {
  return (
    <Section>
      <div className={styles['features']}>
        <h2 className={styles['title']}>
          What we offer
        </h2>

        <div className={styles['items']}>
          <div className={styles['item']}>
            <img src={require('../../static/dev/PED.png')} className={styles['img']} />
            <div className={styles['content']}>
              <h3 className={styles['item-title']}>
                Personal Evolvement and Development
              </h3>
              <p className={styles['item-content']}>
                Helping you evolve for the better.
              </p>
            </div>
            <Button
              variant='contained'
              color='primary'
            >
              Learn More
            </Button>
          </div>

          <div className={styles['item']}>
            <img src={require('../../static/dev/life_projects.png')} className={styles['img']} />
            <div className={styles['content']}>
              <h3 className={styles['item-title']}>
                Life Projects
              </h3>
              <p className={styles['item-content']}>
                Large scale projects to help those in need to change their lives.
              </p>
            </div>
            <Button
              variant='contained'
              color='primary'
            >
              Learn More
            </Button>
          </div>

          <div className={styles['item']}>
            <img src={require('../../static/dev/schools.png')} className={styles['img']} />
            <div className={styles['content']}>
              <h3 className={styles['item-title']}>
                School, Teachers and Learner development
              </h3>
              <p className={styles['item-content']}>
                Helping those helping hands cultivate the future for the youth.
              </p>
            </div>
            <Button
              variant='contained'
              color='primary'
            >
              Learn More
            </Button>
          </div>

          <div className={styles['item']}>
            <img src={require('../../static/dev/business.png')} className={styles['img']} />
            <div className={styles['content']}>
              <h3 className={styles['item-title']}>
                Business Development
              </h3>
              <p className={styles['item-content']}>
                Developing business level skills used to bring your name into the spotlight.
              </p>
            </div>
            <Button
              variant='contained'
              color='primary'
            >
              Learn More
            </Button>
          </div>

          <div className={styles['item']}>
            <img src={require('../../static/dev/training.png')} className={styles['img']} />
            <div className={styles['content']}>
              <h3 className={styles['item-title']}>
                Training
              </h3>
              <p className={styles['item-content']}>
                Teaching the neccesary skills for almost any line of work.
              </p>
            </div>
            <Button
              variant='contained'
              color='primary'
            >
              Learn More
            </Button>
          </div>

          <div className={styles['item']}>
            <img src={require('../../static/dev/online.png')} className={styles['img']} />
            <div className={styles['content']}>
              <h3 className={styles['item-title']}>
                Online Work
              </h3>
              <p className={styles['item-content']}>
                Bridging the gap with online technologies, providing you with the tools you need, wherever you need them.
              </p>
            </div>
            <Button
              variant='contained'
              color='primary'
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
