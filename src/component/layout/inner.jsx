"use client"
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Inner = ({children}) => {

    const anim = (variants) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
           variants
        }
    }

    const opacity = {
        initial: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { 
          opacity: 1,
        }
    }

    const slide = {
      initial: {
        top: "100vh",
      },
      enter: {
        top: "100vh",
      },
      exit: {
        top: "0vh",
        duration: 1,
        ease: [0.76, 0, 0.24, 1] 

      }
    }

    const perspective = {
      initial: {
        y: 0,
        scale: 1,
        opacity: 1,
      },
      enter: {
        y: 0,
        scale: 1,
        opacity: 1,
      },
      exit: {
        y: -100,
        scale: 0.8,
        duration: 1.2,
        opacity: 0,
        ease: [0.76, 0, 0.24, 1] 

      }
    }
  return (
    <div className='inner'>
        <motion.div {...anim(slide)} className='slide' />
        <motion.div {...anim(perspective)} className='page'>
          <motion.div  {...anim(opacity)}>
            <div className='header'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
              </div>
          </motion.div>
          {children}
      </motion.div>
    </div>
  )
}

export default Inner