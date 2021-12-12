import React, { useContext, useMemo } from 'react';

import { LanguageContext } from '../../App';

import { useCreation } from 'ahooks';

import {
	circleBackground,
	aitu,
	did,
	aitupay,
	suraqtar,
	dosmart,
	kassa24,
} from '../../assets/images';
import { ProductsContainer, CarouselContainer } from './style';

export default function Products() {
	const dataList = useCreation(() => [
		{
			lang: 'ru',
			products: [
				{
					image: aitu,
					text: 'Платформа для общения, развлечения и решения ежедневных задач',
				},
				{
					image: did,
					text: 'Безопасные и удобные инструменты идентификации для бизнеса и пользователей',
				},
				{
					image: aitupay,
					text: 'Мобильный кошелек для безопасных переводов и быстрой оплаты',
				},
				{
					image: suraqtar,
					text: 'Платформа для подачи официальных обращений в государственные органы',
				},
				{
					image: dosmart,
					text: 'Шоппинг ассистент для выгодных покупок',
				},
				{
					image: kassa24,
					text: 'Онлайн-кассы фискализации, доставка, онлайн-платежи и реклама',
				},
			],
		},
		{
			lang: 'kz',
			products: [
				{
					image: aitu,
					text: 'Қарым-қатынас жасауға, ойын-сауыққа және күнделікті міндеттерді шешуге арналған тұғырнама',
				},
				{
					image: did,
					text: 'Бизнес пен пайдаланушыларға арналған қауіпсіз әрі ыңғайлы сәйкестендіру құралдары',
				},
				{
					image: aitupay,
					text: 'Қауіпсіз аударымдар мен жылдам төлемдерге арналған мобильді әмиян',
				},
				{
					image: suraqtar,
					text: 'Мемлекеттік органдарға ресми өтініштер беруге арналған платформа',
				},
				{
					image: dosmart,
					text: 'Тиімді сатып алуға арналған шоппинг ассистент',
				},
				{
					image: kassa24,
					text: 'Төлемдерді қабылдау жөніндегі алғашқы қазақстандық сертификатталған сервис',
				},
			],
		},
		{
			lang: 'en',
			products: [
				{
					image: aitu,
					text: 'A platform for communication, entertainment and daily task solving',
				},
				{
					image: did,
					text: 'Safe and convenient identification tools for business and users',
				},
				{
					image: aitupay,
					text: 'A mobile wallet for secure transfers and instant payments',
				},
				{
					image: suraqtar,
					text: 'A platform for filing official appeals to government agencies',
				},
				{
					image: dosmart,
					text: 'A shopping assistant for best buys',
				},
				{
					image: kassa24,
					text: 'The first certified Kazakstani payment service',
				},
			],
		},
	]);

	const [lang] = useContext(LanguageContext);

	const currentProductsData = useMemo(
		() => dataList.find(data => data.lang === lang),
		[lang, dataList],
	);

	return (
		<ProductsContainer id="products">
			<img
				src={circleBackground}
				alt="cirle-background"
				className="cirle-background"
			/>

			<h1 className="title">Продукты</h1>
			<p className="text">2,6 миллиона пользователей уже выбрали нас</p>

			<Carousel currentProductsData={currentProductsData} />
		</ProductsContainer>
	);
}

function Carousel({ currentProductsData }) {
	return (
		<CarouselContainer>
			{currentProductsData.products.map((product, idx) => (
				<li key={idx} className="carouse-item">
					<img src={product.image} alt="carouse item" className="image" />

					<p className="text">{product.text}</p>
				</li>
			))}
		</CarouselContainer>
	);
}
