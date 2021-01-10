export type ButtonProps = {
    color?: string;
    expand?: 'full' | 'block';
    shape?: 'round';
    fill?: 'default' | 'clear' | 'outline' | 'solid';
    size?: 'small' | 'default' | 'large';
    disabled?: boolean;
    children?: string;
    onClick?: any;
    className?: string;
    strong?: boolean;
};
  
export interface ButtonWithIconProps extends ButtonProps {
    icon?: string;
    slot?: string;
}
  