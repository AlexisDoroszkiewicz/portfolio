import styled from "@emotion/styled";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

export default function Heading({ heading }) {
	const { locale } = useRouter();
	const el = useRef();
	const q = gsap.utils.selector(el);

	useEffect(() => {
		const rows = q(".htext");

		gsap.fromTo(
			q(".htext"),
			{ y: "100%" },
			{
				y: "0%",
				duration: 0.5,
				stagger: 0.25,
				onComplete: () => {
					Object.values(document.querySelectorAll(".hwrap")).map(
						(item) => {
							item.style.overflow = "visible";
						}
					);
				},
			}
		);

		rows.map((row, index) => {
			let hover = gsap.to(row, {
				skewX: index % 2 == 0 ? "+=10" : "-=10",
				x: "+=0.5ch",
				duration: 0.25,
				paused: true,
				ease: "sine.out",
			});
			row.addEventListener("mouseenter", () => hover.play());
			row.addEventListener("mouseleave", () => hover.reverse());
		});

		return () => {
			Object.values(document.querySelectorAll(".hwrap")).map((item) => {
				item.style.overflow = "hidden";
			});
		};
	}, [locale]);

	return (
		<H1 ref={el}>
			{heading.split(/\n/).map((line, index) => (
				<div key={index} className="hwrap">
					<div className="htext">
						<ReactMarkdown>{line}</ReactMarkdown>
					</div>
				</div>
			))}
		</H1>
	);
}

const H1 = styled.h1`
	white-space: nowrap;
	.hwrap {
		width: fit-content;
		overflow: hidden;
	}
	.htext {
		transform: translateY(100%);
	}
`;
