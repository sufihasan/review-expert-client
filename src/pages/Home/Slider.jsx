import React from 'react';

const Slider = () => {
    return (
        <div className='md:w-11/12 mx-auto mt-5'>
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/C5zCvtBC/rev2.jpg"
                        className="w-full h-80" />

                    <div className='absolute top-[70%] left-[30%] text-white text-center bg-gray-500/50 p-2'>
                        <h1 className='text-2xl'>Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, repellendus?</p>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/QFsvdsDQ/rev1.jpg"
                        className="w-full h-80" />
                    <div className='absolute top-[70%] left-[30%] text-white text-center bg-gray-500/40 p-2'>
                        <h1 className='text-2xl'>Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, repellendus?</p>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/vvKFpS4b/rev3.jpg"
                        className="w-full h-80" />

                    <div className='absolute top-[70%] left-[30%] text-white text-center bg-gray-500/30 p-2'>
                        <h1 className='text-2xl'>Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, repellendus?</p>

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