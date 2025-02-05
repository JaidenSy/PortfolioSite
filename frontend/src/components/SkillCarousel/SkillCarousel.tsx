import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SkillCarousel.css';
import { Skill, SkillCarouselProps } from '../../constants/types';

const SkillCarousel = ({ skills }: SkillCarouselProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="skill-carousel">
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-card-wrapper">
            <div className="skill-card">
              <img src={skill.image} alt={skill.skillName} className="skill-image" />
              <h3>{skill.skillName}</h3>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillCarousel;