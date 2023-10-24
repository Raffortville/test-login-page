import { useMemo } from 'react';
import { CgDanger } from 'react-icons/cg';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Text from '../typos/texts/text';
import { AlertBox } from './alert-styles';

type AlertType = 'danger' | 'success';

interface IAlertProps {
	type: AlertType;
	message: string;
}

export const Alert: React.FC<IAlertProps> = ({ type, message }) => {
	const iconElement: JSX.Element | null = useMemo(() => {
		switch (type) {
			case 'danger':
				return <CgDanger />;

			case 'success':
				return <AiOutlineCheckCircle />;

			default:
				return null;
		}
	}, [type]);

	return (
		<AlertBox
			onMove={true}
			danger={type === 'danger'}
			success={type === 'success'}>
			{iconElement}
			<Text component='span' css={{ text: { paddingBottom: 3 } }}>
				{message}
			</Text>
		</AlertBox>
	);
};
