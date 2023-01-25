import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const RevealImage = ({ imgPath, width, height }) => {
	const imageRef = useRef(null);
	const containerRef = useRef(null);
	const shapeRef = useRef(null);

	// useEffect(() => {
	// 	gsap.from(imageRef.current, {
	// 		y: -30,
	// 		duration: 3,

	// 		scrollTrigger: {
	// 			trigger: imageRef.current,
	// 			markers: true,
	// 			start: "top center",
	// 		},
	// 	});
	// }, []);

	useEffect(() => {
		ScrollTrigger.create({
			trigger: containerRef.current,
			onEnter: runAnimation,
			// markers: true,
			// onLeave: myLeaveFunc,
			// onEnterBack: myEnterFunc,
			// onLeaveBack: myLeaveFunc,
		});
	}, []);

	const runAnimation = () => {
		console.log("run ok");
		gsap.from(shapeRef.current, {
			y: '-100%',
			duration: 0.5,
			delay: 0.5,
			ease: "power3.Out",
		});

		gsap.from(imageRef.current, {
			y: '-100%',
			duration: 0.7,
			delay: 0.7,
			ease: "power3.Out",
		});
	};

	return (
		<div
			ref={containerRef}
			className="overflow-hidden h-[692px] max-w-md relative border-[1px] border-gold border-solid"
		>
			<div
				ref={shapeRef}
				className="w-full h-[692px] bg-gold z-0 absolute"
			></div>
			<div ref={imageRef} className="z-10 relative">
				<Image src={imgPath} layout="responsive" width={width} height={height} />
			</div>
		</div>
	);
};

export default RevealImage;
