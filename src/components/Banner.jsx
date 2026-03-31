import React from 'react';
import bannerImg from "../assets/banner.png"
import { PiPlayBold } from 'react-icons/pi';


const Banner = () => {
    return (
        <div className="hero py-7 md:py-15">
            <div className="md:max-w-305 hero-content flex-col lg:flex-row-reverse p-0 md:p-4">
                <img
                    src={bannerImg}
                    className="max-w-80 md:max-w-full rounded-lg shadow-2xl"
                />


                <div className='text-center md:text-left mx-2 md:mx-0'>
                    {/* <div className="badge badge-soft badge-primary text-base font-medium text-[#4F39F6] rounded-full py-4 px-4 my-4">
                        <img src="online.png" alt="" />
                        New: AI-Powered Tools Available
                    </div> */}
                    <div className="badge badge-soft badge-primary text-base font-medium text-[#4F39F6] rounded-full py-4 px-4 my-4">
                        {/* status */}
                        <div className="inline-grid *:[grid-area:1/1]">
                            <div className="status status-primary animate-ping"></div>
                            <div className="status status-primary"></div>
                        </div>
                        New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-4xl md:text-7xl font-bold md:font-extrabold text-[#101727] leading-12 md:leading-20">Supercharge Your Digital Workflow</h1>
                    <p className="md:max-w-158 text-md md:text-lg md:leading-8 text-[#627382] py-6">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>
                    <div className='flex justify-center md:justify-start gap-2 md:gap-4'>
                        <button className="btn btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Explore Products</button>
                        <button className='btn btn-outline btn-primary rounded-full border-[#4F39F6] hover:bg-[#4F39F6] text-base font-bold'>
                            {/* <img src="Play.png" alt="" /> */}
                            <PiPlayBold />
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;