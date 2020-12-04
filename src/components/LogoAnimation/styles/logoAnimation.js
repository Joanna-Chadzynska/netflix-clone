import styled, { keyframes } from 'styled-components/macro';

const slideInLeft = keyframes`
        0% {
        transform: translateX(11rem)
    }
        60% {
        transform: translateX(11rem)
    }
    100% {
        transform: translateX(0) scale(1)
    }
`;

const slideFadeInLeft = keyframes`
    0% {
    transform: translateX(11rem);
    opacity: 0;
    }
    60% {
    transform: translateX(11rem);
    }
    100% {
    transform: translateX(0);
    opacity: 1}
`;

const zoomOut = keyframes`
    from { transform: scale(1.5); }
    to { transform: scale(1); }
`;

const fillHeight = keyframes`
    0% {
        height: 0%;
        box-shadow: 0 0 0.6rem rgba(0,0,0,0.75);
    }
    40% {
        height: 100%;
        box-shadow: 0 0 0.6rem rgba(0,0,0,0.75);
    }
    100%{
        height: 100%;
        box-shadow: none;
    }
`;

const fillHeightNoShadow = keyframes`
    0% {
        height: 0%;
        box-shadow: none;
    }
    40% {
        height: 100%;
    }
    100%{
        height: 100%;
        box-shadow: none;
    }
`;

const letterN1 = keyframes`
    0%,
    80% {
        background: $dark-red;
        box-shadow: 0 0 0.6rem rgba(0,0,0,0.75);
    }
    100%{
        background: $red;
        box-shadow: none;
    }

`;

const letterN2 = keyframes`
    0%{
        height: 0%;
        box-shadow: 0 0 0.6rem rgba(0,0,0,0.75);
    }
    90%,
    100%{
        height: 100%;
        box-shadow: none;
    }
`;

const letterN3 = keyframes`
    0%,
    20% {
        height: 0%;
        background: $dark-red;
        box-shadow: 0 0 0.6rem rgba(0,0,0,0.75);
    }
    80% {
        height: 100%;
        background: $dark-red;
    }
    100%{
        height: 100%;
        background: $red;
        box-shadow: none;
    }
`;

const letterEBottom = keyframes`
    0%,
    40% {
        transform: translateY(-1.9rem) rotateZ(-88deg);
    }
    100%{
        transform: translateY(-1.9rem) rotateZ(-94deg);
    }
`;

const letterLBottom = keyframes`
    0%,
    40% {
        transform: translate(0rem, -1.85rem) rotateZ(95deg);
    }
    100%{
        transform: translate(0rem, -2rem) rotateZ(93deg);
    }
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
	svg {
		margin: 15vmin;

		.base {
			fill: #e50914;
			transition: fill 0.4s;
		}

		.shadow-start {
			stop-color: #000000;
			stop-opacity: 0.6;
		}
		.shadow-end {
			stop-color: #000000;
			stop-opacity: 0;
		}
	}
`;

export const Word = styled.div`
	min-width: 26.5rem;
	min-height: 7rem;
	display: flex;
	justify-content: center;
	position: relative;
	animation: ${zoomOut} 2s ease-out forwards;
	will-change: transform;
	overflow: hidden;
	padding-bottom: 1px;
`;

export const Shape = styled.span`
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	animation-duration: 0.4s;
	transform: none;
`;

export const Fill = styled.span`
	background: #e50815;
	animation-name: ${fillHeight};
	animation-duration: 0.4s;
	animation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
	animation-fill-mode: forwards;
	position: absolute;
	display: block;
	height: 0;
	left: 0;
	width: 100%;
	box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
	transform: none;
	will-change: height;
	will-change: transform;
	transform: none;
`;

export const Curve = styled.div`
	position: absolute;
	background: #000;
	clip-path: ellipse(55% 152% at 50% 160%);
	bottom: -1px;
	left: 0;
	width: 100%;
	height: 1rem;
	z-index: 100;
`;

export const Letter = styled.span`
	margin: 0 0.35rem;
	position: relative;
	overflow: hidden;
	animation: ${slideFadeInLeft} 6.2s cubic-bezier(0.65, 0.05, 0.36, 1) forwards;
`;

export const LetterN = styled(Letter)`
	width: 3.5rem;
	margin-left: 5px;
	animation: ${slideInLeft} 6.2s cubic-bezier(0.65, 0.05, 0.36, 1) forwards;

	> ${Shape}:nth-of-type(1) {
		width: 1rem;
		height: 100%;
		transform: rotate(180deg);
		z-index: 1;

		${Fill} {
			height: 100%;
			animation-name: ${letterN1};
			animation-duration: 4s;
		}
	}

	> ${Shape}:nth-of-type(2) {
		width: 1rem;
		height: 110%;
		transform-origin: 0 0;
		transform: rotateZ(-19.8deg);
		z-index: 3;

		${Fill} {
			animation-name: ${letterN2};
			animation-timing-function: ease;
			animation-duration: 2s;
		}
	}

	> ${Shape}:nth-of-type(3) {
		width: 1rem;
		height: 100%;
		right: 0;
		left: auto;
		transform: rotate(180deg);
		z-index: 1;

		${Fill} {
			animation-name: ${letterN3};
			animation-timing-function: ease;
			animation-duration: 4s;
		}
	}
`;

