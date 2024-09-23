import { ABOUT_TEXT } from "../Constants";
import {motion} from 'framer-motion';


const About = () => {
  return (
    <section>
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="text-center text-4xl my-20">About <span className="text-neutral-500">Me</span></h1>
            <div className="flex flex-wrap">
                <motion.div
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1,delay:0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src="about.jpg" alt="sbout" className="rounded"/>
                </div>
                </motion.div>
                <div className="w-full lg:w-1/2 ">
                <div className="flex justify-center lg:justify-start">
                    <motion.p
                    initial={{x:100,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:1,delay:1}}
                    className="my-2 max-w-xl py-6 tracking-tight">{ABOUT_TEXT}</motion.p>
                </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default About
