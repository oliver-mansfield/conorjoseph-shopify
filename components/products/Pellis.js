import Image from 'next/image';
import clickedAnimation from 'lib/clickedAnimation';
import { useRef, useEffect } from 'react';
import { useRouter } from "next/router";
import gsap from "gsap/dist/all";
import Flip from "gsap/dist/Flip";
import { useDispatch, useSelector } from "react-redux";
import { showSplash, hideSplash } from "stores/appSlice";
// import RevealImage from 'components/RevealImage';

gsap.registerPlugin(Flip);

const Pellis = ({ products }) => {

  const componentRef = useRef();
  const productImageRef = useRef([]);
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
    dispatch(showSplash())
    clickedAnimation(productImageRef.current);

    //Finally route to that page
    setTimeout(() => {
      router.push(`/products/the-pellis-ring`);
    }, 750);
  }


  return (
    <div>
      <section className='grid grid-cols-12 gap-4 mt-20' ref={componentRef}>
        <div className='text-center col-start-2 col-end-12 
        md:row-span-full md:col-start-7 md:col-end-12
        lg:mt-20'>
          <div className='mx-auto max-w-xs'>
            <h2>The Pellis Ring</h2>
            <div className='text-white'>
              The Pellis thumb ring rests in sync with the knuckle generating a strong and striking identity.<br />

              18 carat gold plated sterling silver ring, Bespoke fit.
            </div>
          </div>
          <div>
            <div className='w-full h-full' ref={productImageRef}>
              <Image src={products[1].node.images.edges[0].node.originalSrc}
                layout="responsive"
                width="1400"
                height="750"
                quality="100"
                onClick={handleClick}
                priority
              />
            </div>
            <button className='button' onClick={handleClick}>View Product</button>
          </div>
        </div>

        <div className='col-start-2 col-end-12 md:row-span-full md:col-start-2 md:col-end-6'>
          {/* <RevealImage imgPath='/images/articulus-model-1.jpg' height='5100' width='3000' /> */}
          <Image src="/images/pellis-model.jpg"
            layout="responsive"
            width="3300"
            height="5100"
            quality="100"
          />
        </div>
        {/* 
        <div className='row-span-full col-start-9 col-end-13'>
          <Image src="/images/articulus-model-2.jpg"
            layout="responsive"
            width="3300"
            height="5100"
            quality="70"
          />
        </div> */}



      </section >
    </div >
  );
}

export default Pellis;