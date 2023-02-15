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

const Manibus = ({ products }) => {

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
      router.push(`/products/the-manibus-ring`);
    }, 750);
  }


  return (
    <div>
      <section className='grid grid-cols-12 gap-4 mt-20' ref={componentRef}>
        <div className='text-center col-start-2 col-end-12 
        md:row-span-full md:col-start-2 md:col-end-7
        lg:mt-20'>
          <div className='mx-auto max-w-xs'>
            <h2>The Manibus Ring</h2>
            <div className='text-white'>
              Celebrating the elegant curve of the hand, The Manibus ring captures attention and imagination with its trompe l’oeil aesthetic, created using a skin textured pattern which juxtaposes the ultra moulded fit.
              <br />
              18 carat Gold plated triple finger ring, Bespoke fit.
            </div>
          </div>
          <div>
            <div className='w-full h-full' ref={productImageRef}>
              <Image src={products[2].node.images.edges[0].node.originalSrc}
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

        <div className='hidden md:block row-span-full col-start-9 col-end-13'>
          <Image src="/images/manibus-model-2.jpg"
            layout="responsive"
            width="3300"
            height="5100"
            quality="70"
          />
        </div>
        <div className='col-start-2 col-end-12 md:row-span-full md:col-start-8 md:col-end-10 md:mt-10'>
          <Image src="/images/manibus-model-1.jpg"
            layout="responsive"
            width="3300"
            height="5100"
            quality="100"
          />
        </div>





      </section >
    </div >
  );
}

export default Manibus;