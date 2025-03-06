"use client"

import {  motion } from 'framer-motion'
import { tr } from 'motion/react-client'
import { exit } from 'process'

const Star = ({children}) => {

    const anim = (variants, custom) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
           variants,
           custom
        }
    }

    const expand = {
        initial: { 
            top:0
        },
        enter: (i) => ({
            top: "100%",
            transition: {
                duration: 0.4,
                delay: 0.05 * i
            },
            transitionEnd: {
                height: 0,
                top: 0
            }
        }),
        exit: (i) => ({
            height: "100%",
            transition: {
                duration: 0.4,
                delay: 0.05 * i
            },
        })
    }

    const overlay = {
        initial: {
            opacity: 0.7
        },
        enter: {
            opacity: 0
        },
        exit: {
            opacity: 0.7
        }
    }
    const nOfColummns = 25;
    
  return (
    <div className='page stairs'>
        <motion.div {...anim(overlay)} className="transition-background"></motion.div>
        <div className='transition-container' >
            {
                [...Array(nOfColummns)].map((_, i) => (
                    <motion.div {...anim(expand, nOfColummns - i)} key={i} className='stair' />
                ))
            }
      </div>
      {children}
    </div>
  )
}

export default Star