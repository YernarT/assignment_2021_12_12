import React, { createContext, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { HomePage } from './pages';

import { configResponsive, useUpdateEffect } from 'ahooks';

import theme from './assets/style/theme';
import './assets/style/customize.css';

// responsive breakpoints
configResponsive({
	small: 0,
	middle: 585,
	large: 992,
	big: 1200,
});

// global state: language code
export const LanguageContext = createContext();

export default function App() {
	const [lang, setLang] = useState('ru');

	// Ignore the first render, only execute when the dependency is updated
	useUpdateEffect(
		() => document.documentElement.setAttribute('lang', lang),
		[lang],
	);

	return (
		<ThemeProvider theme={theme}>
			<LanguageContext.Provider value={[lang, setLang]}>
				<HomePage />
			</LanguageContext.Provider>
		</ThemeProvider>
	);
}
