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

const Articulus = ({ products }) => {

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
    dispatch(showSplash())
    clickedAnimation(productImageRef.current);

    //Finally route to that page
    setTimeout(() => {
      router.push(`/products/the-articulus-ring`);
    }, 750);
  }


  return (
    <div>
      <section className='md:grid grid-cols-12 gap-4' ref={componentRef}>
        <div className='relative text-center row-span-full col-start-2 col-end-7'>
          <div className='mx-auto max-w-xs'>
            <h2>The Articulus Ring</h2>
            <div className='text-white'>This Anatomical Ring combines surreal aesthetic and technical design to create a sense of mechanicalism that reflects the dexterity and movement of the fingers.
            </div>
          </div>
          <div className='h-[600px]'>
            <div className='w-full h-full' ref={productImageRef}>
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
        </div>


        <div className='row-span-full col-start-7 col-end-9'>
          {/* <RevealImage imgPath='/images/articulus-model-1.jpg' height='5100' width='3000' /> */}
          <Image src="/images/articulus-model-1.jpg"
            layout="responsive"
            width="3300"
            height="5100"
            quality="100"
            priority
          />
        </div>

        <div className='row-span-full col-start-9 col-end-13'>
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