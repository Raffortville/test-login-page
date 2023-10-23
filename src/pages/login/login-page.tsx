import { FormLoginPage, HeadlinesLogin } from '../../components/pages/login';
import Logo from '../../ui/components/logos/logo';
import Separator from '../../ui/components/separators/separator';
import Title from '../../ui/components/typos/titles/title';
import { styled } from '../../ui/config';

export const LoginInPage = () => {
	const Container = styled('div', {
		width: '100%',
		height: '100vh',
		display: 'flex',
	});

	const SectionStart = styled('section', {
		width: '505px',
		height: '100%',
		backgroundColor: '$primary',
		padding: '32px 16px',
	});

	const SectionEnd = styled('section', {
		height: '100%',
		flex: 'auto',
		backgroundColor: '$gray_light',
		padding: 32,
		boxShadow: 'inset 1px -1px 5px -1px rgba(66, 68, 90, 1)',
	});

	const FormContainer = styled('div', {
		width: '375px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 16,
		margin: '64px auto auto',
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
