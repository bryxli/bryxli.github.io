export interface ProjectProps {
  title: string;
  description: string;
  techStack?: string[];
  repoLink?: string;
  liveLink?: string;
  image?: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

export interface ProjectListProps {
  projects: ProjectProps[];
}
