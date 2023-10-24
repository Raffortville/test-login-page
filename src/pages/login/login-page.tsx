import { FormLoginPage, HeadlinesLogin } from '../../components/pages/login';
import { Logo } from '../../ui/components/logos';
import { Separator } from '../../ui/components/separators';
import { Title } from '../../ui/components/typos/titles';
import { styled } from '../../ui/config';

export const LoginInPage = () => {
	const Container = styled('div', {
		minHeight: '100vh',
		minWidth: '100%',
		display: 'flex',
		flexDirection: 'column',

		'@sm': {
			flexDirection: 'initial',
		},
	});

	const SectionStart = styled('section', {
		width: '100%',
		padding: '16px 8px',
		backgroundColor: '$primary',

		'@md': {
			width: '615px',
		},

		'@xs': {
			padding: '32px 16px',
		},
	});

	const SectionEnd = styled('section', {
		width: '100%',
		flex: 'auto',
		backgroundColor: '$gray_light',
		padding: 32,
		boxShadow: 'inset 0px 1px 2px -1px #5903E5',

		'@sm': {
			boxShadow: 'inset 1px 0px 2px -1px #5903E5',
		},
	});

	const FormContainer = styled('div', {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 16,
		margin: '16px auto auto',

		'@sm': {
			width: '375px',
			margin: '64px auto auto',
		},
	});

	return (
		<Container>
			<SectionStart>
				<Logo width={175} />
				<HeadlinesLogin />
			</SectionStart>
			<SectionEnd>
				<FormContainer>
					<Title component='h1' color={'$primary'}>
						Se connecter
					</Title>
					<Separator />
					<FormLoginPage />
				</FormContainer>
			</SectionEnd>
		</Container>
	);
};
