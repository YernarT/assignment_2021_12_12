import styled from 'styled-components';

export const IntroContainer = styled.section`
	${({ theme }) => theme.shape.responsiveWidth};
	margin-top: 50px;

	display: flex;

	.desc {
		flex-basis: 50%;

		display: flex;
		flex-direction: column;

		.title {
			${({ theme }) => theme.typography.title};
			margin-bottom: 48px;
		}

		.text {
			${({ theme }) => theme.typography.text};
			line-height: 1.75;
			margin-bottom: 20px;
		}

		.intro-btn-wrap {
			margin-top: 40px;

			display: flex;
			justify-content: flex-end;

			a {
				${({ theme }) => theme.typography.text};
				text-decoration: none;

				padding: 12px 40px;

				border-bottom: 1px solid #282828;

				position: relative;

				&:hover > .right-arrow {
					transform: translate(0, -25%);
				}

				.right-arrow {
					position: absolute;
					top: 50%;
					right: 0;

					transform: translate(-10px, -25%);

					${({ theme }) => theme.typography.text};
					font-size: 0.7rem;

					transition: transform 0.4s ease;
				}
			}
		}
	}

	.pix {
		flex-basis: 50%;
		height: 536px;

		object-fit: contain;
	}

	@media screen and (max-width: 1000px) {
		.pix {
			display: none;
		}

		.desc {
			flex-basis: 100%;
		}
	}
`;
