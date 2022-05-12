import { getAllProjects, getHomeData } from "@lib/datocms";
import { renderMetaTags } from "react-datocms";
import Head from "next/head";
import styled from "@emotion/styled";
import ProjectList from "@components/ProjectsList";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";

// data
export async function getStaticProps(context) {
	const home = await getHomeData(context);
	const allProjects = await getAllProjects(context);

	return {
		props: { home, allProjects },
	};
}

// component
export default function Home({ home, allProjects }) {
	return (
		<>
			<Head>{renderMetaTags(home._seoMetaTags)}</Head>
			<header></header>
			<Navigation />
			<Intro>
				<H1>{home.pageTitle}</H1>
			</Intro>
			<Main>
				<ProjectList allProjects={allProjects} />
			</Main>
			<Footer />
		</>
	);
}

const Intro = styled.section`
	min-height: 100vh;
	padding-inline: 5vw;
	max-width: 1200px;
	margin-inline: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Main = styled.main`
	padding-inline: 5vw;
	max-width: 1200px;
	margin-inline: auto;
`;

const H1 = styled.h1`
	white-space: pre-line;
`;
