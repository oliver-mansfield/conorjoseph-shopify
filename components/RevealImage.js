import {useRef, useEffect} from "react";
import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const RevealImage = ({imgPath}) => {
	const testRef = useRef(null);

	useEffect(() => {
		gsap.from(testRef.current, {
			opacity: 0,
			y: 30,
			duration: 3,

			scrollTrigger: {
				trigger: testRef.current,
				markers: true,
				start: "top center",
			},
		});
	}, []);

	// useEffect(() => {
	// 	ScrollTrigger.create({
	// 		trigger: testRef.current,
	// 		onEnter: runAnimation,
	// 		markers: true,
	// 		// onLeave: myLeaveFunc,
	// 		// onEnterBack: myEnterFunc,
	// 		// onLeaveBack: myLeaveFunc,
	// 	});
	// }, []);

	// const runAnimation = () => {
	// 	console.log("run ok");
	// 	gsap.from(testRef.current, {
	// 		opacity: 0,
	// 		duration: 3,
	// 	});
	// };

	return (
		<div className="">
			<div className="overflow-hidden">
				<div className="max-w-md" ref={testRef}>
					<Image src={imgPath} layout="responsive" width="3300" height="5100" />
				</div>
			</div>
		</div>
	);
};

export default RevealImage;
