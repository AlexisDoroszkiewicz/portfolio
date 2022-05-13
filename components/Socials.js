import Linkedin from "@components/Linkedin";
import GitHub from "@components/Github";
import Twitter from "@components/Twitter";
import styled from "@emotion/styled";

export default function Socials() {
	return (
		<SocialsContainer>
			<a>
				<GitHub fill="var(--fontColor)" />
			</a>
			<a>
				<Linkedin fill="var(--fontColor)" />
			</a>
			<a>
				<Twitter fill="var(--fontColor)" />
			</a>
		</SocialsContainer>
	);
}

const SocialsContainer = styled.div`
	display: flex;
	gap: 0.5em;
	svg {
		width: 1rem;
		aspect-ratio: 1 / 1;
		fill: black;
		display: block;
	}
`;
