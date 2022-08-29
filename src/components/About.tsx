import React, { useRef, useLayoutEffect, useContext } from "react";
import { gsap, Bounce } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import TimelineGS from '../utils/TimelineGS'

function About() {
    // const about = useRef<HTMLParagraphElement>(null)
    const aboutOne = useRef<HTMLDivElement>(null)
    const aboutTwo = useRef<HTMLDivElement>(null)
    const { gsTimeline } = useContext(TimelineGS);

    useLayoutEffect(() => {
        console.log("gsTimeline: ", gsTimeline);

       let aboutTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#about-container",
                // toggleActions: "restart pause pause pause",
                start: "-100px 400px",
                end: "bottom bottom",
                // markers: true,
            },
        })

        let from = aboutTimeline.to(aboutOne.current, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: Bounce.easeOut,
            immediateRender: false,
        })
        .to(aboutTwo.current, {
            x: 0,
            opacity: 1,
            duration: 2,
            ease: Bounce.easeOut,
            immediateRender: false,
        })

        // from.restart()
        return () => {
            from.kill()
        };
    }, []);

    return (
        <div id="about-container" className='h-[100vh] b bg-tinygreen-600'>
            <div className='flex flex-row justify-around text-left'>
                <section className='w-1/3 releative ' >
                    <div id='aboutOne' ref={aboutOne} >
                        <h1 className='t text-5xl italic pt-5 pb-4' style={{ fontFamily: "Arima Madurai",textShadow: "1px 1px rgba(255,255,255,0.3)" }}>Passion...</h1>
                        <p className='leading-9 tracking-wide text-3xl ' id="para" style={{ fontFamily: "Laila", textShadow: "1px 1px rgba(255,255,255,0.3)", }}>
                            Passion ipsum dolor sit amet consectetur adipisicing elit. Earum cum
                            aspernatur corrupti labore alias perspiciatis architecto nemo
                            delectus amet ea vero praesentium reiciendis, omnis repellat eius,
                            ipsum quia? Dolorem velit sed soluta ex minus explicabo officia
                            obcaecati quo earum, dolore consequatur molestias voluptatem
                            corporis.
                        </p>
                    </div>
                </section>
                <section id='mypg' className='w-1/3  releative ' >
                    <div id='aboutTwo' ref={aboutTwo}>
                        <h1 className='t text-5xl italic pt-5 pb-4' style={{ fontFamily: "Arima Madurai", textShadow: "1px 1px rgba(255,255,255,0.3)" }}>Understading...</h1>
                        <p className='leading-9 tracking-wide text-3xl ' id="paratwo" style={{
                            fontFamily: "Laila", textShadow: "1px 1px rgba(255,255,255,0.3)", }}>
                            Understanding ipsum dolor sit amet consectetur adipisicing elit. Dolorum non
                            voluptatem nihil est, ullam dolor nobis id vero quo excepturi
                            voluptas architecto, amet numquam itaque.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;
