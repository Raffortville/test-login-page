import { IOutputHelper } from '../types/misc';

interface ICheckIsPasswordValid {
	value: string | undefined;
	options?: {
		min_length?: number;
		uppercase_min?: number;
		digit_min?: number;
	};
}

function checkUppercaseSum(value: string, uppercase_min: number): boolean {
	let uppercase_sum: number = 0;
	value.split('').forEach((char) => {
		if (char === char.toUpperCase() && isNaN(Number(char))) {
			uppercase_sum += 1;
		}
	});
	return uppercase_sum >= uppercase_min;
}

function checkDigitSum(value: string, digit_min: number): boolean {
	let digit_nb: number = 0;
	value.split('').forEach((char) => {
		if (!isNaN(Number(char))) {
			digit_nb += 1;
		}
	});
	return digit_nb >= digit_min;
}

const checkIsPasswordValid = ({
	value,
	options,
}: ICheckIsPasswordValid): IOutputHelper => {
	if (!value || value === '') {
		return { type: 'error', message: 'password cannot be empty' };
	}

	let response: IOutputHelper = {
		type: 'success',
	};

	if (options?.min_length) {
		const isValid = value.length >= options.min_length;
		response = {
			type: isValid ? 'success' : 'error',
			message: isValid
				? undefined
				: `at least ${options.min_length} characters is required`,
		};
	}

	if (options?.uppercase_min && response.type === 'success') {
		const isValid = checkUppercaseSum(value, options.uppercase_min);
		response = {
			type: isValid ? 'success' : 'error',
			message: isValid
				? undefined
				: `at least ${options.uppercase_min} uppercase characters is required`,
		};
	}

	if (options?.digit_min && response.type === 'success') {
		const isValid = checkDigitSum(value, options.digit_min);
		response = {
			type: isValid ? 'success' : 'error',
			message: isValid
				? undefined
				: `at least ${options.digit_min} number characters is required`,
		};
	}
	return response;
};

function checkIsEmailValid(email: string | undefined): IOutputHelper {
	if (!email) {
		return {
			type: 'error',
			message: 'email field is missing',
		};
	}
	const re = /\S+@\S+\.\S+/;
	const isValid = re.test(email);
	return {
		type: isValid ? 'success' : 'error',
		message: isValid ? undefined : 'email is not correct',
	};
}

export { checkIsPasswordValid, checkIsEmailValid };
