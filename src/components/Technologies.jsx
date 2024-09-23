import {RiReactjsLine} from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssLine } from "react-icons/ri";
import {motion} from 'framer-motion';
const iconVariants = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration,
            repeat:Infinity,
            repeatType:'reverse',
        }
    }
})


const Technologies = () => {
  return (
    <section>
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
            initial={{y:-100,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:1,delay:0.5}}
            className="text-center text-4xl my-20">Technologies</motion.h1>
            <motion.div
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1,delay:0.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl "/>
                </motion.div>
                <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-400"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className="text-7xl"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiMongodb className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssLine className="text-7xl text-cyan-400"/>
                </motion.div>
            </motion.div>
        </div>

    </section>
  )
}

export default Technologies
