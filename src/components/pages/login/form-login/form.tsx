import { AiOutlineMail } from 'react-icons/ai';
import { Textfield } from '../../../../ui/components/inputs/textfields';
import { styled } from '../../../../ui/config';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Button } from '../../../../ui/components/buttons';
import { Checkbox } from '../../../../ui/components/inputs/checkboxes';
import { Separator } from '../../../../ui/components/separators';
import { Text } from '../../../../ui/components/typos/texts';
import { ChangeEvent, useState } from 'react';
import { Alert } from '../../../../ui/components/alerts';
import { useAlert } from '../../../../ui/components/alerts/useAlert';
import { getFormErrors } from './form-helpers';

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

interface IValues {
	email: string | undefined;
	password: string | undefined;
}
export interface IErrors {
	email?: string | undefined;
	password?: string | undefined;
}
const initialValues: IValues = { email: undefined, password: undefined };

export const FormLoginPage = () => {
	const [values, setValues] = useState<IValues>(initialValues);
	const [errors, setErrors] = useState<IErrors | null>(null);
	const [isValid, setIsValid] = useState<boolean>(false);

	const { isPublish, triggerPublish } = useAlert();

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const { value, name, type } = e.target;
		setValues({ ...values, [name]: value });

		const errorsOnChange = getFormErrors(value, type);
		setErrors({ ...errors, ...errorsOnChange });
	};

	const handleSubmit = (): void => {
		if (
			values.email &&
			values.password &&
			(!errors || (!errors.email && !errors.password))
		) {
			setIsValid(true);
			setValues(initialValues);
			setErrors(null);
			triggerPublish();
			return;
		}

		const errMail = getFormErrors(values.email, 'email');
		const errPassword = getFormErrors(values.password, 'password');
		setErrors({ ...errMail, ...errPassword });

		setIsValid(false);
		triggerPublish();
	};

	return (
		<Container>
			<Textfield
				value={values.email ?? ''}
				name='email'
				type='email'
				onChange={handleChange}
				textError={errors?.email}
				label='Email'
				placeholder='johndoo@gmail.com'
				required
				autoComplete='email'
				leftIconElement={<AiOutlineMail />}
			/>
			<Textfield
				value={values.password ?? ''}
				name='password'
				type='password'
				onChange={handleChange}
				textError={errors?.password}
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
			<Button onClick={handleSubmit} css={{ button: { height: 22 } }}>
				Connection
			</Button>
			<Separator />
			<Row>
				<Text>Pas de compte ?</Text>
				<Text clickable color={'$primary'}>
					Créer un compte
				</Text>
			</Row>
			{isPublish && (
				<Alert
					type={isValid ? 'success' : 'danger'}
					message={
						isValid ? 'Connected with success !' : 'Fields contains errors'
					}
				/>
			)}
		</Container>
	);
};
