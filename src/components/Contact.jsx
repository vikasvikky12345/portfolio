import { CONTACT } from "../Constants"
import {motion} from 'framer-motion';

const Contact = () => {
  return (
    <footer>
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
            initial={{y:-100,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:1,delay:0.5}}
            className='text-center text-4xl my-10'>Get in Touch</motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1,delay:1}}
                className="my-4">{CONTACT.address}</motion.p>
                <motion.p
                initial={{x:100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1,delay:1.3}}
                className="my-4">{CONTACT.phoneNo}</motion.p>
                <motion.p
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1,delay:1.5}}
                >{CONTACT.email}</motion.p>
            </div>
        </div>
    </footer>
  )
}

export default Contact
