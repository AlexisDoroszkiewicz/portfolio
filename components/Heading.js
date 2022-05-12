import styled from "@emotion/styled";

export default function Heading({ heading }) {
	return (
		<H1>
			{heading.split(/\n/).map((line, index) => (
				<div key={index}>{line}</div>
			))}
		</H1>
	);
}

const H1 = styled.h1`
	white-space: nowrap;
	div {
		width: fit-content;
		overflow: hidden;
	}
`;
