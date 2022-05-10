import Image from "next/image";
import styled from "@emotion/styled";
import Categories from "@components/Categories";
import { StructuredText } from "react-datocms";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from "react";

export default function ProjectCard({ project, index }) {
	const img = project.featuredImage;

	const content = useRef();

	useEffect(() => {
		gsap.fromTo(
			content.current,
			{
				yPercent: 45,
			},
			{
				yPercent: -30,
				ease: "none",
				scrollTrigger: {
					trigger: content.current,
					// start: "top bottom", // the default values
					// end: "bottom top",
					scrub: 1,
				},
			}
		);
	}, []);
	return (
		<Card index={index}>
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

			<Content index={index} ref={content}>
				<h3>{project.name}</h3>
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
	border-radius: var(--radius);
	border: var(--border);
	overflow: hidden;
`;

const Content = styled.div`
	order: ${({ index }) => index % 2 && "-1"};
	text-align: ${({ index }) => (index % 2 ? "left" : "right")};
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: ${({ index }) => (index % 2 ? "flex-start" : "flex-end")};

	p {
		width: max-content;
		z-index: 1;
		box-shadow: var(--shadow);
		padding: 2em;
		${({ index }) =>
			index % 2 ? "margin-right: -8em" : "margin-left: -8em"};
		background-color: rgba(250, 250, 255, 0.99);
		box-shadow: 0 4px 32px 0 rgba(148, 55, 148, 0.2);
		border-radius: var(--radius);
		border: var(--border);
	}
`;
