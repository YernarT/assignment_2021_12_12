import React, { useContext, useMemo } from 'react';

import { LanguageContext } from '../../App';

import { useCreation } from 'ahooks';

import { ChangeWorldContainer } from './style';

export default function ChangeWorld() {
	const dataList = useCreation(() => [
		{
			lang: 'ru',
			title: 'Начни менять мир вместе с нами',
			text: `BTS Digital - команда талантливых, смелых и ярких людей. Мы работаем в атмосфере, которая располагает к созиданию и творчеству. Вместе нам легко достигать высоких результатов.`,
		},
		{
			lang: 'kz',
			title: 'Әлемді бізбен бірге өзгерте баста',
			text: `BTS Digital - талантты, батыл әрі жарқын адамдар командасы. Біз жасампаздық пен шығармашылыққа баурайтын атмосферада жұмыс істейміз. Бірге бізге жоғары нәтижеге қол жеткізу оңай.`,
		},
		{
			lang: 'en',
			title: 'Start changing the world with us',
			text: `BTS Digital is a team of talented, courageous and outstanding specialists. Our teamwork environment inspires creativity and new ideas. Together we can easily reach an all - time high.`,
		},
	]);

	const [lang] = useContext(LanguageContext);

	const currentData = useMemo(
		() => dataList.find(data => data.lang === lang),
		[lang, dataList],
	);

	return (
		<ChangeWorldContainer>
			<h1 className="title">{currentData.title}</h1>
			<p className="text">{currentData.text}</p>
		</ChangeWorldContainer>
	);
}
