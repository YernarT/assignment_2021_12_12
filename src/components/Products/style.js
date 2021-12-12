import styled from 'styled-components';

export const ProductsContainer = styled.section`
	${({ theme }) => theme.shape.responsiveWidth};
	margin-top: 65px;
	padding-bottom: 65px;

	position: relative;

	display: flex;
	flex-direction: column;

	overflow: hidden;

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

export const CarouselContainer = styled.ul`
	margin-top: 24px;

	display: flex;
	align-items: center;
	gap: 60px;

	padding: 16px;

	overflow: auto hidden;


	.carouse-item {
		flex-shrink: 0;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		width: 280px;
		height: 280px;

		padding: 24px;
		
		background-color: #fff;
		box-shadow: -1px 9px 18px -3px rgb(0 0 0 / 35%);

		position: relative;
		
		overflow: hidden;

		&:hover {
			&::after {
				transform: translateX(0);	
			}
		}
		
		&::after {
			content:'';
			width: 100%;
			height: 100%;

			background-color: rgba(0, 0, 0, 0.075);

			position: absolute;
			top: 0;
			left: 0;

			pointer-events: none;

			transform: translateX(-100%);

			transition: transform 0.4s ease;
		}
}

		cursor: pointer;

		.image {
			width: 180px;
		}

		.text {
			${({ theme }) => theme.typography.text};
			font-size: 0.8rem;
		}
	}
`;
