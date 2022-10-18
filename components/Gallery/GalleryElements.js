import styled from 'styled-components';

export const GalleryContainer = styled.div`
	height: 800px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #f9f9f9;

	@media screen and (max-width: 768px) {
		height: 3000px;
		text-align: center;
	}

	@media screen and (max-width: 480px) {
		height: 2300px;
	}
	${'' /* @media screen and (max-width: 480px) {
		height: 2300px;
	} */};
`;

export const GalleryWrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr; /*the amount of columns you want, 1fr is for each column*/
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;

	@media screen and(max-width: 1000px) {
		grid-template-columns: 1fr;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`;

export const GalleryHeader = styled.h1`
	font-size: 2.5rem;
	color: #af0404;
	margin-bottom: 64px;

	@media screen and (max-width: 480px) {
		text-align: center;
		font-size: 2rem;
	}
`;

export const GalleryImage = styled.img`
	width: 100%;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
	${'' /* margin: 20px 0; */};
`;
