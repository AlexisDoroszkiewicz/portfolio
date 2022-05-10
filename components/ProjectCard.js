import Image from "next/image";
import styled from "@emotion/styled";
import Categories from "@components/Categories";
import { StructuredText } from "react-datocms";

export default function ProjectCard({ project, index }) {
	const img = project.featuredImage;
	return (
		<Card className="projectCard">
			<Image
				src={img.url}
				width={img.width}
				height={img.height}
				placeholder="blur"
				blurDataURL={img.blurUpThumb}
				layout="responsive"
				priority
			/>

			<Content>
				<H2>{project.name}</H2>
				<StructuredText data={project.excerpt.value} />
				<Categories categories={project.categories} />
			</Content>
		</Card>
	);
}

const Card = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const Content = styled.div`
	text-align: right;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

const H2 = styled.h2`
	margin: 0;
`;
