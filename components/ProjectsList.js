import styled from "@emotion/styled";
import ProjectCard from "@components/ProjectCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function ProjectList({ allProjects }) {
	const h2ref = useRef();
	const underline = useRef();
	const tl = useRef();

	const { locale } = useRouter();

	useEffect(() => {
		tl.current = gsap
			.timeline({
				scrollTrigger: {
					trigger: h2ref.current,
					start: "top bottom",
					end: "top 25%",
					scrub: 1,
				},
			})
			.fromTo(h2ref.current, { width: "0%" }, { width: "100%" })
			.fromTo(underline.current, { width: "0%" }, { width: "100%" });
	}, []);
	return (
		<Section>
			<H2>
				<div ref={h2ref}>
					{locale == "fr"
						? "Dernières Intégrations"
						: "Latest Integrations"}
					<Underline ref={underline} />
				</div>
			</H2>
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

const Section = styled.section``;

const H2 = styled.h2`
	width: fit-content;
	position: relative;
	div {
		overflow: hidden;
		white-space: nowrap;
	}
`;

const Underline = styled.div`
	position: absolute;
	height: 1px;
	background-color: var(--grey);
`;

const Flex = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8rem;
	margin-top: 4rem;
	@media (max-width: 750px) {
		gap: 4rem;
	}
`;