export const LetterE = styled(Letter)`
	width: 3rem;
	margin-left: 0.725rem;

	> ${Shape}:nth-of-type(1) {
		width: 1.2rem;
		height: 46%;
		bottom: 0;
		right: 0;
		top: auto;
		left: auto;
		transform-origin: 100% 100%;
		transform: translateY(-1.9rem) rotateZ(-88deg);
		animation: ${letterEBottom} 2.5s cubic-bezier(0.46, 0.03, 0.52, 0.96) 3.5s
			forwards;

		${Fill} {
			animation-delay: 3.5s;
			bottom: 0;
		}
	}
	> ${Shape}:nth-of-type(2) {
		width: 1rem;
		height: 100%;
		transform: rotate(180deg);

		${Fill} {
			animation-delay: 3.7s;
			top: 0;
		}
	}
	> ${Shape}:nth-of-type(3) {
		width: 1.1rem;
		height: 43%;
		top: 0;
		left: 0;
		transform-origin: 0 0;
		transform: translateX(3rem) rotateZ(90deg);

		${Fill} {
			content: '';
			animation-delay: 3.9s;
			bottom: 0;
		}
	}
	> ${Shape}:nth-of-type(4) {
		width: 1.1rem;
		height: 24%;
		top: 0;
		left: 0;
		transform-origin: 0 0;
		transform: translate(2.5rem, 2.6rem) rotateZ(90deg);
		box-shadow: 0;

		${Fill} {
			content: '';
			animation-name: ${fillHeightNoShadow};
			animation-delay: 4.1s;
			animation-duration: 0.3s;
			bottom: 0;
		}
	}
`;

export const LetterT = styled(Letter)`
	width: 3.375rem;

	> ${Shape}:nth-of-type(1) {
		width: 1.1rem;
		height: 50%;
		transform-origin: 1.1rem 0;
		transform: translateX(-1.1rem) rotate(-90deg);
		z-index: 2;

		${Fill} {
			animation-delay: 4s;
		}
	}

	> ${Shape}:nth-of-type(2) {
		width: 1.1rem;
		height: 100%;
		transform-origin: 0 0;
		transform: translateX(1.175rem);
		z-index: 1;

		${Fill} {
			animation-delay: 4.2s;
		}
	}
`;

export const LetterF = styled(Letter)`
	width: 3.05rem;

	> ${Shape}:nth-of-type(1) {
		width: 1.1rem;
		height: 44%;
		top: 0;
		left: 0;
		transform-origin: 0 0;
		transform: translateX(3.05rem) rotateZ(90deg);
		z-index: 2;

		${Fill} {
			content: '';
			animation-delay: 4.2s;
			bottom: 0;
		}
	}

	> ${Shape}:nth-of-type(2) {
		width: 1rem;
		height: 100%;
		z-index: 1;

		${Fill} {
			content: '';
			animation-delay: 4.4s;
			top: 0;
		}
	}

	> ${Shape}:nth-of-type(3) {
		width: 1.1rem;
		height: 35%;
		top: 0;
		left: 0;
		transform-origin: 0 0;
		transform: translate(2.5rem, 2.5rem) rotateZ(90deg);
		box-shadow: none;

		${Fill} {
			content: '';
			animation-name: ${fillHeightNoShadow};
			animation-delay: 4.6s;
			animation-duration: 0.3s;
			bottom: 0;
		}
	}
`;

export const LetterL = styled(Letter)`
	width: 3rem;

	> ${Shape}:nth-of-type(1) {
		width: 1.1rem;
		height: 85%;

		${Fill} {
			content: '';
			animation-delay: 4.5s;
			top: 0;
		}
	}

	> ${Shape}:nth-of-type(2) {
		width: 1.2rem;
		height: 44%;
		top: auto;
		bottom: 0;
		transform-origin: 0 100%;
		transform: translate(0rem, -2rem) rotateZ(95deg);
		animation: ${letterLBottom} 2.5s cubic-bezier(0.46, 0.03, 0.52, 0.96) 3.5s
			forwards;

		${Fill} {
			content: '';
			animation-delay: 4.7s;
			animation-duration: 0.3s;
			bottom: 0;
		}
	}
`;

export const LetterI = styled(Letter)`
	width: 1rem;
	margin-left: 0.55rem;

	> ${Shape}:nth-of-type(1) {
		width: 1rem;
		height: 100%;
		transform: rotate(180deg);

		${Fill} {
			content: '';
			animation-delay: 4.8s;
			top: 0;
		}
	}
`;

export const LetterX = styled(Letter)`
	width: 4.1rem;
	margin-left: 0.6rem;
	margin-right: 5px;

	> ${Shape}:nth-of-type(1) {
		width: 1.1rem;
		height: 115%;
		transform-origin: 100% 0;
		transform: rotateZ(23.5deg);
		right: 2px;
		left: auto;
		z-index: 2;

		${Fill} {
			animation-delay: 4.9s;
			bottom: 0;
		}
	}

	> ${Shape}:nth-of-type(2) {
		width: 1.1rem;
		height: 115%;
		transform-origin: 0 0;
		transform: rotateZ(-21.3deg);
		z-index: 1;

		${Fill} {
			animation-delay: 5.2s;
		}
	}
`;
