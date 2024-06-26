import gsap from "gsap/dist/all";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Intro = () => {
	const splashVisible = useSelector((state) => state.app.splashVisible);
	const introRef = useRef(null);

	//When splashVisible changes to true,
	//Fade out this element to prevent overlapping when the image moves
	useEffect(() => {
		if (splashVisible) {
			gsap.timeline().to(introRef.current, {
				duration: 0.5,
				ease: "power3.inOut",
				opacity: 0,
			});
		}
	}, [splashVisible]);

	return (
		<div className="p-6 md:p-10 my-8 lg:my-40" ref={introRef}>
			<div className="max-w-2xl grid grid-cols sm:grid-cols-2 gap-5 mx-auto">
				<p className="leading-8 text-lg md:text-xl first-letter:text-7xl md:leading-8">
					Second Skin is the latest collection by Conor Joseph, which sees the
					Jewellery artist pay homage to the human body and its varying
					differences and uniqueness.
				</p>
				<p className="leading-8 text-lg mt-2 md:text-xl md:leading-8 md:mt-[38px]">
					The collection is made of 30 pieces, all made on fine gold plated
					silver, hand crafted in London’s prestigious Hatton Garden. Like most
					of Conor’s work, Second Skin is a dark and obscure collection, yet his
					use of often-uncelebrated details of the skin such as wrinkles,
					freckles and scarring creates provokes feelings of intimacy and
					poeticism.
				</p>
			</div>
		</div>
	);
};

export default Intro;
