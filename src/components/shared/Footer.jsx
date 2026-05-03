import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0F172A] text-slate-300 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                        Tiles<span className="text-teal-500"> Gallery</span>
                    </h2>
                    <p className="text-sm leading-relaxed text-slate-400">
                        Discover your perfect aesthetic with our premium collection of interior and architectural tiles. Quality and elegance for your dream home.
                    </p>

                    <div className="flex space-x-4 pt-2">

                        <Link href="https://www.facebook.com/" target='_blank' className="hover:text-teal-500 transition-colors"><FaFacebook size={20} /></Link>

                        <Link href="https://x.com/" target='_blank' className="hover:text-teal-500 transition-colors"><FaTwitter size={20} /></Link>

                        <Link href="https://www.instagram.com/" target='_blank' className="hover:text-teal-500 transition-colors"><FaInstagram size={20} /></Link>

                        <Link href="https://www.linkedin.com/" target='_blank' className="hover:text-teal-500 transition-colors"><FaLinkedin size={20} /></Link>

                    </div>
                </div>


                <div>
                    <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>

                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link href="/" className="hover:text-teal-500 transition-colors">Home</Link>
                        </li>

                        <li>
                            <Link href="/all-tiles" className="hover:text-teal-500 transition-colors">All Tiles</Link>
                        </li>
                        <li>
                            <Link href="/my-profile" className="hover:text-teal-500 transition-colors">My Profile</Link>
                        </li>
                        <li>
                            <Link href="/login" className="hover:text-teal-500 transition-colors">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>

                <div id="contact">
                    <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start space-x-3">
                            <FaMapMarkerAlt className="text-teal-500 mt-1" />
                            <span>Dhaka Uddan, Mohammadpur, Dhaka - 1207</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <FaPhone className="text-teal-500" />
                            <span>+8801946-228026</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <FaEnvelope className="text-teal-500" />
                            <span>hafezmasudranmn@gmail.com</span>
                        </li>
                    </ul>
                </div>

            </div>


            <div className="border-t container mx-auto border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
                <p><small>@ Copyright 2026. Tiles Gallery. All rights reserved.</small></p>
            </div>
        </footer>
    );
};

export default Footer;