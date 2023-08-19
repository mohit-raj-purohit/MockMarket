import {useState, useEffect} from 'react';

type ColorScheme = 'light' | 'dark';

function usePreferredColorScheme(): ColorScheme {
	const [preferredColorScheme, setPreferredColorScheme] =
		useState<ColorScheme>(getPreferredColorScheme());

	useEffect(() => {
		const handleChange = (event: MediaQueryListEvent) => {
			setPreferredColorScheme(event.matches ? 'dark' : 'light');
		};

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', handleChange);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, []);

	return preferredColorScheme;
}

function getPreferredColorScheme(): ColorScheme {
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	return mediaQuery.matches ? 'theme-dark' : 'theme-light';
}

export default usePreferredColorScheme;
