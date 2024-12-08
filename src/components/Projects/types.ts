export interface ProjectProps {
  title: string;
  text: string;
  isSelected: boolean;
  onSelect: () => void;
}

export interface ProjectListProps {
  projects: ProjectProps[];
}
