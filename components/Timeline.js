import styled from "@emotion/styled";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Timeline({ timeline }) {
	const el = useRef();
	const q = gsap.utils.selector(el);

	useEffect(() => {
		gsap.fromTo(
			q(".dot"),
			{ opacity: 0 },
			{ opacity: 1, duration: 0.25, stagger: 1.25 }
		);
		gsap.fromTo(
			q(".line"),
			{ width: 0 },
			{ width: "100%", duration: 1, stagger: 1.25, ease: "sine.out" }
		);
	}, []);

	return (
		<TimelineContainer ref={el}>
			{timeline.map((event, index) => (
				<Event key={event.id}>
					<EventCard>
						<EventKey>{event.key}</EventKey>
						<EventDate as={"date"}>{event.date}</EventDate>
					</EventCard>
					<DotLineContainer>
						<Dot className="dot" />
						{index < timeline.length - 1 && (
							<Line className="line" />
						)}
					</DotLineContainer>
				</Event>
			))}
		</TimelineContainer>
	);
}

const TimelineContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

const Event = styled.div`
	transform: translateX(50%);
	width: 100%;
`;

const DotLineContainer = styled.div`
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
`;

const Line = styled.div`
	background-color: var(--accent);
	width: 100%;
	height: 1px;
	transform: translateY(-50%) translateX(0.25rem);
	position: absolute;
	top: 50%;
	left: 0;
`;

const EventCard = styled.div`
	width: fit-content;
	font-size: var(--step--1);
	position: absolute;
	top: 0;
	left: 0;
	transform: translateY(-100%);
`;

const EventKey = styled.p``;

const EventDate = styled.p`
	font-size: var(--step--2);
	color: var(--accent);
	background: whitesmoke;
`;
