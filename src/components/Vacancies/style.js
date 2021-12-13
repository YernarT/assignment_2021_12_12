import styled from 'styled-components';

export const VacanciesContainer = styled.section`
	${({ theme }) => theme.shape.responsiveWidth};

	margin-top: 80px;

	.title {
		${({ theme }) => theme.typography.title};
		margin-bottom: 26px;
	}

	/* .text {
		${({ theme }) => theme.typography.text};
	} */

	.vacancies {
		display: flex;
		flex-direction: column;
		gap: 10px;

		.vacancie {
			padding: 13px 46px;

			border: 1px solid #000;

			display: flex;
			justify-content: space-between;
			align-items: center;

			cursor: pointer;

			transition: color 0.2s ease, background-color 0.4s ease;

			&:hover {
				color: #fff;
				background-color: #282828;
			}
		}
	}
`;
