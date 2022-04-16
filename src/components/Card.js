import React from "react";
import profile from '../images/image.jpg';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';


function Card() {
    return(
        <div className="w-full">
             <div className='flex flex-col justify-center max-w-xs mx-auto bg-gray-000 shadow-xl shadow-gray-500 rounded-xl p-5'>
                <div className = "">
                    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={profile} alt="profile face" />
                    

                </div>
                <div className="text-center mt-5">
                    <p className='text-xl sm:text-2xl font-semibold text-gray-200'>
                        Yasir Obaibullah
                    </p>
                    <p className='text-xs sm:text-base text-gray-400 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                       Web Developer

                    </p>
                     <div className="flex align-center justify-center mt-4">
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-white hover:bg-gray-600 rounded-full hover:text-white  transition-colors duration-300" href="https://github.com/YasirObaibullah99">
              <SiGithub />
              <span class="sr-only">Github</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/yasir-obaibullah99">
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
        </div> 
      </div>
    </div>
  )
}


export default Card;