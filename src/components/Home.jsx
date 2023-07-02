import React from 'react'
import { Link } from 'react-scroll'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import IMG_0886 from '../image/IMG_0886.jpg'

function Home() {
    return (
        <div
            name="home"
            className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
        >

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-9xl font-bold text-white'>
                        I AM BEEN'S MOOMTAS

                    </h2>

                    <p className='text-gray-500 py-4 max-w-md'>
                        I am been Quis exercitation magna ut nisi fugiat consequat in proident ad ea cupidatat. Pariatur non aute culpa proident. Ex minim minim et veniam adipisicing veniam ipsum. Anim consequat non voluptate ea et sit labore est eiusmod.
                    </p>

                    <div >
                        <Link
                            to='portfolio'
                            smooth
                            duration={500}
                            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img
                        src={IMG_0886}

                        alt='my profile'
                        className='rounded-2xl mx-auto w-2/3 md:w-full md:p-2  hover:scale-125 duration-200'
                    />
                </div>
            </div>

        </div>
    )
}

export default Home