import { useRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";

export default function Locales() {
	const { asPath, locale } = useRouter();

	return (
		<Flex>
			<Link href={"/"} locale="fr">
				<A isCurrent={locale == "fr"}>FR</A>
			</Link>
			<Link href={"/en"} locale="en">
				<A isCurrent={locale == "en"}>EN</A>
			</Link>
		</Flex>
	);
}

const Flex = styled.div`
	display: flex;
	a:first-of-type {
		padding-right: 0.5rem;
		border-right: 2px solid var(--greyDark);
	}
	a:last-of-type {
		padding-left: 0.5rem;
	}
`;

const A = styled.a`
	color: ${({ isCurrent }) => (isCurrent ? "var(--accent)" : "inherit")};
	cursor: pointer;
`;
