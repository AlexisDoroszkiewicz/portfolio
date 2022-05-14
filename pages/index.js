import { getAllProjects, getHomeData, getTimeline } from "@lib/datocms";
import { renderMetaTags } from "react-datocms";
import Head from "next/head";
import styled from "@emotion/styled";
import ProjectList from "@components/ProjectsList";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import Timeline from "@components/Timeline";
import Heading from "@components/Heading";
import Socials from "@components/Socials";

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
			<Main>
				<Intro>
					<Heading heading={home.pageTitle} />
					<Timeline timeline={timeline.keyDate} />
				</Intro>
				<ProjectList allProjects={allProjects} />
			</Main>
			<Footer />
		</>
	);
}

const Intro = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const Main = styled.main`
	padding-inline: 5vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	& > section {
		max-width: 1200px;
		width: 100%;
	}
`;
