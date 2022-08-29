import React from "react";
import { Scrollchor } from "react-scrollchor";

function Header() {
    return (
        <div
            id='header'
            style={{ fontFamily: "Roboto Mono", fontWeight: 400 }}
            className='flex flex-row justify-between items-center min-h-[36px] px-10 text-offblack-500 bg-tinygreen-700'
        >
            <div className='logo'>logo</div>
            <nav className='flex flex-row flex-nowrap justify-between  basis-96 '>
                <div className='link'>
                    <Scrollchor to='#about'>About</Scrollchor>
                </div>
                <div className='link'>
                    <Scrollchor to='#skills'>Skills</Scrollchor>
                </div>
                <div className='link'>
                    <Scrollchor to='#projects'>Projects</Scrollchor>
                </div>
                <div className='link'>
                    <Scrollchor to='#contact'>Contact Me</Scrollchor>
                </div>
            </nav>
        </div>
    );
}

export default Header;
