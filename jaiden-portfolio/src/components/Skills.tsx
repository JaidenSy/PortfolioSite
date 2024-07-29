import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Skills.module.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface Skill {
  image: string;
  name: string;
}

const skillsData: Skill[] = [
  { image: '/images/skill1.png', name: 'Python' },
  { image: '/images/skill2.png', name: 'JavaScript' },
  { image: '/images/skill3.png', name: 'SQL' },
];

const Skills: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.skillsSection}>
      <h2 className={styles.title}>My Skills</h2>
      <Slider {...settings}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.card}>
            <img src={skill.image} alt={skill.name} className={styles.image} />
            <p className={styles.text}>{skill.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Skills;
