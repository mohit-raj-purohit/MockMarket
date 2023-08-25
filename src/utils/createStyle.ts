import React from 'react';

export type CSSProperties = {
	[key: string]: string | number;
};

export const createStyle = (styles: CSSProperties[]): React.CSSProperties => {
	const styleObject: React.CSSProperties = {};

	styles.forEach((style) => {
		Object.assign(styleObject, style);
	});

	return styleObject;
};
