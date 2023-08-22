import React from 'react';

interface ImageProps {
	className?: string;
	src: string;
	images?: {
		small?: string;
		medium?: string;
		large?: string;
		xlarge?: string;
	};
	alt?: string;
	onLoad?: () => void;
	onError?: () => void;
}

const Image: React.FC<ImageProps> = ({
	className,
	src,
	images,
	alt = '',
	onLoad,
	onError,
}) => {
	const handleLoad = () => {
		if (onLoad) {
			onLoad();
		}
	};

	const handleError = () => {
		if (onError) {
			onError();
		}
	};

	return (
		<picture className="w-full h-full flex items-center">
			{images?.small && (
				<source media="(max-width: 767px)" srcSet={images.small} />
			)}
			{images?.medium && (
				<source media="(max-width: 1023px)" srcSet={images.medium} />
			)}
			{images?.large && (
				<source media="(max-width: 1439px)" srcSet={images.large} />
			)}
			{images?.xlarge && (
				<source media="(min-width: 1440px)" srcSet={images.xlarge} />
			)}
			<img
				src={src}
				alt={alt}
				onLoad={handleLoad}
				onError={handleError}
				className={className || ''}
			/>
		</picture>
	);
};

export default Image;
