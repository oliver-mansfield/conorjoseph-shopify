import Image from 'next/image';
import { useRef, useEffect } from 'react';

import gsap from "gsap/dist/all";
import Flip from "gsap/dist/Flip";
import { useDispatch, useSelector } from "react-redux";
import { showSplash, hideSplash } from "stores/appSlice";

gsap.registerPlugin(Flip);

const Articulus = () => {

  const productImageRef = useRef([]);
  const dispatch = useDispatch();

  //Reset
  useEffect(() => {
    dispatch(hideSplash());
  }, []);

  const handleClick = () => {

    dispatch(showSplash());

    setTimeout(() => {
      const flipState = Flip.getState(productImageRef.current);
      const splash = document.querySelector(".splash");

      splash.appendChild(productImageRef.current);

      Flip.from(flipState, {
        duration: 0.8,
        ease: "power3.inOut",
        absolute: true,
        // onComplete: myFunc,
      });
    }, 100);
  }


  return (
    <div>
      <section>

        <div className='relative max-w-[700px] text-center'>
          <div className='mx-auto max-w-xs'>
            <h2>The Articulus Ring</h2>
            <div className='text-white'>This Anatomical Ring combines surreal aesthetic and technical design to create a sense of mechanicalism that reflects the dexterity and movement of the fingers.
            </div>
          </div>
          <div className='max-w-700px h-[452px]'>
            <div className='w-full h-full' ref={productImageRef}>
              <Image src="/images/articulus-product.jpg"
                layout="responsive"
                width="5100"
                height="3300"
                quality="100"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Articulus;