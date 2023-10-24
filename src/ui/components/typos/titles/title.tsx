import { CSS } from '@stitches/react';
import { styled } from '../../../config';
import { colors } from '../../../config/colors';

const Head = styled('span');

type HeadlinesType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface ITitleProps {
	component: HeadlinesType;
	children?: string;
	color?: CSS['color'] | keyof typeof colors;
	css?: { title?: CSS };
}

export const Title: React.FC<ITitleProps> = ({
	children,
	component,
	color,
	css,
}) => {
	return (
		<Head as={component} css={{ color, ...{ ...css?.title } }}>
			{children}
		</Head>
	);
};
