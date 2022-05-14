import Linkedin from "@components/Linkedin";
import GitHub from "@components/Github";
import Twitter from "@components/Twitter";
import styled from "@emotion/styled";

export default function Socials() {
	return (
		<SocialsContainer>
			<a
				href="https://github.com/AlexisDoroszkiewicz"
				rel="noreferrer"
				target="_blank">
				<GitHub />
			</a>
			<a
				href="https://www.linkedin.com/in/alexis-doroszkiewicz-678973214/"
				rel="noreferrer"
				target="_blank">
				<Linkedin />
			</a>
			<a
				href="https://twitter.com/alexis_dorosz"
				rel="noreferrer"
				target="_blank">
				<Twitter />
			</a>
		</SocialsContainer>
	);
}

const SocialsContainer = styled.div`
	position: fixed;
	top: 50%;
	right: 2.5vw;
	transform: translateY(-50%);
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	@media (max-width: 1200px) {
		display: none;
	}
	a {
		color: var(--accent);
	}
	svg {
		width: 1.5rem;
		aspect-ratio: 1 / 1;
		display: block;
	}
`;
