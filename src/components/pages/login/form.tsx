import { AiOutlineMail } from 'react-icons/ai';
import Textfield from '../../../ui/components/inputs/textfields/textfield';
import { styled } from '../../../ui/config';
import { RiLockPasswordLine } from 'react-icons/ri';
import Button from '../../../ui/components/buttons/button';
import Checkbox from '../../../ui/components/inputs/checkboxes/checkbox';
import Separator from '../../../ui/components/separators/separator';
import Text from '../../../ui/components/typos/texts/text';

const Container = styled('div', {
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 32,
	marginTop: 32,
});

const Caption = styled('div', {
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	fontSize: 'small',
});

const Row = styled('div', {
	display: 'flex',
	gap: 4,
	fontSize: 'small',
});

export const FormLoginPage = () => {
	return (
		<Container>
			<Textfield
				type='email'
				label='Email'
				placeholder='johndoo@gmail.com'
				required
				leftIconElement={<AiOutlineMail />}
			/>
			<Textfield
				type='password'
				label='Mot de passe'
				placeholder='***********'
				required
				leftIconElement={<RiLockPasswordLine />}
			/>
			<Caption>
				<Checkbox label='Se souvenir de moi ?' />
				<Text color={'$primary'} clickable>
					mot de passe oublié ?
				</Text>
			</Caption>
			<Button css={{ button: { height: 22 } }}>Connection</Button>
			<Separator />
			<Row>
				<Text>Pas de compte ?</Text>
				<Text clickable color={'$primary'}>
					Créer un compte
				</Text>
			</Row>
		</Container>
	);
};
