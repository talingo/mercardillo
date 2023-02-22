import React from 'react'
import WelcomeButton from './WelcomeButton'
import video from '../../assets/welcome-page-video.mp4'
import styles from './Welcome.module.css'

const Welcome = () => {
  return (
      <div className={styles.welcome}>
        <video className={styles.video} src={video} autoPlay loop='true' muted/>
        <section className={styles.button}>
          <WelcomeButton />
        </section>
      </div>
  );
}

export default Welcome