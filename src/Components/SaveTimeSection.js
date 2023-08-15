import { Link } from "react-scroll";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
import classes from "./SaveTimeSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const SaveTimeSection = () => {
  // const el = useRef();
  // const q = gsap.utils.selector(el);

  // ugly but temporary solution...many refs...
  const tl = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();
  const buttonRef = useRef();
  const imgRef = useRef();

  useLayoutEffect(() => {
    ScrollTrigger.saveStyles([
      titleRef.current,
      bodyRef.current,
      buttonRef.current,
      imgRef.current,
    ]);

    ScrollTrigger.matchMedia({
      // large
      "(min-width: 2000px)": function () {
        // setup animations and ScrollTriggers for screens 2000px wide or greater...
        // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
        tl.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: imgRef.current,
              start: "30% bottom",
              end: "+=450px",
              scrub: 2.45,
              // end: () => `+=${imgRef.current.offsetHeight}%`,
            },
          })
          .from(titleRef.current, {
            duration: 2.2,
            opacity: 0,
            ease: "power1.out",
            y: "100%",
          })
          .from(
            bodyRef.current,
            { duration: 2.2, opacity: 0, ease: "power1.out", y: "100%" },
            "<"
          )
          .from(
            buttonRef.current,
            {
              duration: 2.2,
              opacity: 0,
              ease: "power1.out",
              y: "100%",
            },
            "<"
          )
          .from(
            imgRef.current,
            { duration: 2, opacity: 0, ease: "power1.out", x: "100%" },
            "<"
          );
      },

      "(min-width: 1500px)": function () {
        tl.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: imgRef.current,
              start: "50% bottom",
              end: "+=450px",
              scrub: 2.45,
            },
          })
          .from(titleRef.current, {
            duration: 2.2,
            opacity: 0,
            ease: "power1.out",
            y: "100%",
          })
          .from(
            bodyRef.current,
            { duration: 2.2, opacity: 0, ease: "power1.out", y: "100%" },
            "<"
          )
          .from(
            buttonRef.current,
            {
              duration: 2.2,
              opacity: 0,
              ease: "power1.out",
              y: "100%",
            },
            "<"
          )
          .from(
            imgRef.current,
            { duration: 2, opacity: 0, ease: "power1.out", x: "100%" },
            "<"
          );
      },

      "(max-width: 1499px)": function () {
        tl.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: imgRef.current,
              start: "90% bottom",
              end: "+=250px",
              scrub: 2.45,
            },
          })
          .from(titleRef.current, {
            duration: 2.2,
            opacity: 0,
            ease: "power1.out",
            y: "100%",
          })
          .from(
            bodyRef.current,
            { duration: 2.2, opacity: 0, ease: "power1.out", y: "100%" },
            "<"
          )
          .from(
            buttonRef.current,
            {
              duration: 2.2,
              opacity: 0,
              ease: "power1.out",
              y: "100%",
            },
            "<"
          )
          .from(
            imgRef.current,
            { duration: 2, opacity: 0, ease: "power1.out", x: "100%" },
            "<"
          );
      },
    });
  }, []);

  return (
    <section className={classes.wrapper}>
      <div className={classes.grid}>
        <div className={classes.content}>
          <h2 ref={titleRef} className={classes.title}>
            <span className={classes.bold}>Save Time</span> So You Can Focus On
            Your Food and Your Customers
          </h2>
          <p ref={bodyRef} className={classes.body}>
            We know how hard it can be to keep all of your information up to
            date when you’re trying to prep food, deal with truck maintenance,
            and land more events on a regular basis. We’re here to help save you
            time and make your business easier to manage online so can focus on
            growing your food truck!
          </p>
          <Link to="Form" smooth={true} offset={-110} duration={500}>
            <div className={classes.btn}>
              <div ref={buttonRef}>
                <Button text="Save Time" />
              </div>
            </div>
          </Link>
        </div>
        <div>
          <div ref={imgRef} className={classes.img}></div>
        </div>
      </div>
    </section>
  );
};

export default SaveTimeSection;
