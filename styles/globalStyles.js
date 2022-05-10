import { css, Global } from "@emotion/react";

export const globalStyles = (
	<Global
		styles={css`
			html {
				font-family: "Roboto", sans-serif;
			}
			body {
				margin: 0;
				background: papayawhip;
			}
		`}
	/>
);
