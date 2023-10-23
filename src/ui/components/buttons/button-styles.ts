import { styled } from '../../config';

const Btn = styled('button', {
	all: 'unset',
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '8px 16px',
	fontSize: 'small',
	backgroundColor: '$primary',
	color: '$white_light',
	borderRadius: '3px',
	transition: 'ease 0.2s all',
	cursor: 'pointer',
	border: '1px solid',
	borderColor: 'transparent',

	'&:hover': {
		backgroundColor: 'transparent',
		color: '$primary',
		border: '1px solid',
		borderColor: '$primary',
	},

	variants: {
		outline: {
			true: {
				backgroundColor: 'transparent',
				color: '$primary',
				border: '1px solid',
				borderColor: '$primary',

				'&:hover': {
					backgroundColor: '$primary',
					color: '$white_light',
				},
			},
		},
		disabled: {
			true: {
				opacity: 0.5,
				pointerEvents: 'none',
			},
		},
	},
});

export { Btn };
