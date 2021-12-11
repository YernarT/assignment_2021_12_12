import React from 'react';

import { Navbar, Intro, Products } from '../../components';

import { useTitle } from 'ahooks';

import { HomePageContainer } from './style';

export default function HomePage() {
	// set <title> Title </title>
	useTitle('Главная');

	return (
		<HomePageContainer>
			<Navbar />
			<Intro />
			<Products />
		</HomePageContainer>
	);
}
