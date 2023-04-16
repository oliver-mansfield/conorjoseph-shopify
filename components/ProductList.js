import { useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import gsap from "gsap/dist/all";
import Flip from "gsap/dist/Flip";
import { useDispatch, useSelector } from "react-redux";
import { showSplash, hideSplash } from "stores/appSlice";
import Button from "components/elements/Button";
import ModelsGallery from "./product-page/ModelsGallery";

gsap.registerPlugin(Flip);

const ProductList = ({ products }) => {
	const productItemsRef = useRef([]);
	const productImageContainerRef = useRef([]);
	const productImageRef = useRef([]);
	const productTitleRef = useRef([]);
	const productButtonRef = useRef([]);
	const modelsGalleryRef = useRef([]);
	const theCollectionRef = useRef(null);
	const router = useRouter();

	// const splashVisible = useSelector((state) => state.app.splashVisible);
	const dispatch = useDispatch();

	//Reset
	useEffect(() => {
		dispatch(hideSplash());
	}, []);

	const handleClick = (product, index) => {

		//Create an array of indexes of all the items except the one which was clicked (index)
		const arrayOfIndexes = [];

		for (let i = 0; i < productItemsRef.current.length; i++) {
			if (i !== index) {
				arrayOfIndexes.push(i);
			}
		}

		//FADE OUT OTHER ITEMS
		//Run the animation on all items found in the arrayOfIndexes
		for (let i = 0; i < arrayOfIndexes.length; i++) {
			gsap.timeline().to(productItemsRef.current[arrayOfIndexes[i]], {
				opacity: 0,
				// rotation: 5,
				// skewY: 3,
				// scale: 0.8,
				// y: 30,
				duration: 0.5,
				ease: "power3.inOut",
			});
		}

		//Fade out clicked item title, button and model images
		//TODO rewrite this to animate all in one func
		gsap.timeline().to(productTitleRef.current[index], {
			duration: 0.1,
			ease: "power3.inOut",
			opacity: 0,
		});

		gsap.timeline().to(productButtonRef.current[index], {
			duration: 0.1,
			ease: "power3.inOut",
			opacity: 0,
		});

		gsap.timeline().to(modelsGalleryRef.current[index], {
			duration: 0.1,
			ease: "power3.inOut",
			opacity: 0,
		});

		gsap.timeline().to(theCollectionRef.current, {
			duration: 0.1,
			ease: "power3.inOut",
			opacity: 0,
		});

		//Prevent layout from collapsing when image is move to splash
		const height = productImageRef.current[index].clientHeight;
		productImageContainerRef.current[index].style.height = `${height}px`;

		dispatch(showSplash());

		//TODO make this a callback after the gsap timeline plays
		//rather than a setTimeout
		setTimeout(() => {
			const flipState = Flip.getState(productImageRef.current[index]);
			const splash = document.querySelector(".splash");
			console.log(productImageRef.current[index])

			splash.appendChild(productImageRef.current[index]);

			Flip.from(flipState, {
				duration: 0.8,
				ease: "power3.inOut",
				absolute: true,
				// onComplete: myFunc,
			});
		}, 100);

		//Finally route to that page
		setTimeout(() => {
			router.push(`/products/${product.node.handle}`);
		}, 750);
	};

	return (
		<>
			<div className="container" ref={theCollectionRef}>
				<h3 className="text-center border-b-[1px] border-white pb-2 max-w-md mx-auto px-2">The Collection</h3>
			</div>
			<div className="product-list ">
				{products.map((product, index) => (

					<section
						className={`grid grid-cols-12 gap-4 mt-10 md:mt-20 ${product.node.handle}`} //TODO get this arbitary media query working or define a tweak point
						key={product.node.id}
						ref={(el) => {
							productItemsRef.current.push(el);
						}}
					>

						<div className="product-details-container
						lg:mt-20">
							<div
								className="text-center flex flex-col items-center"
								ref={(el) => {
									productTitleRef.current.push(el);
								}}
							>
								<h2 className="perspective-text mb-2">{product.node.title}</h2>
								<p className='text-white max-w-[300px] text-center font-sans hidden md:block'>{product.node.description}</p>
							</div>

							<div ref={(el) => {
								productImageContainerRef.current.push(el);
							}}>
								<div
									className="image-container cursor-pointer"
									ref={(el) => {
										productImageRef.current.push(el);
									}}
									onClick={() => {
										handleClick(product, index);
									}}
								>
									<Image
										src={product.node.images.edges[0].node.originalSrc}
										width="1400"
										height="750"
										layout="responsive"
										quality="100"
									// priority
									/>
								</div>
							</div>

							<button ref={(el) => {
								productButtonRef.current.push(el);
							}}
								className='button'
								onClick={() => {
									handleClick(product, index);
								}}>
								View Product
							</button>
						</div>

						<div className="hidden md:block models-gallery-outer">
							<div className="models-gallery-inner" ref={(el) => {
								modelsGalleryRef.current.push(el);
							}} >
								<ModelsGallery productData={product.node} />
							</div>
						</div>

					</section>
				))}
			</div>
		</>
	);
};

export default ProductList;
