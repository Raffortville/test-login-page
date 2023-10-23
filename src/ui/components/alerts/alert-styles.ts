import { styled } from '../../config';
import { moveFromBottom } from '../../config/animations';

const AlertBox = styled('div', {
	display: 'none',
	position: 'absolute',
	left: '50%',
	bottom: 0,
	height: 40,
	minWidth: 175,
	padding: '0 8px',
	borderRadius: '3px',
	color: '$white_light',

	variants: {
		onMove: {
			true: {
				display: 'flex',
				alignItems: 'center',
				gap: 8,
				animation: `${moveFromBottom} 0.2s linear`,
				transform: 'translate(0,-50px)',
			},
		},
		danger: {
			true: {
				backgroundColor: '$danger',
			},
		},
		success: {
			true: {
				backgroundColor: '$success',
			},
		},
	},
});

export { AlertBox };
