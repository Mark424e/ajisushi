import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animation for moving images up or down
export const animateImagePosition = (imagePosRef, imageNegRef) => {
  gsap.defaults({ ease: "none" });

  gsap.to(imagePosRef.current, {
    y: -32,
    scrollTrigger: {
      trigger: imagePosRef.current,
      start: "top bottom",
      end: "+=500",
      scrub: 3,
    },
  });

  gsap.to(imageNegRef.current, {
    y: 32,
    scrollTrigger: {
      trigger: imageNegRef.current,
      start: "top bottom",
      end: "+=500",
      scrub: 3,
    },
  });
};

// Parallax effect animation
export const setupParallaxEffect = (imageParallaxRef) => {
  gsap.to(imageParallaxRef.current, {
    y: "-50%",
    ease: "none",
    scrollTrigger: {
      trigger: imageParallaxRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
};

// Fade-in effect animation
export const setupFadeInEffect = () => {
  gsap.utils.toArray(".fade-in").forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });
};
