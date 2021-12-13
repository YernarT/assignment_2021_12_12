import styled from 'styled-components';

export const ContactContainer = styled.section`
	background-color: #282828;

	margin-top: 80px;

	.wrapper {
		${({ theme }) => theme.shape.responsiveWidth};

		display: flex;
		flex-direction: column;

		.contacts {
			display: flex;
			justify-content: space-between;

			padding-top: 64px;
			padding-bottom: 32px;

			border-bottom: 2px solid #fff;

			.left {
				display: flex;
				flex-direction: column;

				.title {
					${({ theme }) => theme.typography.title};
					color: #fff;
					margin-bottom: 20px;
				}

				.text {
					${({ theme }) => theme.typography.text};
					color: #fff;
				}

				.text2 {
					margin-top: auto;

					cursor: pointer;

					&:hover {
						text-decoration: underline;
					}
				}
			}

			.right {
				flex-basis: 50%;
				width: 50%;
				flex-shrink: 0;
			}
		}

		.other {
			padding: 32px 0;

			display: flex;
			justify-content: space-between;
			align-items: center;

			.text {
				${({ theme }) => theme.typography.secondary};

				cursor: pointer;

				&:hover {
					text-decoration: underline;
				}
			}

			.social {
				display: flex;
				align-items: center;
				gap: 24px;

				svg {
					color: #91969e;

					cursor: pointer;

					&:hover {
						color: #fff;
					}
				}
			}

			.languages {
				display: flex;
				align-items: center;
				gap: 16px;

				.language {
					${({ theme }) => theme.typography.secondary};

					cursor: pointer;

					&:hover {
						color: #fff;
					}
				}
			}
		}

		@media screen and (max-width: 500px) {
			.contacts,
			.other {
				flex-direction: column;
				gap: 20px;
			}

			.contacts {
				.right {
					width: 100%;
				}
			}
		}
	}
`;
