import styled from "@emotion/styled";
import ProjectCard from "@components/ProjectCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from "react";

export default function ProjectList({ allProjects }) {
	const h2ref = useRef();

	useEffect(() => {
		ScrollTrigger.matchMedia({
			"(min-width: 750px)": function () {
				gsap.fromTo(
					h2ref.current,
					{
						yPercent: 100,
					},
					{
						yPercent: 0,
						ease: "none",
						scrollTrigger: {
							trigger: h2ref.current,
							scrub: 1,
							end: "bottom 50",
						},
					}
				);
			},
		});
	}, []);
	return (
		<Section>
			<H2 ref={h2ref}>Latest Work</H2>
			<Flex>
				{allProjects.map((project, index) => (
					<ProjectCard
						key={project.id}
						project={project}
						index={index}
					/>
				))}
			</Flex>
		</Section>
	);
}

const Section = styled.section`
	margin-block: 4rem;
`;

const H2 = styled.h2`
	width: fit-content;
`;

const Flex = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8rem;
	margin-top: 6rem;
	@media (max-width: 750px) {
		gap: 4rem;
	}
`;
