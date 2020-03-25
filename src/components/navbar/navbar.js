import React, { PureComponent } from 'react';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { Button } from '@material-ui/core';

import styles from './navbar.module.scss';
import { Section } from '../page/page';

export default class Navbar extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      scroll: {
        y: window.scrollY
      },
      window: {
        width: window.innerWidth
      },
      notification: {
        isOpen: false
      }
    }

    this.getScrollY = this.getScrollY.bind(this)
    this.getWindowWidth = this.getWindowWidth.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.getScrollY, 100))
    window.addEventListener('resize', debounce(this.getWindowWidth, 100))
    this.getScrollY()
    this.getWindowWidth()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.getScrollY, 100))
    window.removeEventListener('resize', debounce(this.getWindowWidth, 100))
  }

  getScrollY() {
    this.setState({
      ...this.state,
      scroll: {
        ...this.scroll,
        y: window.scrollY
      }
    })
  }

  getWindowWidth() {
    this.setState({
      ...this.state,
      window: {
        ...this.window,
        width: window.innerWidth
      }
    })
  }

  render() {
    const scrolled = this.state.scroll.y > 0 ? styles['scrolled'] : null
    const scrolledC = this.state.scroll.y > 0

    return (
      <nav className={styles['navbar-container']}>
        <Section>
          <div className={styles['navbar']}>
            <div className={styles['left']}>
              <Button
                variant='text'
                color='primary'
                className={styles['nav-btn']}
              >
                Home
              </Button>

              <Button
                variant='text'
                color='primary'
                className={styles['nav-btn']}
              >
                About
              </Button>

              <Button
                variant='text'
                color='primary'
                className={styles['nav-btn']}
              >
                Services
              </Button>
            </div>

            <div className={styles['center']}>
              {
                scrolledC ? (
                  <img alt='Evolve Life | logo' src={require('../../static/dev/full_logo.svg')} className={styles['img-full']} />
                ) : (
                  <img alt='Evolve Life | logo' src={require('../../static/dev/mini_logo.svg')} className={styles['img-mini']} />
                )
              }
              
            </div>

            <div className={styles['right']}>
              <Button
                variant='text'
                color='primary'
                className={styles['nav-btn']}
              >
                Courses
              </Button>

              <Button
                variant='text'
                color='primary'
                className={styles['nav-btn']}
              >
                Blog
              </Button>

              <Button
                variant='text'
                color='primary'
                className={styles['nav-btn']}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Section>
      </nav>
    );
  }
}
