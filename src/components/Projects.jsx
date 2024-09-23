import { PROJECTS } from "../Constants"
import {motion} from 'framer-motion';

const Projects = () => {
  return (
    <section>
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1 
            initial={{y:-100,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:1,delay:0.5}}
            className='text-center text-4xl my-20'>Projects</motion.h1>
        </div>
        <div>
            {
                PROJECTS.map((project,index)=>{
                    return (
                        <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                            <motion.div
                            initial={{x:-100,opacity:0}}
                            whileInView={{x:0,opacity:1}}
                            transition={{duration:1,delay:0.5}}
                            className="w-full lg:w-1/4">
                                <img src={project.image} width={150} height={150} alt="image" className="mb-6 rounded" />
                            </motion.div>
                            <motion.div 
                            initial={{x:100,opacity:0}}
                            whileInView={{x:0,opacity:1}}
                            transition={{duration:1,delay:0.5}}
                            className="w-full lg:w-3/4 max-w-full">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <a href={project.github} target="_blank" className="text-blue-500 mb-2">View on GitHub</a>
                            <br/>
                            {
                                project.technologies.map((tech,index)=>{
                                    return (
                                        <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>
                                    )
                                })
                            }
                            </motion.div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Projects
