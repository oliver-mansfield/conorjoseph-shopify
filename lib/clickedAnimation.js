import gsap from "gsap/dist/all";
import Flip from "gsap/dist/Flip";
gsap.registerPlugin(Flip);

const clickedAnimation = (ref) => {

  setTimeout(() => {
    const flipState = Flip.getState(ref);
    const splash = document.querySelector(".splash");

    splash.appendChild(ref);

    Flip.from(flipState, {
      duration: 0.8,
      ease: "power3.inOut",
      nested: true
      // absolute: true,
      // onComplete: myFunc,
    });
  }, 100);
}

export default clickedAnimation;