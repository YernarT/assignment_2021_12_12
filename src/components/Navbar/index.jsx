import React, { useState } from 'react';

import { useResponsive, useCreation } from 'ahooks';

import { logoMain, pix } from '../../assets/images';
import {
	DesktopNavbarContainer,
	MobileNavbarContainer,
	NavigationNav,
} from './style';

export default function Navbar() {
	const responsive = useResponsive();

	// links for navigation
	const links = useCreation(
		() => [
			{ href: '#products', text: 'Продукты' },
			{ href: '#null', text: 'Партнерам' },
			{ href: '#null', text: 'О нас' },
			{ href: '#vacancies', text: 'Карьера' },
			{ href: '#contacts', text: 'Контакты' },
		],
		[],
	);

	// languages to switch
	const languages = useCreation(() => ['en', 'ru', 'kz'], []);

	return responsive.middle ? (
		<DesktopNavbar links={links} languages={languages} />
	) : (
		<MobileNavbar links={links} languages={languages} />
	);
}

function DesktopNavbar({ links, languages }) {
	return (
		<DesktopNavbarContainer>
			<img src={logoMain} alt="BTSDigital logo" className="logo" />

			<ul className="links">
				{links.map((link, idx) => (
					<li key={idx} className="link">
						<a href={link.href}>{link.text}</a>
					</li>
				))}
			</ul>

			<ul className="languages">
				{languages.map((language, idx) => (
					<li key={idx} className="language">
						{language}
					</li>
				))}
			</ul>
		</DesktopNavbarContainer>
	);
}

function MobileNavbar({ links, languages }) {
	const [navigationNavVisibile, setNavigationNavVisibile] = useState(false);

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
					{links.map((link, idx) => (
						<li key={idx} className="link">
							<a href={link.href}>{link.text}</a>
						</li>
					))}
				</ul>

				<ul className="languages">
					{languages.map((language, idx) => (
						<li key={idx} className="language">
							{language}
						</li>
					))}
				</ul>
			</NavigationNav>
		</MobileNavbarContainer>
	);
}
