import { useRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";

export default function Locales(props) {
	const { asPath, locale } = useRouter();

	return (
		<Flex {...props}>
			<Link href={"/"} locale="fr">
				<a>
					<P isCurrent={locale == "fr"}>fr</P>
				</a>
			</Link>
			<Link href={"/en"} locale="en">
				<a>
					<P isCurrent={locale == "en"}>en</P>
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
		font-size: var(--step-0);
		@media (max-width: 760px) {
			font-size: var(--step-1);
		}
	}
`;

const P = styled.p`
	color: ${({ isCurrent }) => (isCurrent ? "var(--accent)" : "inherit")};
	cursor: pointer;
`;
