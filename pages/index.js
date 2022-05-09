import { getHomeData } from "@lib/datocms";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "@emotion/styled";

// data
export async function getStaticProps() {
	const home = await getHomeData();

	return {
		props: { home },
	};
}

// component
export default function Home({ home }) {
	const header = useRef();

	useEffect(() => {
		gsap.from(header.current, { yPercent: "-100" });
		gsap.to(header.current, { yPercent: "0", duration: 2 });
	});

	return (
		<Header ref={header}>
			<H1>{home.pageTitle}</H1>
		</Header>
	);
}

const Header = styled.header`
	padding: 1rem 2rem;
	background-color: white;
	box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
`;
const H1 = styled.h1`
	width: fit-content;
	margin: 0;
`;
