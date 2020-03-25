import React from 'react';
import { ThemeProvider, createMuiTheme, Button } from '@material-ui/core';
import { Section } from '../../components/page/page';

import globals from '../../utils/globals.scss';
import styles from './cta.module.scss';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: globals.primary
    },
    secondary: {
      main: globals.secondary
    }
  },
})

export default function CTA() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <div className={styles['cta-container']}>
        <Section>
          <div className={styles['cta']}>
            <div className={styles['left']}>
              <h2 className={styles['title']}>
                Ready to get started?
              </h2>
              <p className={styles['content']}>
                Take a look at our blog or our video courses
              </p>
            </div>
            <div className={styles['right']}>
              <div className={styles['actions']}>
                <Button
                  variant='contained'
                  className={styles['btn']}
                  size='large'
                >
                  Courses
                </Button>

                <Button
                  variant='outlined'
                  className={styles['btn']}
                  size='large'
                >
                  Blog
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </ThemeProvider>

  )
}
