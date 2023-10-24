import { type CSS } from '@stitches/react';
import { ChangeEvent, useState } from 'react';
import { TiStarburst } from 'react-icons/ti';
import {
	Caption,
	Container,
	Input,
	InputContent,
	Label,
	LeftContainer,
} from './textfield-styles';
import Text from '../../typos/texts/text';

interface ITextfieldProps {
	type?: React.HTMLInputTypeAttribute;
	value?: string | number | readonly string[] | undefined;
	defaultValue?: string | number | readonly string[] | undefined;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: () => void;
	name?: string;
	id?: string;
	label?: string;
	textError?: string | undefined;
	placeholder?: string;
	required?: boolean;
	width?: string | number | undefined;
	height?: string | number | undefined;
	autoComplete?: string | undefined;
	css?: {
		content?: CSS;
		input?: CSS;
		label?: CSS;
		leftIcon?: CSS;
	};
	leftIconElement?: React.ReactNode;
}

const Textfield: React.FC<ITextfieldProps> = ({
	type,
	value,
	defaultValue,
	onChange,
	onBlur,
	name,
	id,
	label,
	textError,
	placeholder,
	required,
	width,
	height,
	autoComplete,
	css,
	leftIconElement,
}) => {
	const [isOnFOcus, setIsOnFocus] = useState<boolean>(false);

	return (
		<Container>
			<Caption>
				{required && <TiStarburst />}
				{label && <Label>{label}</Label>}
			</Caption>
			<InputContent
				onFocus={isOnFOcus}
				css={{ width, height, ...css?.content }}>
				<LeftContainer css={css?.leftIcon}>{leftIconElement}</LeftContainer>

				<Input
					id={id}
					type={type}
					value={value}
					defaultValue={defaultValue}
					name={name}
					onChange={onChange}
					onFocus={() => {
						setIsOnFocus(true);
					}}
					onBlur={() => {
						onBlur?.();
						setIsOnFocus(false);
					}}
					placeholder={placeholder}
					autoComplete={autoComplete}
					css={css?.input}
				/>
			</InputContent>
			<Text
				component='small'
				color={'$danger'}
				css={{ text: { paddingLeft: 4 } }}>
				{textError}
			</Text>
		</Container>
	);
};

export default Textfield;
