import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";


function Footer() {
  return (
    <div className="py-5 border-t-3/2">
             <div className="flex align-center justify-center mt-4">
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-100 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/YasirObaibullah99">
                <FaGithub />
                <span class="sr-only">Github</span>
              </a>
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-blue-700 rounded-full hover:text-white transition-colors duration-300 "href="https://www.linkedin.com/in/yasir-obaibullah99">
                <FaLinkedin />
                <span class="sr-only">Linkedin</span>
              </a>
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://twitter.com/yasirobai99">
                <FaTwitter />
                <span class="sr-only">Twitter</span>  
              </a>
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300" href="https://gmailto:yasirobaidullah123@gmail.com">
                <FaRegEnvelope />
                <span class="sr-only">Email</span>  
              </a>
             
             
            </div>
            <div className="flex align-center justify-center mt-4">
              <p className="text-white mb-4 ">
                  Made with <span className = "mr-2" role="img" aria-label="heart">❤️</span>by<a className="text-red-500 hover:underline" href="mailto:me.yasirobaidullah123@gmail.com"> Yasir Obaibullah</a>
              </p>
              </div> 
    </div>
  )
}

export default Footer;