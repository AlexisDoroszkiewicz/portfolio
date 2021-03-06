import styled from "@emotion/styled";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function Timeline({ timeline }) {
	const el = useRef();
	const q = gsap.utils.selector(el);
	const { locale } = useRouter();
	const tl = useRef();

	useEffect(() => {
		const cards = q(".eventCard");
		const dots = q(".dot");
		const lines = q(".line");

		// mobile animation
		if (window.matchMedia("(max-width: 760px)").matches) {
			cards.map((card, index) => {
				tl.current = gsap
					.timeline()
					.delay(index + 2.5)
					.fromTo(card, { opacity: 0 }, { opacity: 1 })
					.fromTo(dots[index], { opacity: 0 }, { opacity: 1 }, "<");
				index != cards.length - 1 &&
					tl.current.fromTo(
						lines[index],
						{ height: 0 },
						{ height: "4.4em" }
					);
				tl.current.timeScale(1.25);
			});
		}
		// desktop animation
		else {
			cards.map((card, index) => {
				tl.current = gsap
					.timeline()
					.delay(index + 2)
					.fromTo(card, { opacity: 0 }, { opacity: 1 })
					.fromTo(dots[index], { opacity: 0 }, { opacity: 1 }, "<");
				index != cards.length - 1 &&
					tl.current.fromTo(
						lines[index],
						{ width: 0 },
						{ width: "100%" }
					);
				tl.current.timeScale(1.25);
			});
		}

		cards.map((card) => {
			let hover = gsap.to(card, {
				scale: 1.1,
				y: "-=50%",
				duration: 0.25,
				paused: true,
				ease: "sine.out",
			});
			card.addEventListener("mouseenter", () => {
				if (window.innerWidth > 760) {
					hover.play();
				}
			});
			card.addEventListener("mouseleave", () => {
				if (window.innerWidth > 760) {
					hover.reverse();
				}
			});
		});

		const handleResize = () => {
			if (window.innerWidth < 760) {
				cards.map((card, index) => {
					card.removeAttribute("style");
					card.style.opacity = 1;
					if (index < cards.length - 1) {
						lines[index].style.width = "1px";
						lines[index].style.height = "4.4em";
					}
				});
			} else {
				cards.map((card, index) => {
					card.removeAttribute("style");
					card.style.opacity = 1;
					if (index < cards.length - 1) {
						lines[index].style.width = "100%";
						lines[index].style.height = "1px";
					}
				});
			}
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
			tl.current.kill();
		};
	}, [locale]);

	return (
		<TimelineContainer ref={el}>
			{timeline.map((event, index) => (
				<Event key={event.id}>
					<Relative>
						<Dot className="dot" />
						<EventCard className="eventCard">
							<EventKey>{event.key}</EventKey>
							<EventDate>{event.date}</EventDate>
						</EventCard>
					</Relative>
					{index < timeline.length - 1 && <Line className="line" />}
				</Event>
			))}
		</TimelineContainer>
	);
}

const TimelineContainer = styled.div`
	display: flex;
	justify-content: space-around;
	@media (max-width: 760px) {
		flex-direction: column;
		width: fit-content;
		gap: 4em;
		align-self: center;
		transform: translateX(-5em);
	}
`;

const Event = styled.div`
	transform: translateX(calc(50% - 0.25rem));
	width: 100%;
	@media (max-width: 760px) {
		width: fit-content;
	}
`;

const Relative = styled.div`
	position: relative;
`;

const Dot = styled.div`
	aspect-ratio: 1 / 1;
	width: 0.5rem;
	background: radial-gradient(
		circle,
		rgba(237, 87, 237, 1) 0%,
		rgba(255, 255, 255, 0) 100%
	);
	border-radius: 50%;
	box-shadow: 0px 0px 4em 0.4em rgb(237, 87, 237);
	opacity: 0;
`;

const Line = styled.div`
	background-color: var(--accent);
	width: 0%;
	height: 1px;
	transform: translateY(-50%) translateX(0.25rem) translateZ(0);
	position: absolute;
	top: 50%;
	left: 0;
	opacity: 0.4;
	box-shadow: 0px 0px 2px 0 rgb(237, 87, 237);
	@media (max-width: 760px) {
		width: 1px;
		transform: translateX(0.25em);
	}
`;

const EventCard = styled.div`
	cursor: default;
	width: max-content;
	position: absolute;
	top: 0;
	left: 0;
	transform: translateY(-110%) translateX(calc(-50% + 0.25rem));
	text-align: center;
	opacity: 0;
	@media (max-width: 760px) {
		text-align: left;
		transform: translateY(-50%) translateX(2em);
	}
`;

const EventKey = styled.p`
	font-weight: 500;
	font-size: var(--step--1);
	@media (max-width: 760px) {
		font-size: var(--step-1);
	}
`;

const EventDate = styled.p`
	font-size: var(--step--2);
	color: var(--accent);
	@media (max-width: 760px) {
		font-size: var(--step--1);
	}
`;
