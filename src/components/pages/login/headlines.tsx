import Title from '../../../ui/components/typos/titles/title';
import { styled } from '../../../ui/config';

const Container = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 16,
	marginTop: '174px',
});

export const HeadlinesLogin = () => {
	return (
		<Container>
			<Title
				component='h1'
				color={'$white'}
				css={{ title: { textAlign: 'center' } }}>
				Biologie, médecine et IA
			</Title>
			<Title
				component='h4'
				color={'$white'}
				css={{
					title: {
						textAlign: 'center',
						fontWeight: 'lighter',
						width: 275,
					},
				}}>
				C’est à la jonction de ces 3 mondes que l’aventure UMMON Healthtech est
				née.
			</Title>
		</Container>
	);
};
