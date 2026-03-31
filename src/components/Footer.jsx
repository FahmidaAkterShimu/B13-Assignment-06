import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white pt-10 md:pt-30 pb-7.5 px-10 md:px-0'>
            <footer className="max-w-300 mx-auto footer sm:footer-horizontal justify-between">
                <div className='max-w-87.5'>
                    <img src="logo.png" alt="" />
                    <p className='text-base mt-4 opacity-80'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>

                <nav className='space-y-3'>
                    <h6 className="text-xl font-medium">Product</h6>
                    <a className="link link-hover opacity-80">Features</a>
                    <a className="link link-hover opacity-80">Pricing</a>
                    <a className="link link-hover opacity-80">Templates</a>
                    <a className="link link-hover opacity-80">Integrations</a>
                </nav>

                <nav className='space-y-3'>
                    <h6 className="text-xl font-medium">Company</h6>
                    <a className="link link-hover opacity-80">About</a>
                    <a className="link link-hover opacity-80">Blog</a>
                    <a className="link link-hover opacity-80">Careers</a>
                    <a className="link link-hover opacity-80">Press</a>
                </nav>

                <nav className='space-y-3'>
                    <h6 className="text-xl font-medium">Resources</h6>
                    <a className="link link-hover opacity-80">Documentation</a>
                    <a className="link link-hover opacity-80">Help Center</a>
                    <a className="link link-hover opacity-80">Community</a>
                    <a className="link link-hover opacity-80">Contact</a>
                </nav>

                <nav>
                    <h6 className="text-xl font-medium">Social Links</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a className='bg-white rounded-full p-2.5' href="">
                            <img src="Insta.png" alt="" />
                        </a>
                        <a className='bg-white rounded-full p-2.5' href="">
                            <img src="fb.png" alt="" />
                        </a>
                        <a className='bg-white rounded-full p-2.5' href="">
                            <img src="x.png" alt="" />
                        </a>
                    </div>
                </nav>
            </footer>

            <div className='max-w-300 mx-auto border-t border-white opacity-50 flex flex-col md:flex-row justify-between gap-4 mt-20 pt-7.5'>
                <p>© 2026 Digitools. All rights reserved.</p>
                <div className='text-base space-x-4 flex flex-col md:flex-row'>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                    <a href="">Cookies</a>
                </div>
            </div>

        </div>
    );
};

export default Footer;