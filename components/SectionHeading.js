import styled from "@emotion/styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from "react";

export default function SectionHeading({ children }) {
	const h2ref = useRef();
	const underline = useRef();
	const tl = useRef();

	useEffect(() => {
		tl.current = gsap
			.timeline({
				scrollTrigger: {
					trigger: h2ref.current,
					start: "bottom bottom",
					end: "top 10%",
					scrub: 1,
				},
			})
			.fromTo(h2ref.current, { width: "0%" }, { width: "100%" })
			.fromTo(
				underline.current,
				{ width: "0%" },
				{ width: "100%" },
				"<25%"
			);
	}, []);
	return (
		<H2>
			<div ref={h2ref}>
				{children}
				<Underline ref={underline} />
			</div>
		</H2>
	);
}

const H2 = styled.h2`
	width: fit-content;
	position: relative;
	div {
		overflow: hidden;
		white-space: nowrap;
	}
`;

const Underline = styled.div`
	position: absolute;
	height: 1px;
	background-color: var(--grey);
	box-shadow: 0px 0px 2px 0 rgb(237, 87, 237, 0.2);
`;
