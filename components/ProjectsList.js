import styled from "@emotion/styled";
import ProjectCard from "@components/ProjectCard";

export default function ProjectList({ allProjects }) {
	return (
		<Flex>
			{allProjects.map((project, index) => (
				<ProjectCard key={project.id} project={project} index={index} />
			))}
		</Flex>
	);
}

const Flex = styled.section`
	display: flex;
	flex-direction: column;
	gap: 8rem;
	margin-block: 4rem;
`;
