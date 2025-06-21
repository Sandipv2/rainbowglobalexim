import { logo2, igLogo, waLogo, phoneLogo, gmailLogo, locationLogo } from '../../assets/index'

function Contact() {
    return (
        <div id='contact' className='min-h-screen bg-slate-300 flex flex-col gap-30 justify-center items-center'>
            <div>
                <h1 className='w-fit m-auto text-5xl font-extrabold myUnderline relative'>CONTACT US</h1>
            </div>
            <div className='flex justify-center items-center gap-15 md:gap-44 flex-col-reverse md:flex-row'>
                <div className='flex flex-col gap-3 font-bold'>
                    <a href="#" target='_blank'>
                        <div className='flex gap-3 items-center justify-around duration-500 border-3 border-green-600 hover:text-white hover:bg-green-600 rounded-3xl px-3 py-2'>
                            <div>
                                <img src={locationLogo} alt="" />
                            </div>
                            <p>At Post Karandi Kheba, Bhor, Pune - 412213</p>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/rainbowglobalexim" target='_blank'>
                        <div className='flex items-center justify-around duration-500 border-3 border-green-600 hover:text-white hover:bg-green-600 rounded-3xl px-3 py-2'>
                            <p>@rainbowglobalexim</p>
                            <div>
                                <img src={igLogo} alt="" />
                            </div>
                        </div>
                    </a>

                    <a href="https://wa.me/9325746337" target='_blank'>
                        <div className='flex items-center justify-around duration-500 border-3 border-green-600 hover:text-white hover:bg-green-600 rounded-3xl px-3 py-2'>
                            <div>
                                <img src={waLogo} alt="" />
                            </div>
                            <p>+91 9325746337</p>
                        </div>
                    </a>

                    <a href="tel:+919272130703" target='_blank'>
                        <div className='flex items-center justify-around duration-500 border-3 border-green-600 hover:text-white hover:bg-green-600 rounded-3xl px-3 py-2'>
                            <p>+91 9272130703</p>
                            <div>
                                <img src={phoneLogo} alt="" />
                            </div>
                        </div>
                    </a>

                    <a href="mailto:rainbowglobalexim@gmail.com" target='_blank'>
                        <div className='flex items-center justify-around duration-500 border-3 border-green-600 hover:text-white hover:bg-green-600 rounded-3xl px-3 py-2'>
                            <div>
                                <img src={gmailLogo} alt="" />
                            </div>
                            <p>rainbowglobalexim@gmail.com</p>
                        </div>
                    </a>
                </div>

                <div className='w-2/3 md:w-auto'>
                    <a href="#">
                        <img src={logo2} alt="logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact