import { CSS } from '@stitches/react';
import { Btn } from './button-styles';

interface IButtonProps {
	onClick?: () => void;
	children?: React.ReactNode | string | JSX.Element;
	outline?: boolean;
	disabled?: boolean;
	css?: {
		button?: CSS;
	};
}

const Button: React.FC<IButtonProps> = ({
	onClick,
	children,
	outline,
	disabled,
	css,
}) => {
	return (
		<Btn
			disabled={disabled}
			onClick={onClick}
			outline={outline}
			css={css?.button}>
			{children}
		</Btn>
	);
};

export default Button;
