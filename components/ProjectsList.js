import styled from "@emotion/styled";
import ProjectCard from "@components/ProjectCard";
import SectionHeading from "@components/SectionHeading";
import { useRouter } from "next/router";

export default function ProjectList({ allProjects }) {
	const { locale } = useRouter();
	return (
		<Section>
			<SectionHeading>
				{locale == "fr"
					? "Dernières Intégrations"
					: "Latest Integrations"}
			</SectionHeading>
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
	margin-bottom: 4rem;
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
