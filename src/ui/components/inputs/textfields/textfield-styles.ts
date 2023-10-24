import { styled } from '../../../config';

const Container = styled('div', {
	width: '100%',
	minWidth: 204,
	fontSize: 'small',
});

const Caption = styled('div', {
	height: 20,
	display: 'flex',
	gap: 8,
	color: '$primary',
	fontSize: 'x-small',
});

const Label = styled('label', {
	fontWeight: 'bolder',
	color: '$black_light',
	fontSize: 'small',
});

const InputContent = styled('div', {
	height: 40,
	display: 'flex',
	alignItems: 'center',
	backgroundColor: '$white',
	borderRadius: '3px',
	border: '1px solid transparent',
	transition: 'ease 0.2s all',

	'&:hover': {
		boxShadow: '$outset_light',
	},

	variants: {
		onFocus: {
			true: {
				borderColor: '$primary',
			},
		},
	},
});

const LeftContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	paddingLeft: 8,
	color: '$primary_light',
});

const Input = styled('input', {
	all: 'unset',
	height: '100%',
	padding: '0 16px',

	'&::placeholder': {
		fontStyle: 'oblique',
		letterSpacing: '0.5px',
		opacity: 0.6,
	},
});

export { Container, Caption, Label, InputContent, Input, LeftContainer };
