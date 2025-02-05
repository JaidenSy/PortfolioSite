export interface Skill {
    skillName: string;
    image: string;
    description: string;
  }
  
export interface SkillCarouselProps {
    skills: Skill[];
  }

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  repoLink: string;
}