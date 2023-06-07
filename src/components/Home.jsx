import React from 'react';
import HeroImage from "../assets/heroImage.png";
import {FiArrowRight} from 'react-icons/fi'

const Home = () => {
  return (
    <div name="home" className='flex flex-wrap h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full mr-10'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                I am a Developer
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>
                Hello, I'm Achhaya Pathak, a skilled and dedicated developer with a passion for creating innovative solutions. I recently completed my post-graduation in mathematics and computing from IIT Guwahati, where I gained extensive experience in full-stack application development, deep learning, and blockchain. With expertise in languages such as C/C++, Java, and proficiency in database management using SQL and MongoDB, I am well-equipped to tackle complex technical challenges. If you're interested in learning more about my skills and experience, please take a look at my CV!
            </p>
            <div>
              <a href="/Achhaya_CV.pdf" download={true}>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Download CV
                    <span className='group-hover:rotate-90 duration-300'>
                        <FiArrowRight size={20} className="ml-1"/>
                    </span>
                </button>
              </a>
            </div>
        </div>

        <div>
            <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3'/>
        </div>

      </div>
    </div>
  )
}

export default Home
