import React from 'react';
// import { FiUsers } from 'react-icons/fi';
import { FiUsers, FiTarget, FiList, FiStar } from "react-icons/fi";
import { Link } from 'react-router';

const AboutUs = () => {
    return (
        <div className="w-11/12 mx-auto">
            {/* Header */}
            <header className="py-8">
                <h1 className="text-3xl text-center font-bold">About Us</h1>
            </header>

            {/* Main Content */}
            <main className="pb-16 space-y-10">
                {/* Who We Are */}
                <section>
                    <h2 className="flex items-center gap-2 text-2xl font-semibold mb-3">
                        <FiUsers className="text-blue-500" /> Who We Are
                    </h2>
                    <p className="leading-relaxed text-justify">
                        Welcome to <span className="font-semibold">Review Expert</span> — a
                        community-driven platform where real reviews meet trusted services.
                        We connect service providers and customers through transparency and
                        honest feedback.
                    </p>
                </section>

                {/* Mission */}
                <section>
                    <h2 className="flex items-center gap-2 text-2xl font-semibold mb-3">
                        <FiTarget className="text-green-500" /> Our Mission
                    </h2>
                    <p className="leading-relaxed text-justify">
                        We aim to create a space where every opinion matters. Our platform
                        empowers service owners to showcase their work and customers to make
                        better choices based on authentic reviews.
                    </p>
                </section>

                {/* Features */}
                <section>
                    <h2 className="flex items-center gap-2 text-2xl font-semibold mb-3">
                        <FiList className="text-orange-500" /> What You Can Do
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Add your services and reach more customers.</li>
                        <li>Write and share reviews based on real experiences.</li>
                        <li>Track your own services and review history.</li>
                    </ul>
                </section>

                {/* Join Us */}
                <section>
                    <h2 className="flex items-center gap-2 text-2xl font-semibold mb-3">
                        <FiStar className="text-yellow-500" /> Join Us Today
                    </h2>
                    <p className="leading-relaxed text-justify mb-3">
                        Whether you're here to promote your services or share your
                        experiences, <span className="font-semibold">Review Expert</span> is the
                        place for you. Together, we can make online reviews honest and
                        helpful for everyone.
                    </p>
                    <Link to='/register'>
                        <button className='btn bg-blue-500 hover:bg-blue-600  text-white'>Join Review Expert Today</button>
                    </Link>
                </section>
            </main>

        </div>

    );
};

export default AboutUs;