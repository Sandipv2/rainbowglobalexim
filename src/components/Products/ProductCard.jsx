import React from 'react'
import { Link } from 'react-router'

function ProductCard({ to, img, title }) {
    return (
        <div className="min-w-xs max-w-xs bg-green-700 text-white rounded-2xl shadow-2xl overflow-hidden duration-500 hover:scale-105 hover:shadow-black">
            <Link to={to}>
                <img className="w-full h-48 object-cover" src={img} alt={title} />
            </Link>

            <div className="p-5 flex flex-col items-center text-center gap-4">
                <h5 className="text-xl font-semibold">{title}</h5>
                <Link
                    to={to}
                    className="text-md font-bold border-white bg-green-500 px-3 py-2 border-2 rounded-md hover:bg-white hover:text-green-500 hover:border-green-500 duration-300"
                >
                    Read more
                </Link>
            </div>
        </div>


    )
}

export default ProductCard