import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import Logo from './Logo'  


const Footer = () => {
  return (
     <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16 text-sm text-gray-600 bg-linear-to-b from-white to-red-50'>

            <div className='flex flex-col md:flex-row justify-between items-start gap-8 md:gap-6 pb-6 border-red-200 border-b-2'>
                {/* Logo & Description - Full width on mobile */}
                <div className='w-full md:w-auto'>
                    <Logo />
                    <p className='max-w-80 mt-3 text-gray-600 font-medium'>
                       Premium car rental service offering a wide range of vehicles for all your travel needs. Experience luxury and comfort on the road with us.
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                       <a href="#" className="hover:opacity-70 transition"><img src={assets.facebook_logo} alt='facebook' className = "w-5 h-5 "  /></a>
                       <a href="#" className="hover:opacity-70 transition"><img src={assets.instagram_logo} alt='instagram' className = "w-5 h-5 "  /></a>
                       <a href="#" className="hover:opacity-70 transition"><img src={assets.twitter_logo} alt='twitter' className = "w-5 h-5 "  /></a>
                       <a href="#" className="hover:opacity-70 transition"><img src={assets.gmail_logo} alt='gmail' className = "w-5 h-5 "  /></a>
                       
                    </div>
                </div>

                {/* Quick Links, Resources, Contact - Aligned horizontally */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full md:w-auto'>
                    <div>
                        <h2 className='text-base font-bold text-gray-900 uppercase tracking-wide'>Quick Links</h2>
                        <ul className='mt-4 flex flex-col gap-2'>
                            <li><Link to="/" className="hover:text-primary transition font-medium">Home</Link></li>
                            <li><Link to="/cars" className="hover:text-primary transition font-medium">Browse Cars</Link></li>
                            <li><a href="#" className="hover:text-primary transition font-medium">About Us</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h2 className='text-base font-bold text-gray-900 uppercase tracking-wide'>Resources</h2>
                        <ul className='mt-4 flex flex-col gap-2'>
                            <li><a href="#" className="hover:text-primary transition font-medium">Help Center</a></li>
                            <li><a href="#" className="hover:text-primary transition font-medium">Terms of Services</a></li>
                            <li><a href="#" className="hover:text-primary transition font-medium">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition font-medium">Insurance</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h2 className='text-base font-bold text-gray-900 uppercase tracking-wide'>Contact</h2>
                        <ul className='mt-4 flex flex-col gap-2 font-medium'>
                            <li>Near RIT College</li>
                            <li>Ishwarpur Tal: Walwa Dist: Sangli</li>
                            <li className='text-primary font-bold'>+91 1234567890</li>
                            <li className='text-primary font-bold'>example@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-6'>
                <p className='font-semibold'>© {new Date().getFullYear()} CarRental System. All rights reserved.</p>
            </div>
        </div>
  )
}

export default Footer
