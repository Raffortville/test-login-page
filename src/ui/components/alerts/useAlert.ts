import { useCallback, useEffect, useState } from 'react';

interface IUseAlertOutput {
	isPublish: boolean;
	triggerPublish: () => void;
}

export const useAlert = (timer?: number): IUseAlertOutput => {
	const [isPublish, setIsPublish] = useState<boolean>(false);

	const triggerPublish = useCallback(() => {
		setIsPublish(true);
	}, []);

	useEffect(() => {
		if (isPublish) {
			const interval = setInterval(() => {
				setIsPublish(false);
			}, timer ?? 3000);

			return () => clearInterval(interval);
		}
	}, [isPublish, timer]);

	return { isPublish, triggerPublish };
};
