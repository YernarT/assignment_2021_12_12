import styled, { css } from 'styled-components';

const NavbarContainerCommonStyle = css`
	${({ theme }) => theme.shape.responsiveWidth};

	padding: 16px 0;

	display: flex;
	align-items: center;

	border-bottom: 1px solid #4e5761;

	user-select: none;

	.logo {
		width: auto;
		height: 36px;

		object-fit: cover;
	}
`;

export const DesktopNavbarContainer = styled.header`
	${NavbarContainerCommonStyle};

	@media screen and (max-width: 1240px) {
		padding-left: 80px;
		padding-right: 80px;
	}
	@media screen and (max-width: 1160px) {
		padding-left: 40px;
		padding-right: 40px;
	}
	@media screen and (max-width: 1000px) {
		padding-left: 28px;
		padding-right: 28px;
	}
	@media screen and (max-width: 800px) {
		padding-left: 24px;
		padding-right: 24px;
	}
	@media screen and (max-width: 500px) {
		padding-left: 12px;
		padding-right: 12px;
	}

	.links,
	.languages {
		display: flex;
		align-items: center;

		li,
		a {
			${({ theme }) => theme.typography.link};

			cursor: pointer;

			&:hover,
			&:active {
				text-decoration: underline;
			}
		}
	}

	.links {
		margin-left: 70px;
		@media screen and (max-width: 1240px) {
			margin-left: 56px;
		}
		gap: 20px;
	}

	.languages {
		margin-left: auto;
		gap: 10px;
	}
`;

export const MobileNavbarContainer = styled.header`
	${NavbarContainerCommonStyle};

	.burger-btn {
		position: sticky;
		/* navbar padding + ((navbar height - burger-btn height) / 2)  */
		top: calc(16px + 6px);
		/* right: 35px; */

		margin-left: auto;

		display: flex;
		flex-direction: column;
		gap: 6px;

		cursor: pointer;

		.line {
			width: 36px;
			height: 4px;

			background-color: #000;
		}
	}
`;

export const NavigationNav = styled.nav`
	width: 100%;
	height: 100vh;

	position: fixed;
	top: 0;
	left: 0;

	padding: 16px 5%;
	padding-bottom: 36px;

	background-color: #fff;

	display: ${({ navigationNavVisibile }) =>
		navigationNavVisibile ? 'flex' : 'none'};
	flex-direction: column;

	.pix {
		width: 160%;
		height: 160%;

		position: absolute;
		top: 15%;
		left: 50%;
		z-index: -1;

		transform: translateX(-50%);
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.logo-wrapper {
			&::after {
				content: '';
				display: block;

				width: 100%;
				height: 1px;

				background-color: #4e5761;
			}

			.logo {
				margin-bottom: 12px;
			}
		}

		.close-btn {
			position: relative;
			bottom: 12px;

			width: 40px;
			height: 40px;

			cursor: pointer;

			.line {
				width: 36px;
				height: 5px;

				background-color: #828282;

				position: absolute;
				top: 50%;
				left: 50%;

				transform-origin: center center;

				&:first-child {
					transform: translate(-50%, -50%) rotate(45deg);
				}

				&:last-child {
					transform: translate(-50%, -50%) rotate(-45deg);
				}
			}
		}
	}

	.links,
	.languages {
		li,
		a {
			${({ theme }) => theme.typography.link};
			font-size: 1.5rem;

			cursor: pointer;

			&:hover,
			&:active {
				text-decoration: underline;
			}
		}
	}

	.links {
		margin-top: 30px;

		display: flex;
		flex-direction: column;
        justify-content: center;
		gap: 15px;

		.link {
			width: max-content;
		}
	}

	.languages {
		margin-top: auto;

		display: flex;
        align-items: center;
		gap: 20px;
	}
`;
