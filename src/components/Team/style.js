import styled from 'styled-components';

export const TeamContainer = styled.section`
	background-color: #000;

	.teams-wrap {
		${({ theme }) => theme.shape.responsiveWidth};
	}

	.teams {
		width: 100%;
		height: 560px;

		position: relative;

		overflow: hidden;

		.team {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;

			transform: translateX(-100%);

			opacity: 0;

			transition: transform 0.4s ease, opacity 0.4s ease;

			width: 100%;
			height: 100%;

			display: flex;

			.info {
				flex-shrink: 0;
				flex-basis: 60%;

				padding: 24px 40px 24px 0;

				.title,
				.text {
					margin-bottom: 20px;
				}

				.title {
					${({ theme }) => theme.typography.title}
					color: #fff;
				}
				.text {
					${({ theme }) => theme.typography.text}
					color: #fff;
					font-size: 0.8rem;
				}
			}

			.image {
				width: 40%;
				height: 100%;
				object-fit: cover;
			}
		}

		.team--active {
			transform: translateX(0);
			opacity: 1;
		}
	}
`;
