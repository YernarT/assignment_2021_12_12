import React, { useContext } from 'react';

import { LanguageContext } from '../../App';

import { useTitle } from 'ahooks';

export default function HomePage() {
	// set <title> Title </title>
	useTitle('Главная');

	const [lang, setLang] = useContext(LanguageContext);
	// lang options: ru, en, kz

	return <div>Home Page </div>;
}
