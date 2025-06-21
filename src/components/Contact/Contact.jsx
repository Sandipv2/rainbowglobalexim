import React from 'react'
import { logo2, igLogo, waLogo, phoneLogo, gmailLogo, locationLogo} from '../../assets/index'

function Contact() {
    return (
        <div id='contact' className='min-h-screen bg-slate-300 flex flex-col justify-center items-center'>
            <h1 className='text-center text-5xl font-extrabold myUnderline relative'>CONTACT US</h1>
            <div className='flex justify-center items-center md:gap-44 flex-col-reverse md:flex-row'>
                <div className='flex flex-col gap-3 font-bold'>
                    <div className='flex gap-3 items-center justify-around duration-500 border-3 border-green-600 hover:text-white hover:bg-green-600 rounded-3xl px-3 py-2'>
                        <div>
                            <img src={locationLogo} alt="" />
                        </div>
                        <p>At Post Karandi Kheba, Bhor, Pune - 412213</p>
                    </div>

                    <div className='flex items-center justify-around bg-slate-700 rounded-3xl px-3 py-2'>
                        <p>@rainbowglobalexim</p>
                        <div>
                            <img src={igLogo} alt="" />
                        </div>
                    </div>

                    <div className='flex items-center justify-around bg-slate-700 rounded-3xl px-3 py-2'>
                        <div>
                            <img src={waLogo} alt="" />
                        </div>
                        <p>+91 9325746337</p>
                    </div>

                    <div className='flex items-center justify-around bg-slate-700 rounded-3xl px-3 py-2'>
                        <p>+91 9272130703</p>
                        <div>
                            <img src={phoneLogo} alt="" />
                        </div>
                    </div>

                    <div className='flex items-center justify-around bg-slate-700 rounded-3xl px-3 py-2'>
                        <div>
                            <img src={gmailLogo} alt="" />
                        </div>
                        <p>rainbowglobalexim@gmail.com</p>
                    </div>
                </div>

                
                <div className='w-2/3 md:w-auto'>
                    <img src={logo2} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Contact