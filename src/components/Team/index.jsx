import React, { useContext, useMemo, useState } from 'react';

import { LanguageContext } from '../../App';

import { useCreation, useInterval } from 'ahooks';

import { team1, team3, team4, team5, team7, team9 } from '../../assets/images';
import { TeamContainer } from './style';

export default function Team() {
	const dataList = useCreation(() => [
		{
			lang: 'ru',
			infoList: [
				{
					image: team1,
					textList: [
						`У нас дружная атмосфера внутри команды, теплые взаимоотношения и обстановка, в которой хочется работать.`,
						`В нашей команде`,
						`250+`,
						`профессионалов со всего Евразийского региона`,
					],
				},
				{
					image: team3,
					textList: [
						`Асель Габдуллина`,
						`Junior Scrum Master в Marketplace`,
						`Мир стремительно меняется, компании необходима гибкость, поэтому Scrum важен для разработки инновационных продуктов.`,
						`Миссия agile чаптера в нашей компании - “Мы - Change-лидеры, внедряя гибкие техники, создаем команды мотивированных профессионалов и фокусируем их на ценность для пользователя“. Свою работу я воспринимаю как определенный вызов, ведь хорошему скрам мастеру необходимо знать не только методологию, но и развивать в себе коммуникативные навыки, организаторские способности, лидерские качества, умение фасилитировать и многое другое.`,
						`Я благодарна за то, что компания поощряет стремление к самообразованию и развитию необходимых навыков для профессионального роста.`,
					],
				},
				{
					image: team4,
					textList: [
						`Дмитрий Ковтун`,
						`Инженер-программист`,
						`Привет! Меня зовут Дима. До BTS Digital работал в крупной компании. В моих правилах трудиться на благо продукта, поэтому работал даже тогда, когда и не должен был, но мой энтузиазм не был оценен. Один из сотрудников BTSD пригласил поработать в проекте. Мне понравилось, по сей день я здесь.`,
						`Ценю , что в BTSD можно развиваться в разных направлениях - вне основной должности. Я пришел сюда андроид разработчиком, получилось стать бекендером и немного фронтендером. Конечно, был бекграунд, но он был на старых технологиях. В этой компании я понял, что надо идти в ногу с технологиями, научился правильно их выбирать.`,
						`Думаю, основная ценность компании - люди. У каждого есть ценный опыт и знания, которые можно перенять, применить в своей работе.`,
					],
				},
				{
					image: team5,
					textList: [
						`Дарья Гришко`,
						`Product manager в сфере социальных продуктов.`,
						`В сфере IT работаю 8 лет. Мне нравится видеть весь процесс и собирать из разных задач готовое, работающее решение. Сейчас мы занимаемся социальными продуктами - для улучшения жизни людей. Благотворительность, информационные сервисы, некоторые проекты делаем вместе с гос.сектором. Фокус на удобстве для людей. Такая работа очень вдохновляет.`,
						`Каждый день понимаешь, что от тебя зависит, получат ли люди помощь, решатся ли их проблемы. Стараемся как можно больше и чаще говорить с пользователями, наверное, это любимая часть моей работы. Общаясь, понимаешь для кого создаешь продукты и любишь своих пользователей еще больше!`,
						`Мне очень повезло с командой, потому что каждый разделяет миссию - улучшение жизни людей и фокус на удобстве пользователей.`,
					],
				},
				{
					image: team7,
					textList: [
						`Ислам Талапбаев`,
						`Product manager Dosmart`,
						`Привет! Я работаю с супер умной, открытой к самым дерзким вызовам командой! Наша цель - строить прозрачные инструменты, помогающие нашим гражданам совершать самые выгодные покупки.`,
						`В нашей команде мы ценим самостоятельность и лидерство. Каждый член команды полностью управляет своим временем, своими задачами и максимально заряжен нашей общей целью.`,
					],
				},
				{
					image: team9,
					textList: [
						`Полина Мыльникова`,
						`iOS-разработчик в Aitu`,
						`Мобильная разработка — это тонкая грань между реализацией красивого дизайна, написанием простого и понятного кода и максимально эффективным расходованием ресурсов системы.`,
						`Почему iOS? Мне нравится подход к пользователю — максимально простой дизайн и продуманность мельчайших деталей.`,
						`Ничего лишнего, все должно быть очевидно и просто.`,
					],
				},
			],
		},
		{
			lang: 'kz',
			infoList: [
				{
					image: team1,
					textList: [
						`Бізде командамыздың ішінде достық ахуал, жылы шырайлы қарым-қатынас және жұмыс істегің келетін жағдай қалыптасқан`,
						`Біздің командамызда`,
						`250+`,
						`бүкіл Еуразия өңірінен маман бар`,
					],
				},
				{
					image: team3,
					textList: [
						`Әсел Ғабдуллина`,
						`Junior Scrum Master in Marketplace`,
						`Әлем тез өзгеруде, компанияға икемділік қажет, сондықтан, Scrum инновациялық өнімдерді әзірлеу үшін маңызды. Біздің компаниямыздағы agile чаптер миссиясы - “Біз - Change-көшбасшылармыз, икемді техникаларды енгізе отырып, ынталы кәсіпқойлар командаларын құрамыз әрі оларды пайдаланушы үшін құнды болуға бағыттаймыз“. Өз жұмысымды белгілі бір сын-тегеурін ретінде қабылдаймын, өйткені, жақсы скрам шеберге әдіснаманы біліп қана қоймай, сонымен қатар, коммуникативтік дағдыларды, ұйымдастыру қабілетін, көшбасшылық қасиеттерді, фасилитациялау қабілетін және көптеген басқа да қасиеттерді дамыту қажет.`,
						`Компанияның өздігінен білім алуға және кәсіби өсу үшін қажетті дағдыларды дамытуға деген ұмтылысты көтермелейтіні үшін алғыс білдіремін.`,
					],
				},
				{
					image: team4,
					textList: [
						`Дмитрий Ковтун`,
						`Инженер-бағдарламашы`,
						`Сәлем! Менің атым Дима. BTS Digital-ға дейін ірі компанияда жұмыс істедім. Өнімнің игілігі үшін жұмыс істеу менің қағидаларыма сай келеді, сондықтан, тіпті бұл қажет болмаған кезде де жұмыс істедім, бірақ менің құлшынысым бағаланбады. BTSD қызметкерлерінің бірі мені жобада жұмыс істеуге шақырды. Маған ұнады, осы күнге дейін мен осындамын.`,
						`BTSD-де негізгі лауазымнан тыс әртүрлі бағыттарда дамуға болатынын бағалаймын. Мен мұнда андроид әзірлеуші ретінде келдім, бекендер және аздап фронтендер бола алдым. Әрине, бекграунд болды, бірақ ол ескі технологияларға негізделген еді. Осы компанияда технологиялардан қалыспай, қатар жүру керек екенін түсіндім, оларды дұрыс таңдауды үйрендім.`,
						`Компанияның басты құндылығы адамдар деп ойлаймын. Әркімнің құнды тәжірибесі мен білімі бар, оны қабылдап алып, өз жұмысыңда қолдануға болады.`,
					],
				},
				{
					image: team5,
					textList: [
						`Дарья Гришко`,
						`Әлеуметтік өнімдер саласындағы product manager.`,
						`IT саласында 8 жыл жұмыс істеп келемін. Бүкіл процесті көріп, әртүрлі міндеттерден дайын, жұмыс істейтін шешім жинағанды ұнатамын. Қазір біз адамдардың өмірін жақсартуға арналған әлеуметтік өнімдермен айналысып жатырмыз. Қайырымдылық, ақпараттық сервистер, кейбір жобаларды мемлекеттік сектормен бірге жасаймыз. Адамдар үшін ыңғайлы болуына баса назар аударамыз. Мұндай жұмыс керемет шабыт береді. Күн сайын адамдардың көмек алатыны-алмайтыны, олардың проблемаларының шешілетіні-шешілмейтіні өзіңе байланысты екенін түсінесің. Пайдаланушылармен мүмкіндігінше көбірек әрі жиірек сөйлесуге тырысамыз, бәлкім, бұл жұмысымның өзім жақсы көретін бөлігі шығар. Адамдармен қарым-қатынас жасай келе, өнімдерді кімдер үшін жасайтыныңды түсінесің және пайдаланушыларыңды одан да қатты ұната бастайсың! Командама қатысты жолым болды, өйткені, әркім адамдардың өмірін жақсарту және пайдаланушылар үшін ыңғайлы болуға баса назар аудару миссиясын қуаттайды.`,
					],
				},
				{
					image: team7,
					textList: [
						`Ислам Талапбаев`,
						`Product manager Dosmart`,
						`Сәлем! Мен өте ақылды жандардан тұратын, ең батыл сындардан өтуге дайын командамен жұмыс істеймін. Біздің мақсатымыз – азаматтарымызға мейлінше тиімді сауда жасауға көмектесетін айқын құралдар қалыптастыру.`,
						`Өз арамызда біз дербестік пен көшбасшылықты бағалаймыз. Команданың әрбір мүшесі  уақыты мен міндеттерін толықтай өзі басқарып, ортақ мақсатымызға барынша ден қояды.`,
					],
				},
				{
					image: team9,
					textList: [
						`Полина Мыльникова`,
						`Aitu-да iOS-әзірлеуші`,
						`Мобильді әзірлеме – бұл әдемі дизайнды іске асыру, қарапайым әрі түсінікті кодты жазу мен жүйенің ресурстарын тиімді жұмсау арасындағы нәзік шекара.`,
						`Неліктен iOS? Маған пайдаланушыға деген көзқарас – барынша қарапайым дизайн мен ең ұсақ бөлшектердің ойластырылғаны ұнайды.`,
						`Артық ештеңесі жоқ, бәрі айқын әрі қарапайым болуға тиіс.`,
					],
				},
			],
		},
		{
			lang: 'en',
			infoList: [
				{
					image: team1,
					textList: [
						`Our team is notable for caregiving relationships and friendly environment encouraging to work.`,
						`Our team encompasses`,
						`250+`,
						`professionals from the Eurasian region`,
					],
				},
				{
					image: team3,
					textList: [
						`Assel Gabdullina`,
						`Junior Scrum Master в Marketplace`,
						`The world is changing rapidly and requires the company to be agile, that is why Scrum is important for developing innovative products. The mission of the agile-chapter in our company – “We are change-leaders who create teams of motivated professionals and focus them on values for users by introducing flexible technologies”. I perceive my work as a challenge, since a good Scrum master not only needs to know the methodology, but also to develop communication, organizational, leadership, facilitation and other skills.`,
						`I am grateful the company encourages commitment to self-education and development of necessary skills for professional growth.`,
					],
				},
				{
					image: team4,
					textList: [
						`Dmitriy Kovtun`,
						`Software Engineer`,
						`Hi everyone! I’m Dmitriy. Before BTS Digital, I had been working for a large company. My principle is to work for the product’s benefit, so I used to work even when I didn’t have to. However, my enthusiasm was not appreciated. One of BTSD employees invited me to work on the project. I liked it, so I am still working for this company.`,
						`I appreciate that BTSD gives an opportunity to develop in various spheres, beyond the main role. I came to the company as an android-developer and managed to become a backend-developer and a little bit of a frontend-developer. Of course, I had a background, but it was based on old technologies. In this company, I realized the need of keeping up withtechnologies and learned to select them correctly.`,
						`I believe that people are the company’s main value. Everyone has valuable experience and knowledge that may be adopted and used in work.`,
					],
				},
				{
					image: team5,
					textList: [
						`Darya Grishko`,
						`Product manager in the social product sector`,
						`I have been working in the IT sector for 8 years. I like seeing the whole process and creating a finished and operational solution from various tasks. Now we are working upon social products aimed to improve people’s lives. This includes charity, informational services. Some projects are implemented in cooperation with the public sector. We focus on the convenience for people. This work is highly inspiring!`,
						`Every day you understand that it depends on you whether people will receive help, whether their problems will be solved. We try to communicate with users as much as possible, and this is probably the most favorite part of my work. While communicating, you understand who will use your products products and love your users even more!`,
						`I am fortunate in working with this team, as everyone shares our mission, which is improving people’s live and focusing on the convenience for users.`,
					],
				},
				{
					image: team7,
					textList: [
						`Islam Talapbayev`,
						`Product manager Dosmart`,
						`Hi there! I work with a super smart team open to the most daring challenges! Our goal is to build transparency in E‑commerce, using tools to help our citizens make the smartest purchases.`,
						`In our team, we value ownership and leadership. Each team member is in complete control of his or her own time, tasks and is fully dedicated to a common goal.`,
					],
				},
				{
					image: team9,
					textList: [
						`Polina Mylnikova`,
						`iOS-devleoper in Aitu`,
						`Mobile development is a fine line between implementing a beautiful design, writing a simple and understandable code, and using the system resources as efficiently as possible.`,
						`Why choosing iOS? I like the approach to users. It is the simplest design and rationality in the smallest details.`,
						`Nothing is in excess, everything should be clear and simple.`,
					],
				},
			],
		},
	]);

	const [lang] = useContext(LanguageContext);

	const currentData = useMemo(
		() => dataList.find(data => data.lang === lang),
		[lang, dataList],
	);

	const [activeIdx, setActiveIdx] = useState(0);

	useInterval(() => {
		if (activeIdx !== currentData.infoList.length - 1) {
			setActiveIdx(activeIdx + 1);
		} else {
			setActiveIdx(0);
		}
	}, 2500);

	return (
		<TeamContainer>
			<div className="teams-wrap">
				<ul className="teams">
					{currentData.infoList.map((info, idx) => (
						<li
							key={idx}
							className={`team ${idx === activeIdx ? 'team--active' : ''}`}>
							<div className="info">
								<h1 className="title">
									{lang === 'ru' || lang === 'kz' ? 'Команда' : 'Team'}
								</h1>
								{info.textList.map((text, idx) => (
									<p key={idx} className="text">
										{text}
									</p>
								))}
							</div>
							<img src={info.image} alt="team" className="image" />
						</li>
					))}
				</ul>
			</div>
		</TeamContainer>
	);
}
