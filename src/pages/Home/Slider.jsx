import React from 'react';

const Slider = () => {
    return (
        <div className='md:w-11/12 mx-auto mt-5'>
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/C5zCvtBC/rev2.jpg"
                        className="w-full h-96 rounded" />

                    <div className='absolute  top-[60%] lg:top-[70%] md:left-[20%] lg:left-[30%] text-white text-center bg-gray-500/50 p-2'>
                        <h1 className='text-2xl'>Discover top-rated services.</h1>
                        <p>Browse helpful reviews to choose services that meet your needs best.</p>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/QFsvdsDQ/rev1.jpg"
                        className="w-full h-96 rounded" />
                    <div className='absolute top-[60%] lg:top-[70%] md:left-[20%] lg:left-[30%] text-white text-center bg-gray-500/40 p-2'>
                        <h1 className='text-2xl'>Write and share reviews</h1>
                        <p>Help others by posting honest feedback and real service experiences.</p>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/vvKFpS4b/rev3.jpg"
                        className="w-full h-96 rounded" />

                    <div className='absolute top-[60%] lg:top-[70%] md:left-[20%] lg:left-[30%] text-white text-center bg-gray-500/30 p-2'>
                        <h1 className='text-2xl'>Manage your services easily</h1>
                        <p>Add, update, or remove your services anytime to stay in control.</p>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slider;