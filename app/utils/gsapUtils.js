import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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

// Bounce and fade-in from the right
export const bounceFadeInFromLeft = (element) => {
  gsap.fromTo(
    element,
    {
      x: "-15%",
      opacity: 0,
    },
    {
      x: "0%",
      opacity: 1,
      duration: 1.5,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
};

/**
 * @param {HTMLElement} element
 */
export const splitTextIntoSpans = (element) => {
  const text = element.textContent;
  const splitText = text.split("");
  const wrappedText = splitText
    .map((letter) =>
      letter === " "
        ? `<span style="opacity: 0; display: inline-block; width: 0.3em;">&nbsp;</span>`
        : `<span style="opacity: 0; display: inline-block;">${letter}</span>`
    )
    .join("");

  element.innerHTML = wrappedText;
};

/**
 * @param {HTMLElement} element
 */
export const fadeInTextLetterByLetter = (element) => {
  splitTextIntoSpans(element);

  const letters = element.querySelectorAll("span");

  gsap.fromTo(
    letters,
    {
      opacity: 0,
      y: 25,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
        onLeaveBack: () => ScrollTrigger.refresh(),
      },
    }
  );
};

/**
 * @param {HTMLElement} button
 * @param {HTMLElement} targetSection
 */
export const scrollToSection = (button, targetSection) => {
  button.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1.5, // Duration of the scroll
      scrollTo: {
        y: targetSection, // Scroll to the target section
        offsetY: 60, // Adjust offset if needed
      },
      ease: "power2.inOut", // Easing function
    });
  });
};