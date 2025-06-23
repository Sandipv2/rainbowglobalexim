import { logo } from "../../assets"

function About() {
    return (
        <div id='about' className='min-h-screen flex justify-center items-center px-8 md:px-0 bg-slate-300 py-8'>
            <div className=' md:w-1/2 text-justify mt-5'>
                <div className="">
                    <h1 className='m-auto w-fit text-3xl md:text-5xl font-extrabold mb-10 myUnderline relative'>ABOUT US</h1>
                </div>
                <img src={logo} alt="logo" className="mx-auto w-60 py-10" />
                <p className='md:text-2xl'>Welcome to <b className="border-b-3 border-green-600">Rainbow Global Exim</b>, a trusted name in the export of premium Indian agricultural produce. Based in Pune, Maharashtra – one of India’s major agri-trade hubs – we specialize in sourcing and exporting high-quality Red Onions from Nashik, Basmati & Non-Basmati Rice, Turmeric Fingers from Sangli, and Fresh Green Chilli.
                </p>
                <br />
                <p className='md:text-2xl'>
                    With strong ties to experienced farmers and local suppliers, we ensure consistent quality, timely delivery, and competitive pricing. Our mission is to bring the rich taste and health benefits of Indian produce to international markets, while maintaining the highest standards in hygiene, packaging, and customer service.</p>
                <br />

                <h2 className='md:text-3xl font-bold'>Why Choose Us?</h2>
                <ul className=' list-disc mt-5 pl-7 md:text-2xl'>
                    <li>Fresh & Authentic Produce</li>
                    <li>Direct Sourcing from Farms</li>
                    <li>Strict Quality Control</li>
                    <li>Customized Packaging</li>
                    <li>Global Export Compliance</li>
                    <li>Timely Delivery Across the Globe</li>
                </ul>
                <br />
                <p className='md:text-2xl font-semibold'>
                    We are committed to building long-term relationships with importers, wholesalers, and distributors across the Middle East, Asia, and beyond. Whether you are a bulk buyer or looking for consistent seasonal supply, Rainbow Global Exim is your reliable partner.
                </p>
            </div>
        </div>
    )
}

export default About    