import Linkedin from "@components/Linkedin";
import GitHub from "@components/GitHub";
import Twitter from "@components/Twitter";
import styled from "@emotion/styled";

export default function Socials() {
	return (
		<SocialsContainer>
			<a>
				<GitHub />
			</a>
			<a>
				<Linkedin />
			</a>
			<a>
				<Twitter />
			</a>
		</SocialsContainer>
	);
}

const SocialsContainer = styled.div`
	width: 2rem;
	svg {
		max-width: 2rem;
		aspect-ratio: 1 / 1;
		fill: black;
	}
	a {
		display: block;
	}
`;
