import React from 'react';

const MeetPartner = () => {
    return (
        <div className='w-11/12 mx-auto my-15 dark:text-white'>
            <h1 className='text-center text-3xl font-bold'>Meet with out Partners</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-5  md:gap-10 mt-5'>

                <div className='border border-gray-300 rounded p-3'>
                    <div className='flex items-center justify-center '>
                        <img className='w-20 h-20' src="https://i.ibb.co/4nchFVg9/TechWave.jpg" alt="" />
                        <h3>TechWave</h3>
                    </div>
                    <p className='text-justify'>TechWave helps us build reliable cloud-based solutions for faster performance.</p>
                </div>
                <div className='border border-gray-300 rounded p-3'>
                    <div className='flex items-center justify-center '>
                        <img className='w-20 h-20' src="https://i.ibb.co/yx74jBb/Creative-Hub.png" alt="" />
                        <h3>CreativeHub</h3>
                    </div>
                    <p className='text-justify'>CreativeHub supports us with modern UI/UX designs and branding strategy.</p>
                </div>
                <div className='border border-gray-300 rounded p-3'>
                    <div className='flex items-center justify-center '>
                        <img className='w-20 h-20' src="https://i.ibb.co/bR1dy88J/Cyber-Safe.png" alt="" />
                        <h3>CyberSafe</h3>
                    </div>
                    <p className='text-justify'>CyberSafe provides advanced security solutions for our user data protection.</p>
                </div>
                <div className='border border-gray-300 rounded p-3'>
                    <div className='flex items-center justify-center '>
                        <img className='w-20 h-20' src="https://i.ibb.co/bM8pgTf0/HostGrid.png" alt="" />
                        <h3>HostGrid</h3>
                    </div>
                    <p className='text-justify'>HostGrid offers us high-speed hosting and uptime reliability across regions.</p>
                </div>
                <div className='border border-gray-300 rounded p-3'>
                    <div className='flex items-center justify-center '>
                        <img className='w-20 h-20 mr-3' src="https://i.ibb.co/ZzM92VYX/DataView.jpg" alt="" />
                        <h3>DataView</h3>
                    </div>
                    <p className='text-justify'>DataView helps us analyze user feedback and reviews to improve our platform.</p>
                </div>



            </div>
        </div>
    );
};

export default MeetPartner;