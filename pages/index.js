import { getAllProjects, getHomeData } from "@lib/datocms";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "@emotion/styled";
import ProjectCard from "@components/ProjectCard";

// data
export async function getStaticProps() {
	const home = await getHomeData();
	const allProjects = await getAllProjects();

	return {
		props: { home, allProjects },
	};
}

// component
export default function Home({ home, allProjects }) {
	const header = useRef();
	const el = useRef();
	const q = gsap.utils.selector(el);

	useEffect(() => {
		gsap.from(header.current, { yPercent: "-100" });
		gsap.to(header.current, { yPercent: "0", duration: 1 });

		gsap.from(q(".projectCard"), {
			opacity: 0,
			xPercent: "-100",
		});
		gsap.to(q(".projectCard"), {
			delay: 1,
			xPercent: 0,
			stagger: 0.33,
			opacity: 1,
			duration: 1,
		});
	});

	return (
		<>
			<Header ref={header}>
				<H1>{home.pageTitle}</H1>
			</Header>
			<main>
				<Flex ref={el}>
					{allProjects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</Flex>
			</main>
		</>
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

const Flex = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem 2rem;
`;
