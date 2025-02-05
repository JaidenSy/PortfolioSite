export interface Skill {
    skillName: string;
    image: string;
    description: string;
  }
  
export interface SkillCarouselProps {
    skills: Skill[];
  }