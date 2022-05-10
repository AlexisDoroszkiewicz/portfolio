import Image from "next/image";
import styled from "@emotion/styled";
import Categories from "@components/Categories";
import { StructuredText } from "react-datocms";

export default function ProjectCard({ project, index }) {
	const img = project.featuredImage;
	return (
		<Card className="projectCard" index={index}>
			<ImgWrap>
				<Image
					src={img.url}
					width={img.width}
					height={img.height}
					placeholder="blur"
					blurDataURL={img.blurUpThumb}
					layout="responsive"
					priority
				/>
			</ImgWrap>

			<Content index={index}>
				<H2>{project.name}</H2>
				<StructuredText data={project.excerpt.value} />
				<Categories categories={project.categories} />
			</Content>
		</Card>
	);
}

const Card = styled.div`
	display: grid;
	grid-template-columns: ${({ index }) =>
		index % 2 ? "1fr 2fr" : "2fr 1fr"};
	align-items: center;
`;

const ImgWrap = styled.div`
	box-shadow: var(--shadow);
	img {
		border-radius: var(--radius);
		border: var(--border) !important;
	}
`;

const Content = styled.div`
	order: ${({ index }) => index % 2 && "-1"};
	text-align: ${({ index }) => (index % 2 ? "left" : "right")};
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: ${({ index }) => (index % 2 ? "flex-start" : "flex-end")};

	p {
		z-index: 1;
		box-shadow: var(--shadow);
		padding: 2em;
		${({ index }) =>
			index % 2 ? "margin-right: -8em" : "margin-left: -8em"};
		background-color: rgba(250, 250, 255, 0.99);
		box-shadow: 0 4px 32px 0 rgba(31, 38, 135, 0.2);
		border-radius: var(--radius);
		border: var(--border);
	}
`;

const H2 = styled.h2`
	margin: 0;
`;
