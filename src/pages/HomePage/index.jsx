import React, { useContext } from 'react';

import { LanguageContext } from '../../App';
import { Navbar } from '../../components';

import { useTitle } from 'ahooks';

import { HomePageContainer } from './style';

export default function HomePage() {
	// set <title> Title </title>
	useTitle('Главная');

	const [lang, setLang] = useContext(LanguageContext);
	// lang options: ru, en, kz

	return (
		<HomePageContainer>
			<Navbar />
			{/* <Intro /> */}
		</HomePageContainer>
	);
}
