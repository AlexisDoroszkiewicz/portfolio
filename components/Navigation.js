import Locales from "@components/Locales";
import styled from "@emotion/styled";
import Download from "./Download";
import Socials from "./Socials";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef, useEffect } from "react";

export default function Navigation() {
	const navRef = useRef();

	useEffect(() => {
		const reveal = gsap
			.from(navRef.current, {
				yPercent: -100,
				paused: true,
				duration: 0.4,
				ease: "sine.out",
			})
			.progress(1);

		ScrollTrigger.create({
			start: "top top",
			end: "bottom bottom",
			onUpdate: (self) => {
				if (window.pageYOffset > navRef.current.offsetHeight)
					self.direction === -1 ? reveal.play() : reveal.reverse();
			},
		});
	}, []);

	return (
		<Header ref={navRef}>
			<NavWrap>
				<Nav>
					<Locales />
					<Socials />
					<Download />
				</Nav>
				<Border />
			</NavWrap>
		</Header>
	);
}

const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 99;
	background-color: #fef9fe;
`;

const NavWrap = styled.div`
	padding-inline: 5vw;
	padding-block: 1rem;
	position: relative;
`;

const Nav = styled.nav`
	max-width: 1200px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: var(--step--1);
	font-weight: 600;
	margin-inline: auto;
`;

const Border = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 1px;
	background-color: var(--grey);
`;
