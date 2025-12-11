'use client';

import React from 'react';

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';


const ImageWithFallback = ({ src, alt, className }) => {
    
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/1080x960/CCCCCC/000000?text=Image+Load+Error`;
            }}
        />
    );
};

export default function ArticleCourses({ post }) {

    return (
        <div className="min-h-screen  py-12 px-4 font-sans mb-8">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto bg-white border-1 border-gray-100 rounded-lg shadow-l p-4 sm:p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column */}
                    <div className="flex-1">

                        <div className="rounded-xl overflow-hidden mb-8 relative h-96">

                            <div
                                className="mechanic w-full h-full object-cover"
                                role="img"
                                aria-label="Electric Vehicle Charging"

                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                                {/* show only on mobile  */}
                                <div
                                    className="absolute bottom-6 right-4 flex justify-end md:hidden"
                                >
                                    <span className="bg-white rounded-2xl text-gray-700 text-sm font-medium shadow-md px-0 py-0">
                                        ⚪ Electric Vehicles
                                    </span>
                                </div>

                                <div className="absolute bottom-4 left-4 right-4">
                                    <h2 className="text-white text-3xl font-bold leading-snug">
                                        Will electrical engineers replace the mechanical engineers in the future in automobile industries?
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* article body content */}
                        <div className="text-[#0d1039] font-dm-sans">
                            <h3 className="font-dm-sans  text-[#101359] mt-8 mb-4 text-xl font-semibold">The Truth: Not Really</h3>
                            <p className="mb-4 leading-relaxed text-[#8C8C8C]">
                                The rise of electric vehicles (EVs) has created a lot of buzz about whether electrical engineers will replace mechanical engineers in the automobile industry. The reality is, they won't. While mechanical engineers will adapt to the specialization required to enter the EV sector, electrical engineers cannot completely take over.
                            </p>
                            <p className="mb-4 leading-relaxed text-[#8C8C8C]">
                                The future lies in electric-mechanical professionals who combine mechanical expertise with electrical knowledge.
                            </p>

                            <h3 className="text-[#0d1039] mt-8 mb-4 text-2xl font-semibold">Disenosys: Bridging the Gap</h3>
                            <p className="mb-4 leading-relaxed text-[#8C8C8C]">
                                Disenosys, a start-up in the automotive training sector, is addressing this need. The platform provides specialized programs to help mechanical engineers upskill and stay relevant in the fast-changing EV ecosystem.
                            </p>
                            <p className="mb-4 leading-relaxed text-[#8C8C8C]">
                                Some areas such as CAE, CFD, and EV powertrain design remain the stronghold of mechanical engineers, making them irreplaceable in key domains.
                            </p>

                            <h3 className="text-gray-900 mt-8 mb-4 text-2xl font-semibold">Why Disenosys CFD Course Stands Out</h3>
                            <p className="mb-4 leading-relaxed text-[#8C8C8C]">
                                Disenosys has recently launched a power-packed CFD course, which is gaining attention among industry professionals.
                            </p>

                            <h4 className=" mt-6 mb-3 text-xl font-semibold">Key Highlights:</h4>
                            <ul className="space-y-2 mb-6 list-none pl-0 text-[#8C8C8C]">
                                {['Training by seasoned industry experts working in OEMs.', 'Resume-building support after course completion.', 'Course completion certificate to showcase skills and talent.', 'Mock interviews to prepare for technical placement rounds.', 'Top OEM referrals for excellent performers.', 'Internship opportunities at Disenosys for real-world experience.'].map((text, index) => (
                                    <li key={index} className="flex items-start text-base">
                                        <span className="text-indigo-900 mr-2 text-med leading-none">•</span>
                                        <span dangerouslySetInnerHTML={{ __html: text.replace('industry experts', '<strong>industry experts</strong>') }} />
                                    </li>
                                ))}
                            </ul>

                            <h3 className="mt-8 mb-4 text-2xl font-semibold">Project-Oriented Learning Approach</h3>
                            <p className="mb-4 leading-relaxed text-[#8C8C8C]">
                                The course is designed to ensure students gain practical, hands-on experience. Every level is integrated with real-world projects to make learners industry-ready.
                            </p>
                            <p className="mb-2">
                                <strong className="text-[#101359]">► Level 1:</strong><span className='text-[#8C8C8C]'> 60 hours of comprehensive online training (for graduates with 0-1 year of experience).</span>
                            </p>
                            <p className="mb-4">
                                <strong className="text-[#101359]">► Level 2:</strong> <span className='text-[#8C8C8C]'> 150 hours of advanced training (for CFD engineers with 2-4 years of experience).</span>
                            </p>
                            <p className="mb-4 leading-relaxed text-[#8C8C8C]">
                                Both levels focus on building strong practical knowledge to bridge the gap between academics and industry expectations.
                            </p>

                            <h3 className=" mt-8 mb-4 text-2xl font-semibold ">EV Boom and Government Support</h3>
                            <p className="mb-4 leading-relaxed text-[#8C8C8C]">
                                The Government of India is actively supporting EV infrastructure. While the current market faces challenges, the automobile industry will witness intense competitiveness once the plans are executed.
                            </p>
                            <p className="mb-4 leading-relaxed text-[#8C8C8C]">
                                Mechanical engineers, especially those specializing in EV powertrains, will be among the biggest beneficiaries. Designing an EV is not only about aesthetics but also about making it efficient and reliable.
                            </p>

                            <h3 className=" mt-8 mb-4 text-2xl font-semibold">The Final Word: Skill-Up, Stay Ahead</h3>
                            <p className="mb-4 leading-relaxed text-[#8C8C8C]">
                                This EV era is a time of transformation, but talent and expertise cannot be replaced. Mechanical engineers who upskill and adapt will thrive in this new wave of opportunities.
                            </p>

                            <div className="bg-indigo-50 border-l-4 border-indigo-900 p-4 my-6 rounded-r-md">
                                <p className="text-indigo-900 font-semibold">💡 Skill-up. No one is going to replace talent.</p>
                            </div>

                            {/* bar (Bottom) */}
                            <div className=" bg-[#101359] text-white p-4 rounded-lg flex items-center justify-between mt-8 shadow-md">
                                <span>Like what you see? Share with a friend.</span>
                                <div className="flex gap-3">
                                    {/* social buttons */}
                                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-150"><Facebook size={16} className="text-indigo-900" /></button>
                                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-150"><Twitter size={16} className="text-indigo-900" /></button>
                                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-150"><Linkedin size={16} className="text-indigo-900" /></button>
                                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-150"><Instagram size={16} className="text-indigo-900" /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right sidebar */}
                    <div className="w-full lg:w-80 flex-shrink-0">

                        {/* author card */}
                        <div className="bg-[#0d1039] text-white rounded-xl p-6 mb-6 shadow-lg font-dm-sans">
                            <div className="w-32 h-32 mx-0 mb-4 overflow-hidden shadow-md rounded-lg">
                                <ImageWithFallback
                                    alt=""
                                    className="profile w-full h-full object-cover"
                                />
                            </div>
                            <h3 className=" mb-1 text-xl font-bold">Nishtha Tiwari</h3>
                            <p className=" mb-2 text-sm">Design Engineer</p>
                            <p className=" text-gray-300 mb-4 text-sm ">
                                Expert in CAE analysis, structural design, adept student, confluence
                            </p>
                            <div className=" p-8 border-t border-indigo-700 pt-4">
                                <p className="mb-2 text-sm font-medium">Share with your community!</p>
                                <div className="mb-1 flex gap-3 mt-2 ">
                                    {/* Social Buttons */}
                                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-150"><Facebook size={16} className="text-indigo-900" /></button>
                                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-150"><Twitter size={16} className="text-indigo-900" /></button>
                                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-150"><Linkedin size={16} className="text-indigo-900" /></button>
                                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-150"><Instagram size={16} className="text-indigo-900" /></button>
                                </div>
                            </div>
                        </div>

                        {/* Table of Contents */}
                        <div className="bg-white   p-6 shadow-md  top-6">
                            <h3 className=" mb-4  text-[#101359] text-med font-semibold bg-white border-l-4 border-indigo-900 p-4 my-3">In this article</h3>
                            <ul className="space-y-3 list-none pl-0 text-sm">
                                {[{ text: 'Electrical engineers cannot replace mechanical engineers in automobile', active: true }, { text: 'Mechanical engineers must upskill in EV and electro-mechanical', active: false }, { text: 'CFD and EV powertrain remain strongholds of mechanical engineers', active: false }, { text: 'Disenosys offers project-oriented training with placement support', active: false }, { text: 'Skill-up, as talent and expertise cannot be replaced', active: false }].map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className={item.active ? 'text-indigo-900 font-bold' : 'text-gray-700 hover:text-indigo-700'} >
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
