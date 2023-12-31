import { type CSS } from '@stitches/react';
import { TiStarburst } from 'react-icons/ti';
import { Container, Required, Input, Label } from './checkbox-styles';

interface ICheckboxProps {
	label?: string;
	checked?: boolean | undefined;
	defaultChecked?: boolean | undefined;
	onCheck?: (checked: boolean) => void;
	name?: string | undefined;
	id?: string;
	required?: boolean;
	css?: {
		container?: CSS;
		input?: CSS;
		label?: CSS;
	};
}

export const Checkbox: React.FC<ICheckboxProps> = ({
	label,
	checked,
	defaultChecked,
	onCheck,
	name,
	id,
	required,
	css,
}) => {
	return (
		<Container css={css?.container}>
			{required && (
				<Required>
					<TiStarburst />
				</Required>
			)}

			<Input
				type='checkbox'
				id={id}
				name={name}
				checked={checked}
				defaultChecked={defaultChecked}
				onChange={(e) => {
					onCheck?.(e.target.checked);
				}}
				css={css?.input}
			/>
			<Label css={css?.label}>{label}</Label>
		</Container>
	);
};
