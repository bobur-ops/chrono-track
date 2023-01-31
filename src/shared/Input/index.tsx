import './input.css';

export type InputProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	'onChange'
> & {
	value: string;
	onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({ value, onChange, ...rest }) => {
	return (
		<input
			className="input"
			value={value}
			onChange={(e) => onChange(e.target.value)}
			{...rest}
		/>
	);
};

export default Input;
