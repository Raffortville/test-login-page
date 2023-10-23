import { createStitches, globalCss } from '@stitches/react';
import { colors } from './colors';

export const globalStyles = globalCss({
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
		fontFamily: 'sans-serif',
	},
	label: {
		display: 'block',
	},
	body: {
		height: '100%',
		width: '100%',
		color: colors.black_light,
	},
});

export const { styled, css, keyframes } = createStitches({
	media: {
		xs: '(min-width: 576px)',
		sm: '(min-width: 768px)',
		md: '(min-width: 992px)',
		lg: '(min-width: 1200px)',
		xlg: '(min-width: 1201px)',
	},
	theme: {
		colors,
		shadows: {
			outset_light: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
		},
	},
});
