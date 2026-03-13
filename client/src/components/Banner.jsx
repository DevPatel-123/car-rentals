import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-center items-center justify-between px-8 md:px-14 py-12 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 max-w-7xl mx-3 md:mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-red-400'>
        <div className='text-white mb-8 md:mb-0'>
            <span className='text-red-100 text-sm font-bold tracking-widest'>EARN PASSIVE INCOME</span>
            <h2 className='text-4xl md:text-5xl font-bold mt-2'>Own a Luxury Car?<br/>Get Earning!</h2>
            <p className='mt-4 text-red-50 text-lg font-medium'>Monetize your vehicle and earn extra income effortlessly.</p>
            <p className='max-w-xl mt-2 text-red-100 text-sm leading-relaxed'>We handle insurance, verification & secure payments. Sit back and watch your earnings grow - completely stress-free!</p>
            <button className='px-8 py-3 bg-white hover:bg-red-50 transition-all text-red-600 font-bold rounded-full text-sm mt-6 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105'>List Your Car Now →</button>
        </div>
        <img src={assets.banner_car_image} alt="car" className='max-h-56 w-auto md:ml-8 object-contain drop-shadow-lg' />
    </div>
  )
}

export default Banner
