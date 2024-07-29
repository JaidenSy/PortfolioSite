import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Skills from '../components/Skills';


const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/profile.png"
          alt="Your Name"
          width={150}
          height={150}
          className={styles.profileImage} />
      </div>
      <div className={styles.textWrapper}>
        <h1>Welcome! I'm Jaiden Sy</h1>
        <p>
          Thank you for visiting my portfolio! I am a Full Stack Software Engineer,
          with a deep interest in learning new technologies.
          I have experience in javascript, python, sql, and frameworks such as
          Django, FastAPI, React, and Next.js.
          This portfolio showcases my work, projects, and contributions.
        </p>
      </div>
      {/* commented out due to Skills not working (possibly version issue) */}
      {/* <Skills/> */} 
      
    </div>
  );
};

export default HomePage;

