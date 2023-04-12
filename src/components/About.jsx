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
        Hi, My name is Achhaya Pathak. With a passion for software development, I am currently pursuing my Masters in Mathematics and Computing from IIT Guwahati and I am an upcoming software developer at GIST Impact. In my current project, I am working on the optimal payment split in the Bitcoin Lightning Network. I keep learning about new technologies and in my spare time I like to play flute and tweet irrelevant stuff.
        </p>

        <br />

        <p className="text-xl text-gray-400">
        I've worked in a variety of fields, including machine learning, blockchain technology, full stack development, and web development. I've worked with a number of programming languages and technologies, including C++, C, Java, Javascript, and Python, as well as React, Tailwind CSS, and streamlit, among others. My experience with databases has been with MySQL and MongoDB. Please communicate with me if any of these technologies intrigues you.
        </p>
      </div>
    </div>
  );
};

export default About;