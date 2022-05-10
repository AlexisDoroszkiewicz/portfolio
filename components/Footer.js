import styled from "@emotion/styled";

export default function Footer() {
	return (
		<StyledFooter>
			<a
				href="https://github.com/AlexisDoroszkiewicz/portfolio"
				target="_blank"
				rel="noreferrer">
				Designed & Built by Alexis Doroszkiewicz
			</a>
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
	display: flex;
	justify-content: center;
	padding-block: 2em;
	font-size: var(--step--1);
	a {
		color: black;
	}
`;
