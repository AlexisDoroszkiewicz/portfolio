import { useRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";

export default function Locales(props) {
	const { asPath, locale } = useRouter();

	return (
		<Flex {...props}>
			<Link href={"/"} locale="fr">
				<a>
					<P isCurrent={locale == "fr"}>FR</P>
				</a>
			</Link>
			<Link href={"/en"} locale="en">
				<a>
					<P isCurrent={locale == "en"}>EN</P>
				</a>
			</Link>
		</Flex>
	);
}

const Flex = styled.div`
	display: flex;
	gap: 0.5em;
	a {
		text-decoration: none;
		color: inherit;
	}
`;

const P = styled.p`
	color: ${({ isCurrent }) => (isCurrent ? "var(--accent)" : "inherit")};
	cursor: pointer;
`;
