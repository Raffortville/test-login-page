import { styled } from '../../config';
import { CSS } from '@stitches/react';
import { colors } from '../../config/colors';

const Line = styled('div', {
	backgroundColor: '$primary_light',
	opacity: 0.2,

	variants: {
		vertical: {
			true: {
				width: 1,
				height: '100%',
			},
		},
		horizontal: {
			true: {
				width: '100%',
				height: 1,
			},
		},
	},
});

interface ISeparatorProps {
	direction?: 'horizontal' | 'vertical';
	color?: CSS['color'] | keyof typeof colors;
	css?: {
		separator?: CSS;
	};
}
const Separator: React.FC<ISeparatorProps> = ({
	direction = 'horizontal',
	css,
	color,
}) => {
	return (
		<Line
			vertical={direction === 'vertical'}
			horizontal={direction === 'horizontal'}
			css={{ backgroundColor: color, ...{ ...css?.separator } }}
		/>
	);
};

export default Separator;
