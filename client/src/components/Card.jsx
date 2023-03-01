import React from 'react'
import { download } from '../assets'
import { downloadImage } from '../utils'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion'

const Card = ({ _id, name, prompt, photo, id }) => {
  // const easing = [0.6, -0.05, 0.01, 0.99];

  return (
      <motion.div
      initial={{ opacity: 0, y: 90 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: id * 0.4, ease: 'easeInOut' }}
        // variants={fadeInUp}
      className='rounded-xl group relative shadow-card hover:shadow-cardhover card'
      >
        <div>
          <LazyLoadImage
            effect='blur'
            src={photo}
            alt={prompt}
            className='w-full h-auto object-cover rounded-xl'
          // placeholderSrc='http://127.0.0.1:5173/src/assets/logo.svg'
          />
          <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
            <p className='text-white text-sm overflow-y-auto prompt'>{prompt}</p>
            <div className='mt-5 flex justify-between items-center gap-2'>
              <div className='flex items-center gap-2'>
                <div className='w-7 h-7 rounded-full object-cover bg-emerald-400 flex justify-center items-center text-white text-xs font-bold uppercase'>
                  {name[0]}
                </div>
                <p className='text-white text-sm'>{name}</p>
              </div>
              <button type='button' onClick={() => downloadImage(_id, photo)} className='outline-none bg-transparent border-none'>
                <img src={download} alt="download" className='w-6 h-6 object-contain invert' />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
  )
}

export default Card
