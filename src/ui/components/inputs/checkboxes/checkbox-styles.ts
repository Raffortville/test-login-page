import { styled } from '../../../config';

const Container = styled('div', {
	display: 'flex',
	alignItems: 'baseline',
	gap: 6,
});

const Input = styled('input', {
	appearance: 'none',
	width: '1.15em',
	height: '1.15em',
	display: 'grid',
	placeContent: 'center',
	border: '1px solid',
	borderColor: '$primary',
	borderRadius: '3px',
	backgroundColor: 'transparent',
	cursor: 'pointer',

	'&::before': {
		content: '',
		width: '0.65em',
		height: '0.65em',
		clipPath: 'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)',
		backgroundColor: '$primary',
		transform: 'scale(0)',
		transformOrigin: 'bottom left',
		transition: '120ms transform ease-in-out',
	},

	'&:checked::before': {
		transform: 'scale(1)',
	},
});

const Label = styled('label', {
	fontSize: 'small',
});

const Required = styled('div', {
	alignSelf: 'start',
	fontSize: 'xx-small',
	color: '$primary',
});

export { Container, Label, Required, Input };
