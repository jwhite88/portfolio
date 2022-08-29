import React, { useEffect, useRef, useLayoutEffect, useContext } from "react";
import web01img from "../assets/images/webdeveloper1.jpg";
import web04img from "../assets/images/webdeveloper4.jpg";
import web03img from "../assets/images/webdeveloper3.jpg";
import { gsap, Power4, Bounce } from "gsap";

import TimelineGS from "../utils/TimelineGS";

function Home() {
    const { gsTimeline } = useContext(TimelineGS);
    
    const img1 = useRef<HTMLDivElement>(null);
    const img2 = useRef<HTMLDivElement>(null);
    const img3 = useRef<HTMLDivElement>(null);
    const myname = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        //const el = img1.current;
        // const t1 = gsap.timeline({
        //   paused: true,
        // });

        let from = gsTimeline
            .from(myname.current, {
                x: -800,
                opacity: 0,
                duration: 2,
                ease: Bounce.easeOut,
                immediateRender: false,
            })
            .from(img1.current, {
                y: -220,
                x: 200,
                opacity: 0,
                duration: 1.1,
                // immediateRender: false,
            })
            .from(img2.current, {
                y: -220,
                x: -400,
                opacity: 0,
                duration: 1,
                // immediateRender: false,
            })
            .from(img3.current, {
                y: 220,
                x: -200,
                opacity: 0,
                duration: 0.5,
                // immediateRender: false,
            });

        // from.restart();

        return () => {
            // from.kill();
        };
    }, []);
    return (
        <div className='text-offblack-500 bg-tinygreen-300'>
            <main className='flex flex-row justify-evenly'>
                <section className='h-[100vh] w-[33vw] text-right pt-32'>
                    <p style={{ fontFamily: "Roboto Mono" }} className='text-xl'>
                        Hello, I'm
                    </p>
                    <h1
                        id='john'
                        ref={myname}
                        style={{ fontFamily: "Arima Madurai" }}
                        className='text-7xl'
                    >
                        John White
                    </h1>
                    <h3 style={{ fontFamily: "Roboto Mono" }} className='text-xl'>
                        Front End & Backend Web Developer
                    </h3>
                </section>
                <section className='h-[100vh] w-[33vw]'>
                    <div className='img-holder pl-20 pt-10 relative'>
                        <div ref={img1} className='developer-imgs pl-16 relative z-30'>
                            <img id='web1' src={web01img} alt='' />
                        </div>
                        <div ref={img2} className='developer-imgs  relative'>
                            <img id='web2' src={web04img} alt='' />
                        </div>
                        <div ref={img3} className='developer-imgs pl-8 relative'>
                            <img id='web3' src={web03img} alt='' />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
