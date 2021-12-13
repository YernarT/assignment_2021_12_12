import React, { useContext, useMemo } from 'react';

import { LanguageContext } from '../../App';

import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

import { useCreation } from 'ahooks';

import { map } from '../../assets/images';
import { ContactContainer } from './style';

export default function Contact() {
	// languages to switch
	const languages = useCreation(() => ['en', 'ru', 'kz'], []);

	const dataList = useCreation(() => [
		{
			lang: 'ru',
			title: 'Контакты',
			textList: [
				`г. Нур-Султан,`,
				`пр. Кошкарбаева 1/4,`,
				`БЦ DownTown, блок Dubai`,
			],
			text2: 'Политика конфиденциальности',
		},
		{
			lang: 'kz',
			title: 'Байланыстар',
			textList: [
				`Нұр-Сұлтан қаласы,`,
				`Қошқарбаев даңғылы 1/4`,
				`DownTown БО, Dubai блогы`,
			],
			text2: 'Құпиялылық саясаты',
		},
		{
			lang: 'en',
			title: 'Contact us',
			textList: [
				`“DownTown” BC, “Dubai”block,`,
				`Qoshqarbayev Avenue 1/4`,
				`Nur-Sultan`,
			],
			text2: 'Privacy policy',
		},
	]);

	const [lang, setLang] = useContext(LanguageContext);

	const currentData = useMemo(
		() => dataList.find(data => data.lang === lang),
		[lang, dataList],
	);

	return (
		<ContactContainer>
			<div className="wrapper">
				<div className="contacts">
					<div className="left">
						<h1 className="title">{currentData.title}</h1>
						{currentData.textList.map((text, idx) => (
							<p key={idx} className="text">
								{text}
							</p>
						))}
						<p className="text text2">hello@btsdigital.kz</p>
					</div>
					<img src={map} alt="map" className="right" />
				</div>
				<div className="other">
					<p className="text">{currentData.text2}</p>

					<div className="social">
						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg">
							<circle cx="16" cy="16" r="16" fill="#2B2B2B"></circle>
							<path
								d="M11.5275 8.73913C11.5275 9.69983 10.7413 10.4783 9.77083 10.4783C8.80042 10.4783 8.01417 9.69983 8.01417 8.73913C8.01417 7.77913 8.80042 7 9.77083 7C10.7413 7 11.5275 7.77913 11.5275 8.73913ZM11.5417 11.8696H8V23H11.5417V11.8696ZM17.1956 11.8696H13.6766V23H17.1963V17.1572C17.1963 13.9085 21.4668 13.6428 21.4668 17.1572V23H25V15.9523C25 10.4706 18.6803 10.6703 17.1956 13.3687V11.8696Z"
								fill="currentColor"></path>
						</svg>

						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg">
							<circle cx="16" cy="16" r="16" fill="#2B2B2B"></circle>
							<path
								d="M19.6234 7.00375L17.2249 7C14.5302 7 12.7888 8.73869 12.7888 11.4298V13.4722H10.3771C10.1688 13.4722 10 13.6366 10 13.8394V16.7987C10 17.0015 10.1689 17.1657 10.3771 17.1657H12.7888V24.6328C12.7888 24.8356 12.9575 24.9998 13.1659 24.9998H16.3124C16.5208 24.9998 16.6896 24.8354 16.6896 24.6328V17.1657H19.5093C19.7177 17.1657 19.8865 17.0015 19.8865 16.7987L19.8876 13.8394C19.8876 13.742 19.8478 13.6488 19.7772 13.5799C19.7066 13.511 19.6103 13.4722 19.5103 13.4722H16.6896V11.7408C16.6896 10.9086 16.8933 10.4862 18.0073 10.4862L19.623 10.4856C19.8312 10.4856 20 10.3212 20 10.1186V7.37077C20 7.16835 19.8314 7.00412 19.6234 7.00375Z"
								fill="currentColor"></path>
						</svg>

						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg">
							<circle cx="16" cy="16" r="16" fill="#2B2B2B"></circle>
							<path
								d="M20.0325 7H11.9672C9.22831 7 7 9.22841 7 11.9673V20.0327C7 22.7717 9.22831 25 11.9672 25H20.0325C22.7717 25 25 22.7716 25 20.0327V11.9673C25.0001 9.22841 22.7717 7 20.0325 7ZM23.4031 20.0327C23.4031 21.8911 21.8911 23.403 20.0327 23.403H11.9672C10.1089 23.4031 8.59705 21.8911 8.59705 20.0327V11.9673C8.59705 10.109 10.1089 8.59705 11.9672 8.59705H20.0325C21.891 8.59705 23.403 10.109 23.403 11.9673V20.0327H23.4031Z"
								fill="currentColor"></path>
							<path
								d="M16 11.3633C13.4424 11.3633 11.3618 13.4439 11.3618 16.0014C11.3618 18.5588 13.4424 20.6394 16 20.6394C18.5575 20.6394 20.6381 18.5588 20.6381 16.0014C20.6381 13.4439 18.5575 11.3633 16 11.3633ZM16 19.0422C14.3232 19.0422 12.9589 17.6781 12.9589 16.0013C12.9589 14.3244 14.3231 12.9602 16 12.9602C17.6769 12.9602 19.0411 14.3244 19.0411 16.0013C19.0411 17.6781 17.6768 19.0422 16 19.0422Z"
								fill="currentColor"></path>
							<path
								d="M20.8328 10.0078C20.5251 10.0078 20.2228 10.1324 20.0055 10.3506C19.7871 10.5678 19.6616 10.8702 19.6616 11.179C19.6616 11.4868 19.7873 11.7891 20.0055 12.0073C20.2227 12.2245 20.5251 12.3501 20.8328 12.3501C21.1416 12.3501 21.4429 12.2245 21.6611 12.0073C21.8794 11.7891 22.004 11.4867 22.004 11.179C22.004 10.8702 21.8794 10.5678 21.6611 10.3506C21.4439 10.1324 21.1416 10.0078 20.8328 10.0078Z"
								fill="currentColor"></path>
						</svg>
					</div>

					<ul className="languages">
						{languages.map((language, idx) => (
							<li
								key={idx}
								className="language"
								onClick={() => setLang(language)}>
								{language}
							</li>
						))}
					</ul>
				</div>
			</div>
		</ContactContainer>
	);
}
