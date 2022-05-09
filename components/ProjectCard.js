import Image from "next/image";
import styled from "@emotion/styled";
import Categories from "@components/Categories";

export default function ProjectCard({ project }) {
	const img = project.featuredImage;
	return (
		<div className="projectCard">
			<H2>{project.name}</H2>
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

			<Categories categories={project.categories} />
		</div>
	);
}

const H2 = styled.h2`
	margin: 0;
`;

const ImgWrap = styled.div`
	max-width: 20rem;
`;
