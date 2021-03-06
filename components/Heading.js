import styled from "@emotion/styled";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import hoverSkew from "@lib/hoverSkew";

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
			hoverSkew(row, index);
		});

		return () => {
			Object.values(document.querySelectorAll(".hwrap")).map((item) => {
				item.style.overflow = "hidden";
			});
		};
	}, [locale]);

	return (
		<div>
			<H1 ref={el}>
				{heading.split(/\n/).map((line, index) => (
					<div key={index} className="hwrap">
						<div className="htext">
							<ReactMarkdown>{line}</ReactMarkdown>
						</div>
					</div>
				))}
			</H1>
		</div>
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
