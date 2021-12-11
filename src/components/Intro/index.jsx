import React, { useContext, useMemo } from 'react';

import { LanguageContext } from '../../App';

import { FaArrowRight } from 'react-icons/fa';

import { useCreation } from 'ahooks';

import { pix } from '../../assets/images';
import { IntroContainer } from './style';

export default function Intro() {
	const dataList = useCreation(() => [
		{
			lang: 'ru',
			title: 'Мы создаем цифровые решения, меняющие жизнь людей к лучшему',
			text1: `Компания BTS Digital создает цифровые продукты и сервисы, которые
        помогают людям в повседневной жизни.`,
			text2: `В экосистеме Aitu представлены проекты для жизни общества, ведения
        бизнеса и госуправления. Искусственный интеллект и Big Data - то, с
        чем в BTSD работают каждый день. Разработки компании актуальны на
        мировом рынке.`,
			text3: 'Подать резюме',
		},
		{
			lang: 'kz',
			title:
				'Біз адамдардың өмірін жақсы арнаға бұратын цифрлық шешімдер құрамыз.',
			text1: `BTS Digital компаниясы адамдарға күнделікті өмірде көмектесетін цифрлық өнімдер мен сервистерді жасайды. Aitu экожүйесінде қоғам өміріне, бизнес жүргізуге және мемлекеттік басқаруға арналған жобалар ұсынылған. Жасанды интеллект пен Big Data - бұл BTSD күн сайын жұмыс істейтін нәрселер.`,
			text2: `Компанияның әзірлемелері әлемдік нарықта өзекті.`,
			text3: 'Түйіндеме беру',
		},
		{
			lang: 'en',
			title: 'We empower people through life-changing digital solutions.',
			text1: `Aitu ecosystem includes projects for the life of society, business and public administration. In BTSD, we work with the Artificial Intelligence and Big Data every day.`,
			text2: `The Company’s developments are relevant for the global market.`,
			text3: 'Send your CV',
		},
	]);

	const [lang] = useContext(LanguageContext);

	const currentData = useMemo(
		() => dataList.find(data => data.lang === lang),
		[lang, dataList],
	);

	return (
		<IntroContainer>
			<article className="desc">
				<h1 className="title">{currentData.title}</h1>
				<p className="text">{currentData.text1}</p>
				<p className="text">{currentData.text2}</p>
				<div className="intro-btn-wrap">
					<a href="#null">
						{currentData.text3}
						<FaArrowRight className="right-arrow" />
					</a>
				</div>
			</article>
			<img src={pix} alt="pix" className="pix" />
		</IntroContainer>
	);
}
