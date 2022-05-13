import { gsap } from "gsap";

export default function hoverSkew(element, index = false) {
	let hover = gsap.to(element, {
		skewX: index ? (index % 2 == 0 ? "+=10" : "-=10") : "+=10",
		x: "+=0.5ch",
		duration: 0.25,
		paused: true,
		ease: "sine.out",
	});
	element.addEventListener("mouseenter", () => hover.play());
	element.addEventListener("mouseleave", () => hover.reverse());
}
