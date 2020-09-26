import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	max-width: 1000px;
	padding: 4.375rem 3.5rem;

	@media (max-width: 1000px) {
		padding: 4.375rem 1.875rem;
	}
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	grid-gap: 0.937rem;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
`;

export const Link = styled.a`
	color: ${({ theme }) => theme.colors.gray.light};
	font-size: 0.875rem;
	margin-bottom: 1.25rem;
`;

export const Title = styled.p`
	color: ${({ theme }) => theme.colors.gray.light};
	font-size: 1rem;
	margin-bottom: 2.5rem;
`;

export const Text = styled.p`
	color: ${({ theme }) => theme.colors.gray.light};
	font-size: 0.812rem;
	margin-bottom: 2.5rem;
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;

export const LanguagePicker = styled.div`
	max-width: 150px;
`;

export const LanguageLabel = styled.label`
	margin-bottom: 0;
	font-size: 0.875rem;
	width: 100%;
`;

export const LanguageSelectContainer = styled.div`
	border: 1px solid #333;
	cursor: pointer;
	position: relative;
	width: 100%;

	&::after {
		content: '';
		background-color: #999;
		width: 0.8em;
		height: 0.5em;
		clip-path: polygon(100% 0%, 0 0%, 50% 100%);
		position: absolute;
		top: 50%;
		right: 0.625rem;
		transform: translateY(-50%);
	}

	&::before {
		position: absolute;
		background-repeat: no-repeat;
		background-size: contain;
		content: '';
		width: 40px;
		height: 40px;
		/*    URI Encoder: https://codepen.io/yoksel/details/JDqvs/ */
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' version='1.1' width='512' height='512' x='0' y='0' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 241h106.386c.985-37.555 5.577-72.935 13.235-105h-88.498c-16.938 31.615-28.909 67.24-31.123 105z' fill='%23999999' data-original='%23999999' style='' class=''/%3E%3Cpath d='m106.386 271h-106.386c2.214 37.76 14.185 73.385 31.123 105h88.499c-7.658-32.065-12.251-67.445-13.236-105z' fill='%23999999' data-original='%23999999' style='' class=''/%3E%3Cpath d='m241 241v-105h-90.361c-8.21 31.776-13.182 67.478-14.269 105z' fill='%23999999' data-original='%23999999' style='' class=''/%3E%3Cpath d='m241 106v-106c-32.847 9.174-61.943 51.143-81.145 106z' fill='%23999999' data-original='%23999999' style='' class=''/%3E%3Cpath d='m241 512v-106h-81.145c19.202 54.857 48.298 96.826 81.145 106z' fill='%23999999' data-original='%23999999' style='' class=''/%3E%3Cpath d='m271 0v106h81.145c-19.202-54.857-48.298-96.826-81.145-106z' fill='%23999999' data-original='%23999999' style='' class=''/%3E%3Cpath d='m375.63 241c-1.088-37.522-6.059-73.224-14.269-105h-90.361v105z' fill='%23999999' data-original='%23999999' style='' class=''/%3E%3Cpath d='m241 271h-104.63c1.088 37.524 6.059 73.224 14.269 105h90.361z' fill='%23999999' data-original='%23999999' style='' class=''/%3E%3Cpath d='m384.011 106h77.75c-31.049-42.473-74.76-78.355-125.684-95.257 19.571 23.104 35.94 57.847 47.934 95.257z' fill='%23999999' data-original='%23999999' style='' class=''/%3E%3Cpath d='m127.989 406h-77.75c31.049 42.473 74.76 78.355 125.684 95.257-19.571-23.104-35.94-57.847-47.934-95.257z' fill='%23999999' data-original='%23999999' style='' class=''/%3E%3Cpath d='m127.989 106c11.993-37.41 28.363-72.153 47.933-95.257-50.923 16.902-94.634 52.784-125.683 95.257z' fill='%23999999' data-original='%23999999' style='' class=''/%3E%3Cpath d='m384.011 406c-11.993 37.41-28.363 72.153-47.933 95.257 50.923-16.902 94.634-52.784 125.684-95.257z' fill='%23999999' data-original='%23999999' style='' class=''/%3E%3Cpath d='m271 271v105h90.361c8.21-31.776 13.182-67.476 14.269-105z' fill='%23999999' data-original='%23999999' style='' class=''/%3E%3Cpath d='m392.379 136c7.657 32.065 12.25 67.445 13.235 105h106.386c-2.214-37.76-14.185-73.385-31.123-105z' fill='%23999999' data-original='%23999999' style='' class=''/%3E%3Cpath d='m271 406v106c32.847-9.174 61.943-51.143 81.145-106z' fill='%23999999' data-original='%23999999' style='' class=''/%3E%3Cpath d='m512 271h-106.386c-.985 37.555-5.577 72.935-13.235 105h88.499c16.937-31.615 28.908-67.24 31.122-105z' fill='%23999999' data-original='%23999999' style='' class=''/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
		position: absolute;
		top: 50%;
		left: 0.7rem;
		z-index: 10;
		transform: translateY(-50%);
		background-size: center center;
		width: 1.2em;
		height: 1.2em;
	}
`;

export const SelectOpt = styled.select`
	appearance: none;
	background-color: #000;
	border: none;
	color: #999;
	cursor: inherit;
	font-size: 1rem;
	padding: 0.75rem 1.625rem 0.75rem 3.125rem;
	width: 100%;
	z-index: 1;

	&::-ms-expand {
		display: none;
	}

	outline: none;
`;

export const LanguageOpt = styled.option`
	font-weight: normal;
	display: block;
	white-space: pre;
	min-height: 1.2em;
	/* padding: 0px 2px 1px; */
`;
