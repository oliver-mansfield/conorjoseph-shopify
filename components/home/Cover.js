import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap/dist/all";
import { useSelector } from "react-redux";

const Cover = () => {
	const splashVisible = useSelector((state) => state.app.splashVisible);

	const coverRef = useRef(null);
	const lineRef = useRef(null);
	const conorRef = useRef(null);
	const skinRef = useRef(null);
	const girlRef = useRef(null);
	const guyRef = useRef(null);

	useEffect(() => {
		gsap.timeline().from(conorRef.current, {
			y: "65px",
			duration: 1.5,
			ease: "power3.inOut",
			delay: 0.5,
		});
		gsap.timeline().from(skinRef.current, {
			y: "-60px",
			duration: 1.5,
			ease: "power3.inOut",
			delay: 0.5,
		});
		gsap.timeline().from(girlRef.current, {
			x: "30px",
			opacity: 0,
			duration: 1.5,
			ease: "power3.inOut",
			delay: 0.5,
		});
		gsap.timeline().from(guyRef.current, {
			x: "-30px",
			opacity: 0,
			duration: 1.5,
			ease: "power3.inOut",
			delay: 0.5,
		});
		gsap.timeline().from(lineRef.current, {
			width: "0px",
			duration: 1,
			ease: "power3.inOut",
			delay: 1.5,
		});
	}, []);

	//When splashVisible changes to true,
	//Fade out this element to prevent overlapping when the image moves
	useEffect(() => {
		if (splashVisible) {
			gsap.timeline().to(coverRef.current, {
				duration: 0.5,
				ease: "power3.inOut",
				opacity: 0,
			});
		}
	}, [splashVisible]);

	return (
		<>
			<div className="gradient-bg-cover h-screen" ref={coverRef}>
				<div className="relative h-screen overflow-hidden">
					<div className="absolute z-0 h-full w-full top-32 left-0 sm:top-0 sm:flex items-center justify-center">
						<div className="relative w-full">
							<div className="absolute w-full bottom-1/2 flex justify-center overflow-hidden pb-5">
								<h1 ref={conorRef}>CONOR JOSEPH</h1>
							</div>
							<div className="absolute w-full top-1/2 flex justify-center">
								<hr className="w-full" ref={lineRef} />
							</div>
							<div className="absolute w-full top-1/2 flex justify-center overflow-hidden pt-5">
								<h1 ref={skinRef}>SECOND SKIN</h1>
							</div>
						</div>
					</div>

					<div
						className="w-[345px] sm:w-[400px] lg:w-[500px] absolute left-[-110px] lg:left-[-100px] xl:left-0 bottom-0 z-10"
						ref={girlRef}
					>
						<Image
							src="/images/girl.png"
							layout="responsive"
							width="647"
							height="1000"
							priority
						/>
					</div>
					<div
						className="w-[345px] sm:w-[400px] lg:w-[500px] absolute right-[-110px] lg:right-[-100px] xl:right-0 bottom-0"
						ref={guyRef}
					>
						<Image
							src="/images/guy.png"
							layout="responsive"
							width="647"
							height="1000"
							priority
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cover;
