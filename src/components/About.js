import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view'


function About() {
  return (
    <div>
     
      <div className="max-w-4xl mt-20 mx-auto">
        <p className="text-2xl text-gray-100  md:text-4xl font-bold text-center">
        Hey 👋  
        </p>
        <p className="text-base text-left md:text-center text-gray-100 leading-relaxed mt-4 justify-center">
        I'm a passionate web developer. I love creating projects which solve the problems. I also love  contributing to open-source projects. 

        </p>

      
      
      </div>
      
      
      <ScrollIntoView selector = "#tech">

        <div class='mx-auto p-20'>
          
           <FaChevronDown class= "animate-bounce mx-auto text-3xl text-white"/> 
      
        </div>
       </ScrollIntoView>
    </div>
  )
}

export default About;