import React from 'react';

import { circleBackground } from '../../assets/images';
import { ProductsContainer, CarouselContainer } from './style';

export default function Products() {
	return (
		<ProductsContainer id="products">
			<img
				src={circleBackground}
				alt="cirle-background"
				className="cirle-background"
			/>

			<h1 className="title">Продукты</h1>
			<p className="text">2,6 миллиона пользователей уже выбрали нас</p>
			<Carousel />
		</ProductsContainer>
	);
}

function Carousel() {
	return <CarouselContainer></CarouselContainer>;
}
