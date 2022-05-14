import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function Download(props) {
	const { locale } = useRouter();
	return (
		<Button href="/alexis-resume.pdf" download {...props}>
			{locale == "fr" ? "Mon CV" : "Resume"}
		</Button>
	);
}

const Button = styled.a`
	background-color: white;
	display: block;
	padding: 0.5em 1em;
	text-decoration: none;
	border: 2px solid var(--accent);
	border-radius: var(--radius);
	color: var(--accent);
	width: fit-content;
	&:hover {
		background-color: var(--accentAlpha);
	}
`;
