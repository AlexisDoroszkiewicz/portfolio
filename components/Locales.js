import { useRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";

export default function Locales() {
	const { asPath, locale } = useRouter();

	return (
		<Flex>
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
	a {
		text-decoration: none;
		color: inherit;
	}
	a:first-of-type {
		padding-right: 0.5rem;
		border-right: 2px solid var(--greyDark);
	}
	a:last-of-type {
		padding-left: 0.5rem;
	}
`;

const P = styled.p`
	color: ${({ isCurrent }) => (isCurrent ? "var(--accent)" : "inherit")};
	cursor: pointer;
`;
