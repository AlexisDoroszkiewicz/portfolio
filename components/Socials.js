import Linkedin from "@components/Linkedin";
import GitHub from "@components/Github";
import Twitter from "@components/Twitter";
import styled from "@emotion/styled";
import Mail from "./Mail";

export default function Socials(props) {
	return (
		<SocialsContainer {...props}>
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
			<a
				href="mailto:alexis.dorosz@gmail.com"
				rel="noreferrer"
				target="_blank">
				<Mail />
			</a>
		</SocialsContainer>
	);
}

const SocialsContainer = styled.div`
	display: flex;
	gap: 1em;
	a {
		transition: color 0.2s linear;
		color: var(--fontColor);
		&:hover {
			color: var(--accent);
		}
	}
	svg {
		width: 1.5em;
		aspect-ratio: 1 / 1;
		display: block;
		height: fit-content;
	}
`;
