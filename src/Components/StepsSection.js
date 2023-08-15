import classes from "./StepsSection.module.css";
import StepCard from "./StepCard";
import stepOne from "../assets/Step_1.png";
import stepTwo from "../assets/Step_2.png";
import stepThree from "../assets/Step_3.png";
import stepFour from "../assets/Step_4.png";
import stepFive from "../assets/Step_5.png";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StepsSection = () => {
  // const el = useRef();
  // const q = gsap.utils.selector(el);

  const tl = useRef();
  const wrapperRef = useRef();
  const cardRef1 = useRef();
  const cardRef2 = useRef();
  const cardRef3 = useRef();
  const cardRef4 = useRef();
  const cardRef5 = useRef();

  useLayoutEffect(() => {
    ScrollTrigger.saveStyles([
      wrapperRef.current,
      cardRef1.current,
      cardRef2.current,
      cardRef3.current,
      cardRef4.current,
      cardRef5.current,
    ]);

    ScrollTrigger.matchMedia({
      "(min-width: 470px)": function () {
        tl.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "75px bottom",
              end: "+=350",
              scrub: 3,
              ease: "elastic",
            },
          })
          .from(cardRef1.current, {
            y: "75%",
            opacity: 0,
            duration: 0.2,
            stagger: 0.2,
          })
          .from(cardRef2.current, {
            stagger: 0.2,
            y: "75%",
            opacity: 0,
            duration: 0.2,
          })
          .from(cardRef3.current, {
            stagger: 0.2,
            y: "75%",
            opacity: 0,
            duration: 0.2,
          })
          .from(cardRef4.current, {
            stagger: 0.2,
            y: "75%",
            opacity: 0,
            duration: 0.2,
          })
          .from(cardRef5.current, {
            stagger: 0.2,
            y: "75%",
            opacity: 0,
            duration: 0.2,
          });
      },

      "(max-width: 469px)": function () {
        tl.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "75px bottom",
              end: "bottom 400px",
              scrub: .2,
              ease: "elastic",
            },
          })
          .from(cardRef1.current, {
            y: "75%",
            opacity: 0,
            duration: 0.2,
            stagger: 0.2,
          })
          .from(cardRef2.current, {
            stagger: 0.2,
            y: "75%",
            opacity: 0,
            duration: 0.2,
          })
          .from(cardRef3.current, {
            stagger: 0.2,
            y: "75%",
            opacity: 0,
            duration: 0.2,
          })
          .from(cardRef4.current, {
            stagger: 0.2,
            y: "75%",
            opacity: 0,
            duration: 0.2,
          })
          .from(cardRef5.current, {
            stagger: 0.2,
            y: "75%",
            opacity: 0,
            duration: 0.2,
          });
      },

    });
  }, []);

  return (
    <div ref={wrapperRef} className={classes.cardWrapper}>
      <div ref={cardRef1}>
        <StepCard
          src={stepOne}
          alt="Step One"
          title="Step One:"
          content="Sign up for beta"
        />
      </div>
      <div ref={cardRef2}>
        <StepCard
          ref={cardRef2}
          src={stepTwo}
          alt="Step Two"
          title="Step Two:"
          content="Receive a private invite link once we launch (winter 2023)"
        />
      </div>
      <div ref={cardRef3}>
        <StepCard
          ref={cardRef3}
          src={stepThree}
          alt="Step Three"
          title="Step Three:"
          content="Complete your profile and connect to your Facebook page"
        />
      </div>
      <div ref={cardRef4}>
        <StepCard
          ref={cardRef4}
          src={stepFour}
          alt="Step Four"
          title="Step Four:"
          content="Add your schedule and menu"
        />
      </div>
      <div ref={cardRef5}>
        <StepCard
          ref={cardRef5}
          src={stepFive}
          alt="Step Five"
          title="Step Five:"
          content="Copy code snippet to your schedule and menu pages on your website"
        />
      </div>
    </div>
  );
};

export default StepsSection;
