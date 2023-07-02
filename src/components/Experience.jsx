import React from 'react'

function Experience() {

    // const techs = [
    //     {
    //         id: 1, src: html, title: "HTML", style: "shadow-orange-500"
    //     }, {
    //         id: 2, src: css, title: "CSS", style: "shadow-blue-500"
    //     }, {
    //         id: 3, src: javascripts, title: "Javascripts", style: "shadow-yellow-500"
    //     }, {
    //         id: 4, src: reactImage, title: "React", style: "shadow-blue-500"
    //     }, {
    //         id: 5, src: nextJs, title: "Next JS", style: "shadow-sky-500"
    //     }, {
    //         id: 6, src: thilwind, title: "Tailwind", style: "shadow-white-500"
    //     }, {
    //         id: 7, src: graphql, title: "GraphQL", style: "shadow-pink-500"
    //     }, {
    //         id: 8, src: github, title: "GitHub", style: "shadow-gray-500"
    //     }
    // ]

    const techs = [
        {
            id: 1, src: "https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn", title: "HTML", style: "shadow-orange-500"
        }, {
            id: 2, src: "https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo", title: "CSS", style: "shadow-blue-500"
        }, {
            id: 3, src: "https://wildcardcorp.com/image-repository/javascript-icon.png/@@images/image.png", title: "Javascripts", style: "shadow-yellow-500"
        }, {
            id: 4, src: "https://rossmann.tech/files/__post_square/reactjs.webp", title: "React", style: "shadow-blue-500"
        }, {
            id: 5, src: "https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp", title: "Next JS", style: "shadow-white"
        }, {
            id: 6, src: "https://blogs.powercode.id/wp-content/uploads/2023/02/tailwindcss-1.png", title: "Tailwind", style: "shadow-sky-500"
        }, {
            id: 7, src: "https://graphql.org/img/og-image.png", title: "GraphQL", style: "shadow-pink-400"
        }, {
            id: 8, src: "https://1.bp.blogspot.com/-Ez_07BOEQdg/YUpIgc95XqI/AAAAAAABevQ/dHiUyADJBQ03yWF_mwW4ZkTXrSUWumozQCLcBGAsYHQ/s998/github.webp", title: "GitHub", style: "shadow-gray-400"
        }
    ]
    return (
        <div
            name="experience"
            className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>

            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                        Experience
                    </p>

                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt='' className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience