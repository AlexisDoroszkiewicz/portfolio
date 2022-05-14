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
	const imgref = useRef();

	useEffect(() => {
		ScrollTrigger.matchMedia({
			"(min-width: 750px)": function () {
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
							scrub: 1,
						},
					}
				);

				return () => {
					content.current.hasAttribute("style") &&
						content.current.removeAttribute("style");
				};
			},
		});
	}, []);
	return (
		<Card index={index}>
			<a href={project.link} target="_blank" rel="noreferrer">
				<ImgWrap ref={imgref}>
					<Image
						src={img.url}
						width={img.width}
						height={img.height}
						alt={img.alt}
						placeholder="blur"
						blurDataURL={img.blurUpThumb}
						layout="responsive"
					/>
				</ImgWrap>
			</a>

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
	@media (max-width: 750px) {
		grid-template-columns: 1fr;
		gap: 1rem;
		padding-bottom: 4rem;
		border-bottom: var(--border);
	}
`;

const ImgWrap = styled.div`
	box-shadow: var(--shadow);
	border-radius: var(--radius);
	border: var(--border);
	overflow: hidden;
	img {
		transition: transform 0.6s ease;
	}
	&:hover {
		img {
			transform: scale(1.05);
		}
	}
`;

const Content = styled.div`
	@media (min-width: 750px) {
		order: ${({ index }) => index % 2 && "-1"};
		text-align: ${({ index }) => (index % 2 ? "left" : "right")};
		align-items: ${({ index }) => (index % 2 ? "flex-start" : "flex-end")};
	}

	display: flex;
	flex-direction: column;
	gap: 1rem;
	@media (max-width: 750px) {
		display: contents;
		h3 {
			order: -1;
		}
	}

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
		@media (max-width: 850px) {
			${({ index }) =>
				index % 2 ? "margin-right: -4em" : "margin-left: -4em"};
		}
		@media (max-width: 750px) {
			width: 100%;
			margin: 0;
		}
	}
`;
