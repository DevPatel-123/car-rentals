import React from 'react'

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 max-md:px-4 my-16 mb-40">
            <div className="inline-block px-4 py-2 bg-red-100 rounded-full">
                <span className="text-primary text-sm font-bold uppercase tracking-wide">Exclusive Offers</span>
            </div>
            <h1 className="md:text-5xl text-3xl font-bold text-gray-900">Never Miss a Deal!</h1>
            <p className="md:text-lg text-gray-600 pb-4 max-w-2xl font-medium">
                Subscribe to get exclusive offers, early access to new vehicles, and special discounts
            </p>
            <form className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12 gap-2">
                <input
                    className="border-2 border-red-200 hover:border-red-300 focus:border-primary rounded-full h-full outline-none w-full px-6 text-gray-700 placeholder-gray-500 transition-all font-medium"
                    type="email"
                    placeholder="Enter your email"
                    required
                />
                <button type="submit" className="md:px-10 px-6 h-full text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap">
                    Subscribe
                </button>
            </form>
        </div>
  )
}

export default NewsLetter
