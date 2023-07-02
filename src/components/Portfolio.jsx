import React from 'react'
import IMG_1914 from '../image/IMG_1914.jpg'
import IMG_2396 from '../image/IMG_2396.jpg'
import IMG_9230 from '../image/IMG_9230.jpg'
import IMG_5477 from '../image/IMG_5477.jpg'
import IMG_5099 from '../image/IMG_5099.jpg'
import IMG_0190 from '../image/IMG_0190.jpg'



function Portfolio() {
    // const portfolio = [
    //     { id: 1, src: arrayDestruct, },
    //     { id: 2, src: reactParallax, },
    //     { id: 3, src: Navbar, },
    //     { id: 4, src: reactSmooth, },
    //     { id: 5, src: installNode, },
    //     { id: 6, src: reactWeather, },
    // ]

    const portfolio = [
        { id: 1, src: IMG_1914 },
        { id: 2, src: IMG_2396 },
        { id: 3, src: IMG_9230 },
        { id: 4, src: IMG_5477 },
        { id: 5, src: IMG_5099 },
        { id: 6, src: IMG_0190 },
    ]

    return (
        <div
            name="portfolio"
            className='bg-gradient-to-b from-black to-gray-800 w-full text-white lg:h-full pt-20'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Portfolio
                    </p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-12 sm:px-0'>
                    {portfolio.map(({ id, src }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-110' />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >
                                    Demo
                                </button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Portfolio