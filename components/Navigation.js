import Locales from "@components/Locales";
import styled from "@emotion/styled";

export default function Navigation() {
	return (
		<Nav>
			<Locales />
		</Nav>
	);
}

const Nav = styled.nav`
	padding-inline: 5vw;
	max-width: 1200px;
	position: absolute;
	top: 0;
	left: 0%;
	right: 0;
	margin: 0 auto;
	padding-block: 1em;
	display: flex;
	justify-content: flex-end;
`;
