import React from 'react'

const Title = ({title,subTitle,align}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === 'left' && 'md:items-start md:text-left' }`}>
      <h1 className='font-bold text-4xl md:text-5xl text-gray-900'>{title}</h1>
      <p className='text-base md:text-lg text-gray-600 mt-3 max-w-2xl font-medium'>{subTitle}</p>
    </div>
  )
}

export default Title
