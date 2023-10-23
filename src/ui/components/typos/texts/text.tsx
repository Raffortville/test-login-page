import { CSS } from '@stitches/react';
import { styled } from '../../../config';
import { colors } from '../../../config/colors';

const Paragraph = styled('span', {
	variants: {
		clickable: {
			true: {
				cursor: 'pointer',
				transition: 'ease 0.2s opacity',

				'&:hover': {
					opacity: 0.7,
				},
			},
		},
	},
});

type TextTypes =
	| 'p'
	| 'span'
	| 'label'
	| 'small'
	| 'code'
	| 'pre'
	| 'b'
	| 'strong'
	| 'address';

interface ITextProps {
	component?: TextTypes;
	children?: string;
	css?: { text?: CSS };
	color?: CSS['color'] | keyof typeof colors;
	clickable?: boolean;
}

const Text: React.FC<ITextProps> = ({
	children,
	component = 'p',
	css,
	color,
	clickable,
}) => {
	return (
		<Paragraph
			as={component}
			css={{ color, ...{ ...css?.text } }}
			clickable={clickable}>
			{children}
		</Paragraph>
	);
};

export default Text;
