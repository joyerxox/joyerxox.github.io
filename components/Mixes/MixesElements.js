import styled from 'styled-components';

export const MixesContainer = styled.div`
	color: #010606;
	background-color: #f9f9f9;
	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`;

export const MixesWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 860px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const MixesRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

	@media screen and (max-width: 768px) {
		grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
	}
`;

export const MixesColumn1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`;

export const MixesColumn2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	${'' /* grid-area: col2; */} grid-template-columns: 1fr 1fr;

	@media screen and (max-width: 768px) {
		display: inline-grid;
	}
`;

export const MixesTopLine = styled.p`
	color: #af0404;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
`;

export const MixesHeading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: #010606;

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const MixesImgWrap = styled.div`
	max-width: 555px;
	height: 100%;
`;

export const MixesImg = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`;

export const MixesLink = styled.a`color: #010606;`;
export const MixesLinkImg = styled.img`
	width: 100px;
	height: 100px;
	margin: 15px 15px;
`;
