import styled from 'styled-components';

export const ChangeWorldContainer = styled.section`
	${({ theme }) => theme.shape.responsiveWidth};

	margin-top: 60px;

	.title {
		${({ theme }) => theme.typography.title};
		margin-bottom: 26px;
	}

	.text {
		${({ theme }) => theme.typography.text};
	}
`;
