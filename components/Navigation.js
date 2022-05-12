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
	margin-inline: auto;
	display: flex;
	justify-content: flex-end;
`;
