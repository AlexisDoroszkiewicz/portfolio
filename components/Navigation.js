import Locales from "@components/Locales";
import styled from "@emotion/styled";
import Download from "./Download";
import Socials from "./Socials";

export default function Navigation() {
	return (
		<NavWrap>
			<Nav>
				<Locales />
				<Socials />
				<Download />
			</Nav>
		</NavWrap>
	);
}

const NavWrap = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	padding-inline: 5vw;
	padding-block: 1rem;
	background-color: #fef9fe;
	z-index: 99;
`;

const Nav = styled.nav`
	max-width: 1200px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: var(--step--1);
`;
