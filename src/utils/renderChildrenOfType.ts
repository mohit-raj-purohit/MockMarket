import React from 'react';

export const renderChildrenOfType = (
	children: React.ReactNode,
	type: unknown
) => {
	return React.Children.map(children, (child) => {
		if (React.isValidElement(child) && child.type === type) {
			return React.cloneElement(child);
		}
		return null;
	});
};
