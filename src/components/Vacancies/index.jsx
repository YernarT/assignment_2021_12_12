import React, { useContext, useMemo } from 'react';

import { LanguageContext } from '../../App';

import { FaArrowRight } from 'react-icons/fa';

import { useCreation } from 'ahooks';

import { VacanciesContainer } from './style';

export default function Vacancies() {
	const dataList = useCreation(() => [
		{
			lang: 'ru',
			title: 'Новые вакансии',
			vacancies: [
				'Главный IOS разработчик',
				'Главный Backend разработчик',
				'Главный Frontend разработчик',
				'Associate Product manager',
				'Главный Full-stack разработчик',
				'Senior Product manager',
				'Senior Marketer',
				'Middle / Senior Product manager',
				'Junior / Middle Product Analyst',
			],
		},
		{
			lang: 'kz',
			title: 'Жаңа бос орындар',
			vacancies: [
				'Бас Frontend әзірлеуші',
				'Бас Backend әзірлеуші',
				'Бас IOS әзірлеуші',
				'Өнім талдаушысы',
			],
		},
		{
			lang: 'en',
			title: 'New vacancies',
			vacancies: [
				'Senior Backend Developer',
				'Senior IOS Developer',
				'Sernior Frontend Developer',
			],
		},
	]);

	const [lang] = useContext(LanguageContext);

	const currentData = useMemo(
		() => dataList.find(data => data.lang === lang),
		[lang, dataList],
	);

	return (
		<VacanciesContainer>
			<h1 className="title">{currentData.title}</h1>
			<ul className="vacancies">
				{currentData.vacancies.map((vacancie, idx) => (
					<li key={idx} className="vacancie">
						<div className="name">{vacancie}</div>
						<FaArrowRight />
					</li>
				))}
			</ul>
		</VacanciesContainer>
	);
}
