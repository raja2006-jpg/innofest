'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
//@ts-ignore
import confetti from 'canvas-confetti'
import { X } from 'lucide-react'

export default function AlertComponent() {
  const [isVisible, setIsVisible] = useState(false)

  // useEffect(() => {
  //   // Simulate page refresh by showing the alert after a short delay
  //   const timer = setTimeout(() => 
  //     setIsVisible(true)
  //     // Trigger confetti effect
  //     confetti({
  //       particleCount: 300,
  //       spread: 900,
  //       origin: { y: 0.6 }
  //     })                                        //after event add useeffect
  //   },1000)/
 
  //   return () => clearTimeout(timer)
  // }, [])

  // const handleClose = () => {
  //   setIsVisible(false)
  // }
}

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <div className=" font-mono bg-gradient-to-br from-cyan-800 to-teal-600 rounded-lg shadow-2xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-start mb-4">
              <h2 className="font-mono text-3xl font-bold mb-2 text-white">Thank You All </h2>
              <button onClick={handleClose} className="text-white hover:text-gray-200 transition-colors">
                <X size={24} />
              </button>
            </div>
            <p className="text-xl text-white mb-6">
            <span className="font-bold"></span> Thank you to all participants for your invaluable contributions in making this event a resounding success!
            </p>
            <div className=" font-serif bg-white bg-opacity-20 rounded-lg p-6 mb-8">
              <ul className=" list-inside text-white space-y-2">
                <p className='text-lg text-center font-semibold mb-4'>Hope You Enjoyed</p>
                
                <li><span className='font-bold'>12th Mar</span> - Technical Events</li>
                <li><span className='font-bold'>13th Mar</span> - Non-Technical Events</li>
              </ul>
            </div>
            <p className="text-center text-sm text-white mb-6">Stay tuned for future events!</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClose}
              className="w-full bg-white text-teal-600 font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Got it, thanks!
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}