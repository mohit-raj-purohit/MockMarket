import {CSSProperties, FC, ReactNode} from 'react';

interface ReactChildrenProps {
	children: ReactNode;
	style?: CSSProperties;
}

export const TeaserCardWrapper: FC<ReactChildrenProps> = ({
	children,
	style,
}) => {
	return (
		<div
			className="h-64 rounded-md overflow-hidden bg-cover bg-center"
			style={style}
		>
			<div className="bg-gray-900 bg-opacity-70 flex items-center h-full">
				<div className="px-10 max-w-xl">{children}</div>
			</div>
		</div>
	);
};
