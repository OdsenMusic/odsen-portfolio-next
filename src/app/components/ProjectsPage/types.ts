export type ProjectCardProps = {
  img: string;
  description: string;
  name: string;
  stack: string;
  href: string;
  setCursorVariant: (variant: string) => void;
  isRightContainerOpen: boolean;
  setIsRightContainerOpen: Function;
};
