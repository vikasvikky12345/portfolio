import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav>
        <div className='flex items-center mb-20 justify-between py-6'>
            <div className='w-[50px] h-[50px] rounded-full p-2 text-center flex flex-shrink-0 items-center justify-center'>
                <p className="text-2xl font-semibold text-white">RV</p>
            </div>
            <div className="m-8 flex items-center justify-center text-2xl gap-4 text-white">
                <a href="https://www.linkedin.com/in/vikas-rebba-fullstackdeveloper" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/vikasvikky12345" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter/>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
