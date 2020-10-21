export interface ButtonProps {
    sizex?: 'sm' | 'md' | 'lg' | null;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}