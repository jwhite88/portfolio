import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contacts() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.SyntheticEvent) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID as string, process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string, form.current as HTMLFormElement, process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        form.current!.reset()
    };

    return <div id='contact' className='h-[100vh] text-offblack-500 bg-tinygreen-600'>
        <h1 className='mb-4 sm:mb-1 md:mb-1 pt-4 text-5xl'>Contact Me</h1>
        <div className="form-container w-screen pt-8 flex lg:flex-row md:flex-col sm:flex-col flex-nowrap justify-center lg:gap-48 items-center text-slate-800 text-left">
            <form className="contact-form w-[380px] " ref={form} onSubmit={sendEmail}>
                <div className="name mb-3">
                    <input className='w-[400px] placeholder:italic p-2 rounded-lg shadow-inner' type="text" name="user_name" id="name" placeholder="Name"  />
                </div>
                <div className="email mb-3">
                    <input className='w-[400px] placeholder:italic p-2 rounded-lg shadow-inner' type="email" name="user_email" id="email" placeholder="Email"  />
                </div>
                <div className="message mb-3">
                    <textarea className="message placeholder:italic p-2 rounded-lg shadow-inner w-[400px] lg:h-[360px] md:h-[190px] sm:h-[190px]" name="message" id="message" rows={10} placeholder="Message" ></textarea>
                </div>
                <button className='block bg-whitemarble-50 text-tinygreen-500 hover:text-tinygreen-900 py-2 sm:mb-2 md:mb-2 w-32 rounded-lg border-0' type="submit">Send Message</button>
            </form>
            <div className="map min-w-[150px] min-h-[200px] lg:pb-[52px] md:pb-[32px] sm:pb-[30px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.1529594583285!2d-77.02828885347783!3d38.916875152867185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7e5a33ef0c9%3A0x887c1f79958a651b!2sU%20St%20NW%2C%20Washington%2C%20DC!5e0!3m2!1sen!2sus!4v1661714367762!5m2!1sen!2sus" className="rounded-md lg:w-[600px] md:w-[400px] sm:w-[400px]  lg:h-[450px] md:h-[267px] sm:h-[267px]" style={{border:0}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="DC"></iframe>
            </div>
        </div>
    </div>;
}

export default Contacts