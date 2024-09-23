import { HERO_CONTENT } from "../Constants"
import {motion} from 'framer-motion';

const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
const container = (delay) => {
    return {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay,
                duration: 0.5
            }
        }
    };
};

const Hero = () => {
    const text = "Rebba Vikas";
  return (
    <main>
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className=" flex flex-wrap">
                <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                <motion.h1
      className="font-thin text-6xl lg:text-8xl pb-16 tracking-tight lg:mt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
                    <motion.span
                    variants={container(0.75)}
                    initial="hidden"
                    whileInView="visible"
                     className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 tracking-tight bg-clip-text text-transparent text-4xl">Full Stack Developer</motion.span>
                    <motion.p
                    variants={container(1)}
                    initial="hidden"
                    whileInView="visible"
                     className="my-2 max-w-xl py-6 tracking-tighter font-light">{HERO_CONTENT}</motion.p>
                </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 mt-10">
                <div className="flex justify-center">
                    <motion.img
                    initial={{x:100,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:1,delay:1.2}}
                     src="profile.jpg" alt="profilepic" className="rounded-lg w-[400px] h-[400px]"/>
                </div>
                </div>
            </div>
        </div>
    </main>
  )
}
export default Hero;
