import React from 'react'

 import { SiNodedotjs } from 'react-icons/si';
 import { FaReact } from 'react-icons/fa';
 import { FaGithub } from 'react-icons/fa';
 import { SiTailwindcss } from 'react-icons/si';
 import { SiJavascript } from 'react-icons/si';


 
function Skills() {
  return (

    <div className='max-w-4xl mx-auto justify-center py-14' id="tech">
        <p className="text-2xl text-white  md:text-4xl font-bold text-center pt-4">
          Tech Stack 
        </p>
    

    <div className = "flex flex-wrap justify-center pt-2">
        
       
         <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl shadow-blue-400 rounded-xl sm:w-52">
          <SiNodedotjs color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">
            Nodejs
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl shadow-blue-700 rounded-xl sm:w-52">
          <FaReact color="#2196f3" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">
            React
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl shadow-gray-400 rounded-xl sm:w-52">
          <FaGithub color="black" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">
            Github
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl shadow-teal-500 rounded-xl sm:w-52">
          <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">
            TailwindCSS
          </p>
        </div>
        
       
        
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl shadow-yellow-200 rounded-xl sm:w-52">
          <SiJavascript color="#ffdf00" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">
            JavaScript
          </p>
        </div> 

        
        
    </div>
  </div>
  )
}

export default Skills;