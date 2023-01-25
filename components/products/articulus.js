import Image from 'next/image';
import clickedAnimation from 'lib/clickedAnimation';
import { useRef, useEffect } from 'react';

import gsap from "gsap/dist/all";
import Flip from "gsap/dist/Flip";
import { useDispatch, useSelector } from "react-redux";
import { showSplash, hideSplash } from "stores/appSlice";
// import RevealImage from 'components/RevealImage';

gsap.registerPlugin(Flip);

const Articulus = () => {

  const productImageRef = useRef([]);
  const dispatch = useDispatch();

  //Reset
  useEffect(() => {
    dispatch(hideSplash());
  }, []);

  const handleClick = () => {
    dispatch(showSplash())
    clickedAnimation(productImageRef.current);
  }


  return (
    <div>
      <section className='md:grid grid-cols-12 gap-4'>
        <div className='relative text-center row-span-full col-start-2 col-end-7'>
          <div className='mx-auto max-w-xs'>
            <h2>The Articulus Ring</h2>
            <div className='text-white'>This Anatomical Ring combines surreal aesthetic and technical design to create a sense of mechanicalism that reflects the dexterity and movement of the fingers.
            </div>
          </div>
          <div className='h-[600px]'>
            <div className='w-full h-full' ref={productImageRef}>
              <Image src="/images/articulus-product.jpg"
                layout="responsive"
                width="5100"
                height="3300"
                quality="70"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>


        <div className='row-span-full col-start-7 col-end-9'>
          {/* <RevealImage imgPath='/images/articulus-model-1.jpg' height='5100' width='3000' /> */}
          <Image src="/images/articulus-model-1.jpg"
            layout="responsive"
            width="3300"
            height="5100"
            quality="100"
          />
        </div>

        <div className='row-span-full col-start-9 col-end-13'>
          <Image src="/images/articulus-model-2.jpg"
            layout="responsive"
            width="3300"
            height="5100"
            quality="70"
          />
        </div>



      </section>
    </div>
  );
}

export default Articulus;