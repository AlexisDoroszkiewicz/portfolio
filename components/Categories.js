import Image from "next/image";
import styled from "@emotion/styled";

export default function Categories({ categories }) {
	return (
		<Flex>
			{categories.map((category) => {
				const img = category.image;

				return (
					<ImgWrap key={category.id}>
						<Image
							src={img.url}
							width={img.width}
							height={img.height}
							alt={img.alt}
							layout="responsive"
						/>
					</ImgWrap>
				);
			})}
		</Flex>
	);
}

const Flex = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 0.5rem;
`;

const ImgWrap = styled.div`
	width: 2rem;
	aspect-ratio: 1 / 1;
`;
