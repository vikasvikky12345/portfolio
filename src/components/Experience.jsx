import { EXPERIENCES } from "../Constants"
import {motion} from 'framer-motion';
const Experience = () => {
  return (
    <section>
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
            initial={{y:-100,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:1,delay:0.5}}
            className="text-center text-4xl my-20">Experience</motion.h1>
            <div>
                {
                    EXPERIENCES.map((experience,index)=>{
                        return (
                            <div key={index} className="flex flex-wrap lg:justify-center mb-8">
                                <motion.div
                                initial={{x:-100,opacity:0}}
                                whileInView={{x:0,opacity:1}}
                                transition={{duration:1,delay:0.5}}
                                className="w-full lg:w-1/4">
                                    <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                                </motion.div>
                                <motion.div
                                initial={{x:100,opacity:0}}
                                whileInView={{x:0,opacity:1}}
                                transition={{duration:1,delay:0.5}}
                                className="w-full lg:w-3/4 max-w-screen-xl">
                                    <h6 className="mb-2 font-semibold">{experience.role} - <span className="text-sm text-purple-100">{experience.company}</span></h6>
                                    <p className="mb-4 text-neutral-400">{experience.description}</p>
                                    {
                                        experience.technologies.map((tech,index)=>{
                                            return (
                                                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                                            )
                                        })
                                    }
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    </section>
  )
}

export default Experience
