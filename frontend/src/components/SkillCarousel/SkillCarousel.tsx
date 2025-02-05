import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SkillCarousel.css';
import { Skill, SkillCarouselProps } from '../../types';

const SkillCarousel: React.FC<SkillCarouselProps> = ({ skills }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    initialSlide: 1, // Start with the second item as the center
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1, // Ensure the second item is centered on larger screens
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
    <div className="skill-carousel">
      <Slider {...settings}>
        {skills.slice(0, 3).map((skill, index) => (
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