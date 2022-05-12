import styled from "@emotion/styled";

export default function Timeline({ timeline }) {
	return (
		<TimelineContainer>
			{timeline.map((event, index) => (
				<Event>
					<Dot />
					{index < timeline.length - 1 && <Line />}
					<EventCard key={event.id}>
						<EventKey>{event.key}</EventKey>
						<EventDate as={"date"}>{event.date}</EventDate>
					</EventCard>
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
	position: relative;
	transform: translateX(50%);
	width: 100%;
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
	transform: translateY(-50%);
	position: absolute;
	top: 50%;
	left: 0;
`;

const EventCard = styled.div`
	background-color: white;
	border-radius: var(--radius);
	border: var(--border);
	padding: 0.5em 1em;
	width: fit-content;
	font-size: var(--step--1);
	box-shadow: var(--shadow);
	position: absolute;
	opacity: 0;
`;

const EventKey = styled.p``;

const EventDate = styled.p`
	font-size: var(--step--2);
	color: var(--accent);
	background: whitesmoke;
`;
