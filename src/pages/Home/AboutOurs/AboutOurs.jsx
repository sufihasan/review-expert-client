import React from 'react';
import { motion } from "motion/react";

const AboutOurs = () => {
    return (
        <div className='w-11/12 mx-auto border border-gray-100 dark:border-slate-700 rounded py-10 mt-15'>
            <div className='flex flex-col md:flex-row  md:items-center md:justify-center gap-10'>
                <div>
                    {/* <img src="https://i.ibb.co/Jj4kTnxc/rev5.jpg" alt="" /> */}
                    <motion.img
                        src={`https://i.ibb.co/Jj4kTnxc/rev5.jpg`}
                        animate={{ y: [0, -40, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className='md:w-[50%] p-2 dark:text-gray-200'>
                    <h1 className='text-3xl font-semibold'>Why need Review Expert?</h1>
                    <p>Now people is lookig for trausted product. Review Expert can
                        help you to find best service. Also here you can add service and review</p>
                </div>
            </div>
        </div>
    );
};

export default AboutOurs;