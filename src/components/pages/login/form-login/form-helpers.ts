import { HTMLInputTypeAttribute } from 'react';
import { checkIsEmailValid, checkIsPasswordValid } from '../../../../utils';
import { IErrors } from './form';

const getFormErrors = (
	value: string | undefined,
	type: HTMLInputTypeAttribute
): IErrors | null => {
	let errors: IErrors | null = null;
	if (type === 'password') {
		const { type, message } = checkIsPasswordValid({
			value,
			options: { min_length: 7, uppercase_min: 1 },
		});
		errors = {
			...(errors ?? {}),
			password: type === 'error' ? message : undefined,
		};
	}

	if (type === 'email') {
		const { type, message } = checkIsEmailValid(value);
		errors = {
			...(errors ?? {}),
			email: type === 'error' ? message : undefined,
		};
	}
	return errors;
};

export { getFormErrors };
