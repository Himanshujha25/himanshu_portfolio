import React from 'react'
import {motion} from "framer-motion"
import { staggerContainer } from '../utils/motion'
function SectionWrapper(Component,index) {
  return (
    function HOC(){
        return(
            <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once:true,amount:0.25}}>
                <Component/>
            </motion.section>
        )
    }
  )
}

export default SectionWrapper
