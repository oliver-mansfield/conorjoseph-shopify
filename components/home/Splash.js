import gsap from "gsap";
import {useEffect, useRef} from "react";

const Splash = () => {
	const splashRef = useRef();
	console.log(splashRef);

	useEffect(() => {
		gsap.timeline().from(splashRef.current, {
			duration: 1,
			ease: "power1.inOut",
			opacity: 0,
		});
	}, []);

	//TODO make the top-[80px] value dynamic to allow for
	//the header being different heights on different devices / browsers
	return (
		<div
			className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-20 bg-black"
			ref={splashRef}
		>
			<div className="md:relative z-30 w-full">
				<div className="md:max-w-5xl mx-auto">
					<div className="splash"></div>
				</div>
			</div>
		</div>
	);
};

export default Splash;
