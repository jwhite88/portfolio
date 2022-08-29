import React from 'react'

function Contacts() {
    return <div id='contact' className='h-[100vh] text-offblack-500 bg-tinygreen-600'>
        <h1 className='mb-4 pt-4 text-5xl'>Contact Me</h1>
        <div className="form-container w-screen pt-8 flex flex-row flex-nowrap justify-around items-center text-slate-800 text-left">
            <form className="contact-form w-[380px]">
                <div className="name mb-3">
                    <input className='w-[400px] placeholder:italic p-2 rounded-lg shadow-inner' type="text" name="name" id="name" placeholder="Name"  />
                </div>
                <div className="email mb-3">
                    <input className='w-[400px] placeholder:italic p-2 rounded-lg shadow-inner' type="email" name="email" id="email" placeholder="Email"  />
                </div>
                <div className="message mb-3">
                    <textarea className="message placeholder:italic p-2 rounded-lg shadow-inner w-[400px] h-[360px]" id="message" rows={10} placeholder="Message" ></textarea>
                </div>
                <button className='block bg-slate-100 w-20 rounded-lg' type="submit">Submit</button>
            </form>
            <div className="map min-w-[150px] min-h-[200px] mb-[28px] bg-slate-400">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.1529594583285!2d-77.02828885347783!3d38.916875152867185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7e5a33ef0c9%3A0x887c1f79958a651b!2sU%20St%20NW%2C%20Washington%2C%20DC!5e0!3m2!1sen!2sus!4v1661714367762!5m2!1sen!2sus" className="rounded-md" width="600" height="450" style={{border:0}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="DC"></iframe>
            </div>
        </div>
    </div>;
}

export default Contacts