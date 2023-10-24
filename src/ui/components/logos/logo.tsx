import { styled } from '../../config';

const Image = styled('img', {
	objectFit: 'contain',
});

interface ILogoProps {
	width?: string | number | undefined;
	height?: string | number | undefined;
}

export const Logo: React.FC<ILogoProps> = ({ width, height }) => {
	return (
		<Image
			width={width}
			height={height}
			src='https://www.ummonhealthtech.com/wp-content/uploads/2022/07/Logo-Ummon-HealthTech-V2-06.png'
		/>
	);
};
