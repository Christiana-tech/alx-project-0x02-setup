export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
  className?: string;
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  userId: number;
}
export interface PostProps {
  id: number;
  title: string;
  content: string; // Note: This maps to 'body' from the JSONPlaceholder API
  userId: number;
}
