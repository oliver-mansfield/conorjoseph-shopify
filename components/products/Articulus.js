import Image from 'next/image';
import clickedAnimation from 'lib/clickedAnimation';
import { useRef, useEffect } from 'react';
import { useRouter } from "next/router";
import gsap from "gsap/dist/all";
import Flip from "gsap/dist/Flip";
import { useDispatch, useSelector } from "react-redux";
import { showSplash, hideSplash } from "stores/appSlice";
import Button from 'components/elements/Button';
// import RevealImage from 'components/RevealImage';

gsap.registerPlugin(Flip);

const Articulus = ({ products }) => {

  const productImageContainerRef = useRef(null)
  const productImageRef = useRef([]);
  const componentRef = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const splashVisible = useSelector((state) => state.app.splashVisible);

  //Reset
  useEffect(() => {
    dispatch(hideSplash());
  }, []);

  useEffect(() => {
    if (splashVisible) {
      gsap.timeline().to(componentRef.current, {
        duration: 0.5,
        ease: "power3.inOut",
        opacity: 0,
      });
    }
  }, [splashVisible]);

  const handleClick = () => {

    //Prevent layout from collapsing when image is move to splash
    const height = productImageRef.current.clientHeight;
    productImageContainerRef.current.style.height = `${height}px`;

    dispatch(showSplash())
    clickedAnimation(productImageRef.current);

    //Finally route to that page
    setTimeout(() => {
      router.push(`/products/the-articulus-ring`);
    }, 750);
  }


  return (
    <div>
      <section className='grid grid-cols-12 gap-4 mt-20' ref={componentRef}>
        <div className='text-center col-start-2 col-end-12 md:row-span-full md:col-start-2 md:col-end-7
        lg:mt-20'>
          <div className='mx-auto max-w-xs'>
            <h2 className='mb-4'>The Articulus Ring</h2>
            <div className='text-white'>This Anatomical Ring combines surreal aesthetic and technical design to create a sense of mechanicalism that reflects the dexterity and movement of the fingers.
            </div>
          </div>

          <div ref={productImageContainerRef}>
            <div className='cursor-pointer' ref={productImageRef}>
              <Image src={products[0].node.images.edges[0].node.originalSrc}
                layout="responsive"
                width="1400"
                height="750"
                quality="100"
                onClick={handleClick}
                priority
              />
            </div>
          </div>
          <button className='button' onClick={handleClick}>View Product</button>
        </div>

        <div className='hidden md:block md:row-span-full md:col-start-7 md:col-end-9'>
          {/* <RevealImage imgPath='/images/articulus-model-1.jpg' height='5100' width='3000' /> */}
          <Image src="/images/articulus-model-1.jpg"
            layout="responsive"
            width="3300"
            height="5100"
            quality="100"
            priority
          />
        </div>

        <div className='col-start-2 col-end-12 md:row-span-full md:col-start-9 md:col-end-13'>
          <Image src="/images/articulus-model-2.jpg"
            layout="responsive"
            width="3300"
            height="5100"
            quality="70"
            priority
          />
        </div>



      </section>
    </div>
  );
}

export default Articulus;