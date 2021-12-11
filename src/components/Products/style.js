import styled from 'styled-components';

export const ProductsContainer = styled.section`
	${({ theme }) => theme.shape.responsiveWidth};
	margin-top: 65px;
	padding-bottom: 65px;

	position: relative;

	display: flex;
	flex-direction: column;

	.cirle-background {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;

		width: 200%;
		height: 200%;
        object-fit: cover;
	}

	.title,
	.text {
		margin-bottom: 20px;
	}

	.title {
		${({ theme }) => theme.typography.title};
	}

	.text {
		${({ theme }) => theme.typography.text};
	}
`;

export const CarouselContainer = styled.div``;
