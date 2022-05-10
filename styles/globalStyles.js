import { css, Global } from "@emotion/react";
import { reset } from "@styles/reset";

export const globalStyles = (
	<Global
		styles={css`
			${reset}
			:root {
				--shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.2);
				--radius: 4px;
				--border: 1px solid rgba(99, 80, 96, 0.6);
			}
			html {
				font-family: "Roboto", sans-serif;
			}
			body {
				margin: 0;
				background: linear-gradient(
					180deg,
					rgba(255, 255, 255, 1) 0%,
					rgba(255, 126, 222, 0.03407300420168069) 100%
				);
			}
			strong {
				color: rgb(237, 87, 237);
			}
		`}
	/>
);
