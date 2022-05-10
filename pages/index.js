import { getAllProjects, getHomeData } from "@lib/datocms";
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
	return (
		<>
			<header></header>
			<main>
				<h1>{home.pageTitle}</h1>
				<div>
					{allProjects.map((project, index) => (
						<ProjectCard
							key={project.id}
							project={project}
							index={index}
						/>
					))}
				</div>
			</main>
			<footer />
		</>
	);
}
