import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-8 text-gray-400">
        Hey there! I'm Achhaya Pathak, a passionate and skilled developer specializing in creating innovative solutions. With a strong background in software development and a knack for problem-solving, I thrive on tackling complex challenges and turning them into elegant, user-friendly applications. Throughout my journey, I have honed my skills in various programming languages and technologies, allowing me to adapt and excel in diverse projects. I have expertise in full-stack application development, where I seamlessly integrate front-end technologies like HTML, CSS, and ReactJs with back-end frameworks like PHP and databases such as SQL and MongoDB.
        </p>
{/* 
        <br />

        <p className="text-xl text-gray-400">
        What sets me apart is my drive for continuous learning and staying up-to-date with the latest industry trends. I have a deep-rooted passion for exploring new technologies, from deep learning to blockchain, and leveraging them to build cutting-edge solutions. With a keen eye for detail, I strive to deliver high-quality code that not only meets functional requirements but also exceeds expectations in terms of performance and user experience. Whether it's collaborating with a team or taking ownership of a project, I am dedicated to delivering results that make a meaningful impact. If you're looking for a creative and adaptable developer with a passion for innovation, I would be thrilled to contribute my skills and expertise to your next venture.
        </p> */}
      </div>
    </div>
  );
};

export default About;
