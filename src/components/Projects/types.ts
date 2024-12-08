export interface ProjectProps {
  title: string;
  description: string;
  technologies?: string[];
  repoLink?: string;
  liveLink?: string;
  image?: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

export interface ProjectListProps {
  projects: ProjectProps[];
}

export interface IconProps {
  name: string;
}
