import { css, Global } from "@emotion/react";
import { reset } from "@styles/reset";

export const globalStyles = (
	<Global
		styles={css`
			${reset}
			:root {
				--shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.1);
				--radius: 4px;
				--grey: rgba(99, 80, 96, 0.6);
				--border: 1px solid var(--grey);
				--accent: rgb(237, 74, 237);
				--accentAlpha: rgba(237, 87, 237, 0.01);
				--fontColor: rgb(35, 20, 35);

				--step--2: clamp(0.61rem, calc(0.58rem + 0.16vw), 0.72rem);
				--step--1: clamp(0.73rem, calc(0.68rem + 0.24vw), 0.9rem);
				--step-0: clamp(0.88rem, calc(0.8rem + 0.36vw), 1.13rem);
				--step-1: clamp(1.05rem, calc(0.95rem + 0.51vw), 1.41rem);
				--step-2: clamp(1.26rem, calc(1.12rem + 0.71vw), 1.76rem);
				--step-3: clamp(1.51rem, calc(1.32rem + 0.98vw), 2.2rem);
				--step-4: clamp(1.81rem, calc(1.55rem + 1.33vw), 2.75rem);
				--step-5: clamp(2.18rem, calc(1.82rem + 1.79vw), 3.43rem);
			}
			html {
				font-family: "Roboto", sans-serif;
				font-size: var(--step-0);
				overflow-x: hidden;
				color: var(--fontColor);
			}
			h1,
			h2,
			h3 {
				font-family: "Montserrat", sans-serif;
				${"" /* font-weight: 600; */}
			}
			h1 {
				font-size: var(--step-4);
			}
			h2 {
				font-size: var(--step-3);
			}
			h3 {
				font-size: var(--step-2);
			}
			h4 {
				font-size: var(--step-1);
			}
			body {
				margin: 0;
				background: linear-gradient(
						195deg,
						rgba(255, 255, 255, 0) 0%,
						var(--accentAlpha) 100%
					),
					linear-gradient(
						45deg,
						rgba(255, 255, 255, 0) 0%,
						var(--accentAlpha) 100%
					);
			}
			strong {
				color: var(--accent);
			}
			/* width */
			::-webkit-scrollbar {
				width: 8px;
				@media (max-width: 760px) {
					width: 4px;
				}
			}

			/* Track */
			::-webkit-scrollbar-track {
				background: linear-gradient(
						195deg,
						rgba(255, 255, 255, 0) 0%,
						var(--accentAlpha) 100%
					),
					linear-gradient(
						45deg,
						rgba(255, 255, 255, 0) 0%,
						var(--accentAlpha) 100%
					);
				border-left: 1px solid var(--grey);
			}

			/* Handle */
			::-webkit-scrollbar-thumb {
				background: var(--accent);
			}

			/* Handle on hover */
			::-webkit-scrollbar-thumb:hover {
				background: #555;
			}
		`}
	/>
);
