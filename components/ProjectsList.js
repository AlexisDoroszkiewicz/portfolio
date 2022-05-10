import styled from "@emotion/styled";
import ProjectCard from "@components/ProjectCard";

export default function ProjectList({ allProjects }) {
	return (
		<Section>
			<H2>Latest Work</H2>
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
`;
