import './index.css';

export enum ButtonColor {
	primary = 'primary',
	red = 'red',
}

type ButtonProps = React.PropsWithChildren<{
	color?: ButtonColor;
}> &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
	children,
	color = ButtonColor.primary,
	...rest
}) => {
	return (
		<button className={`button ${color}`} {...rest}>
			{children}
		</button>
	);
};

export default Button;
