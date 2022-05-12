import { getAllProjects, getHomeData, getTimeline } from "@lib/datocms";
import { renderMetaTags } from "react-datocms";
import Head from "next/head";
import styled from "@emotion/styled";
import ProjectList from "@components/ProjectsList";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import Timeline from "@components/Timeline";

// data
export async function getStaticProps(context) {
	const home = await getHomeData(context);
	const allProjects = await getAllProjects(context);
	const { timeline } = await getTimeline(context);

	return {
		props: { home, allProjects, timeline },
	};
}

// component
export default function Home({ home, allProjects, timeline }) {
	return (
		<>
			<Head>{renderMetaTags(home._seoMetaTags)}</Head>
			<header></header>
			<Navigation />
			<Intro>
				<H1>{home.pageTitle}</H1>
				<Timeline timeline={timeline.keyDate} />
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
	justify-content: space-evenly;
`;

const Main = styled.main`
	padding-inline: 5vw;
	max-width: 1200px;
	margin-inline: auto;
`;

const H1 = styled.h1`
	white-space: pre-line;
`;
