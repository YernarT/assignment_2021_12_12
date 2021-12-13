import React, { useEffect, useContext } from 'react';

import { LanguageContext } from '../../App';

import {
	Navbar,
	Intro,
	Products,
	Team,
	ChangeWorld,
	Vacancies,
	Contact,
} from '../../components';

import { HomePageContainer } from './style';

export default function HomePage() {
	const [lang] = useContext(LanguageContext);

	// set <title> Title </title>
	useEffect(() => {
		switch (lang) {
			case 'ru':
				document.title = 'Главная';
				break;
			case 'kz':
				document.title = 'Басты бет';
				break;
			case 'en':
				document.title = 'Main Page';
				break;
			default:
				document.title = 'Главная';
				break;
		}
	}, [lang]);

	return (
		<HomePageContainer>
			<Navbar />
			<Intro />
			<Products />
			<Team />
			<ChangeWorld />
			<Vacancies />
			<Contact />
		</HomePageContainer>
	);
}
