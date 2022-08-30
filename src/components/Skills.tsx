import React, { useEffect, useRef, useContext, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TimelineGS from "../utils/TimelineGS";
import { frontend, backend, cloud, miscellaneous } from '../data/skills'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faCode, faServer, faGears } from '@fortawesome/free-solid-svg-icons'

gsap.registerPlugin(ScrollTrigger);

function Skills() {
    const scroller = useRef<HTMLDivElement>(null);
    const skills = useRef<HTMLDivElement>(null);
    const { gsTimeline } = useContext(TimelineGS);

    const [frontendData, setFrontendData] = useState<Array<string>>(frontend)
    const [backendData, setBackendData] = useState<string[]>(backend)
    const [cloudData, setCloudData] = useState<string[]>(cloud)
    const [miscellaneousData, setMiscellaneousData] = useState<string[]>(miscellaneous)

    useEffect(() => {
        let skillSet = gsap.utils.toArray(".skill-set");


        let frontendText = document.querySelectorAll(".frontend-class");
        let frontendGsap = gsap.utils.toArray(".frontend-class");

        // console.log("skillSet:", skillSet);
        // console.log("scroller.current!.scrollWidth", scroller.current!.scrollWidth);
        // console.log("scroller.current!.offsetWidth:", scroller.current!.offsetWidth);
        // console.log(
        //     "document.documentElement.clientWeight",
        //     document.documentElement.clientWidth
        // );

        let to = gsTimeline.to(skillSet, {
            // xPercent: () =>
            //     -(scroller.current!.scrollWidth - document.documentElement.clientWidth),
            xPercent: -100 * (skillSet.length - 1),
            ease: "none",
            // duration: 30,
            scrollTrigger: {
                trigger: scroller.current,
                marks: true,
                pin: true,
                pinSpacing: true,
                scrub: 1.0,
                invalidateOnRefresh: true,
                // anticipatePin: 1,
                // snap: 1 / (skillSet.length - 1),
                // end: "+=100%",
                end: () => "+=" + window.innerWidth
                // end: () => "+=" + (scroller.current!.offsetWidth)
            },
        });

        return () => {
            to.kill();
        };

    }, []);

    return (
        <div
            id='skills'
            ref={scroller}
            className='flex flex-nowrap overflow-x-hidden text-offblack-500 w-[400vw]'
        >
            <section
                ref={skills}
                className='skill-set w-[100vw] h-[100vh] bg-tinygreen-800  ns-horizontal-section__item"'
            >
                <div className="front-end ">
                    <h3 className="pt-4 text-6xl">Frontend Skills</h3>
                    <div className="skills-list w-5/12 rounded-md border-slate-200 bg-slate-500 mx-auto text-left bg-gradient-to-r from-gray-500 from to-slate-500">
                        <ul className="text-left pl-4 py-4 text-4xl relative">
                            {frontendData && frontendData.map((data, idx) => {
                                return (
                                    <li className="frontend-class py-2 max-h-20" key={idx}><FontAwesomeIcon className="inline-block px-1 text-[1.3rem] border-2 rounded-md bg-offpurple-100" icon={faCode} /><span className="block ml-2 pl-6 py-1 w-[32rem] bg-offpurple-400 rounded-md relative bottom-4 left-4 -z-10">{data}</span></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>
            <section
                ref={skills}
                className='skill-set w-[100vw] h-[100vh] bg-tinygreen-700 ns-horizontal-section__item"'
            >
                <div className="back-end">
                    <h3 className="pt-4 text-6xl">Backend Skills</h3>
                    <div className="skills-list w-5/12 rounded-md border-slate-200 bg-slate-500 mx-auto text-left bg-gradient-to-r from-gray-500 from to-slate-500">
                        <ul className="text-left pl-4 py-4 text-4xl relative">{backendData && backendData.map((data, idx) => {
                            return (
                                <>
                                   
                                    <li className="backend-class p-2 max-h-20" key={idx}><FontAwesomeIcon className="inline-block px-1 text-[1.3rem] border-2 rounded-md bg-offpurple-100" icon={faServer} /><span className="block ml-2 pl-6 py-1 w-[32rem] bg-offpurple-400 rounded-md relative bottom-4 left-4 -z-10">{data}</span></li>
                                   
                                </>
                            )
                        })}</ul>
                    </div>
                </div>
            </section>
            <section
                ref={skills}
                className='skill-set w-[100vw] h-[100vh] bg-tinygreen-800 ns-horizontal-section__item"'
            >
                <div className="cloud-end">
                    <h3 className="pt-4 text-6xl">Cloud Skills</h3>
                    <div className="skills-list w-5/12 rounded-md border-slate-200 bg-slate-500 mx-auto text-left bg-gradient-to-r from-gray-500 from to-slate-500">
                        <ul className="text-left pl-4 py-4 text-4xl relative">{cloudData && cloudData.map((data, idx) => {
                            return (
                                <li className="cloud-class p-2 max-h-20" key={idx}><FontAwesomeIcon className="inline-block px-1 text-[1.3rem] border-2 rounded-md bg-offpurple-100" icon={faCloud} /><span className="block ml-2 pl-6 py-1 w-[32rem] bg-offpurple-400 rounded-md relative bottom-4 left-4 -z-10">{data}</span></li>
                            )
                        })}</ul>
                    </div>
                </div>
            </section>
            <section
                ref={skills}
                className='skill-set w-[100vw] h-[100vh] bg-tinygreen-700 ns-horizontal-section__item"'
            >
                <div className="miscellaneous-end">
                    <h3 className="pt-4 text-6xl">Miscellaneous Skills</h3>
                    <div className="skills-list w-5/12 rounded-md border-slate-200 bg-slate-500 mx-auto text-left bg-gradient-to-r from-gray-500 from to-slate-500">
                        <ul className="text-left pl-4 py-4 text-4xl relative">{miscellaneousData && miscellaneousData.map((data, idx) => {
                            return (
                                <li className="miscellaneous-class p-2 max-h-20" key={idx}><FontAwesomeIcon className="inline-block px-1 text-[1.3rem] border-2 rounded-md bg-offpurple-100" icon={faGears} /><span className="block ml-2 pl-6 py-1 w-[32rem] bg-offpurple-400 rounded-md relative bottom-4 left-4 -z-10">{data}</span></li>
                            )
                        })}</ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;

// flex flex-row

// h-screen  flex flex-row  overflow-x-hidden
