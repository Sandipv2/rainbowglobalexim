import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <div className='min-h-screen flex justify-center items-center bg-slate-200'>
            <div className='text-center'>
                <div className='mb-15'>
                    <h1 className='text-7xl md:text-9xl font-bold mb-9'>Oops!</h1>
                    <p className='text-3xl'>404 - Page Not Found</p>
                </div>

                <Link to="/">
                    <button className='mt-5 border-4 px-3 py-2 rounded-4xl font-bold border-green-600 hover:bg-green-600 hover:text-white duration-500 cursor-pointer bg-green-600 text-white md:bg-transparent md:text-black'>GO TO HOMEPAGE</button>
                </Link>
            </div>
        </div>
    )
}

export default Error404 