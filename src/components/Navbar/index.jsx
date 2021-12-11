import React, { useState, useContext, useMemo, useCallback } from 'react';

import { LanguageContext } from '../../App';

import { useResponsive, useCreation } from 'ahooks';

import { logoMain, pix } from '../../assets/images';
import {
	DesktopNavbarContainer,
	MobileNavbarContainer,
	NavigationNav,
} from './style';

export default function Navbar() {
	const responsive = useResponsive();

	const linksList = useCreation(() => [
		{
			lang: 'ru',
			links: [
				{ href: '#products', text: 'Продукты' },
				{ href: '#null', text: 'Партнерам' },
				{ href: '#null', text: 'О нас' },
				{ href: '#vacancies', text: 'Карьера' },
				{ href: '#contacts', text: 'Контакты' },
			],
		},
		{
			lang: 'kz',
			links: [
				{ href: '#products', text: 'Өнімдеріміз' },
				{ href: '#null', text: 'Әріптестерге' },
				{ href: '#null', text: 'Біз туралы' },
				{ href: '#vacancies', text: 'Мансап' },
				{ href: '#contacts', text: 'Байланыстар' },
			],
		},
		{
			lang: 'en',
			links: [
				{ href: '#products', text: 'Products' },
				{ href: '#null', text: 'For patners' },
				{ href: '#null', text: 'About us' },
				{ href: '#vacancies', text: 'Carrer' },
				{ href: '#contacts', text: 'Contact us' },
			],
		},
	]);

	// languages to switch
	const languages = useCreation(() => ['en', 'ru', 'kz'], []);

	const [lang, setLang] = useContext(LanguageContext);

	// links for navigation
	const currentLinksData = useMemo(
		() => linksList.find(linkData => linkData.lang === lang),
		[lang, linksList],
	);

	// change language
	const handleChangeLanguage = useCallback(
		_lang => {
			if (_lang !== lang) {
				setLang(_lang);
			}
		},
		[lang, setLang],
	);

	return responsive.middle ? (
		<DesktopNavbar
			currentLinksData={currentLinksData}
			languages={languages}
			handleChangeLanguage={handleChangeLanguage}
		/>
	) : (
		<MobileNavbar
			currentLinksData={currentLinksData}
			languages={languages}
			handleChangeLanguage={handleChangeLanguage}
		/>
	);
}

function DesktopNavbar({ currentLinksData, languages, handleChangeLanguage }) {
	return (
		<DesktopNavbarContainer>
			<img src={logoMain} alt="BTSDigital logo" className="logo" />

			<ul className="links">
				{currentLinksData.links.map((link, idx) => (
					<li key={idx} className="link">
						<a href={link.href}>{link.text}</a>
					</li>
				))}
			</ul>

			<ul className="languages">
				{languages.map((language, idx) => (
					<li
						key={idx}
						className="language"
						onClick={() => handleChangeLanguage(language)}>
						{language}
					</li>
				))}
			</ul>
		</DesktopNavbarContainer>
	);
}

function MobileNavbar({ currentLinksData, languages, handleChangeLanguage }) {
	const [navigationNavVisibile, setNavigationNavVisibile] = useState(false);

	const _handleChangeLanguage = useCallback(
		lang => {
			setNavigationNavVisibile(false);
			handleChangeLanguage(lang);
		},
		[setNavigationNavVisibile, handleChangeLanguage],
	);

	const handleItemClick = useCallback(
		e => {
			e.preventDefault();

			setNavigationNavVisibile(false);
			window.location.hash = e.target.hash;
		},
		[setNavigationNavVisibile],
	);

	return (
		<MobileNavbarContainer>
			<img src={logoMain} alt="BTSDigital logo" className="logo" />

			<div
				className="burger-btn"
				onClick={() => setNavigationNavVisibile(true)}>
				<span className="line"></span>
				<span className="line"></span>
				<span className="line"></span>
			</div>

			<NavigationNav navigationNavVisibile={navigationNavVisibile}>
				<img src={pix} alt="pix" className="pix" />

				<header className="header">
					<div className="logo-wrapper">
						<img src={logoMain} alt="BTSDigital logo" className="logo" />
					</div>

					<div
						className="close-btn"
						onClick={() => setNavigationNavVisibile(false)}>
						<span className="line"></span>
						<span className="line"></span>
					</div>
				</header>

				<ul className="links">
					{currentLinksData.links.map((link, idx) => (
						<li key={idx} className="link">
							<a href={link.href} onClick={handleItemClick}>
								{link.text}
							</a>
						</li>
					))}
				</ul>

				<ul className="languages">
					{languages.map((language, idx) => (
						<li
							key={idx}
							className="language"
							onClick={() => _handleChangeLanguage(language)}>
							{language}
						</li>
					))}
				</ul>
			</NavigationNav>
		</MobileNavbarContainer>
	);
}
