import { css } from 'styled-components';

const shape = {
	iconShape: {
		color: '#91969e',
		fontSize: '1rem',
	},

	responsiveWidth: css`
		/* align center */
		margin: auto;

		width: 1200px;
		@media screen and (max-width: 1240px) {
			width: 85%;
		}
		@media screen and (max-width: 1000px) {
			width: 95%;
		}
	`,
};

export default shape;
