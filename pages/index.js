import { getAllProjects, getHomeData } from "@lib/datocms";
import styled from "@emotion/styled";
import ProjectList from "@components/ProjectsList";

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
			<Main>
				<H1>{home.pageTitle}</H1>
				<ProjectList allProjects={allProjects} />
			</Main>
			<footer />
		</>
	);
}

const Main = styled.main`
	padding-inline: 5vw;
	max-width: 1200px;
	margin-inline: auto;
`;

const H1 = styled.h1`
	white-space: pre-line;
`;
