import React from "react";

import defin from "../assets/portfolio/defin.png";
import blog from "../assets/portfolio/blog.png";
import anomaly from "../assets/portfolio/anomaly.png";
import movieflix from "../assets/portfolio/movieflix.png";
import buysell from "../assets/portfolio/buysell.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: defin,
      title: "DeFin",
      description: "An Etherium wallet",
      href1: 'https://de-fin.vercel.app/',
      href2: 'https://github.com/achhayapathak/DeFin'
    },
    {
      id: 2,
      src: blog,
      title: "Full stack Blog app",
      description: "",
      href1: 'https://shailkas-blog.onrender.com/',
      href2: 'https://github.com/achhayapathak/blog-app-frontend'
    },
    {
      id: 3,
      src: anomaly,
      title: "Anomaly Detector",
      description: "",
      href1: 'https://achhayapathak-theft-and-anomaly-detection-main-qfvs43.streamlit.app/',
      href2: 'https://github.com/achhayapathak/CCTV-Anomaly-Detector'
    },
    {
      id: 4,
      src: movieflix,
      title: "MovieFlix",
      description: "",
      href1: 'https://movie-recommendation-eta.vercel.app/',
      href2: 'https://github.com/achhayapathak/Movie_Recommendation'
    },
    {
      id: 5,
      src: buysell,
      title: "IITG Buy and Sell",
      description: "",
      href1: '',
      href2: 'https://github.com/achhayapathak/IITG-Buy-and-Sell'
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-4"></p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href1, href2, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <h3 className="flex items-center justify-center text-lg">{title}</h3>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-2 m-3 duration-200 hover:scale-105">
                <a href={href1} target="_blank" rel='noreferrer' className="text-gray-400"> Demo </a>
                </button>
                <button className="w-1/2 px-6 py-2 m-3 duration-200 hover:scale-105">
                <a href={href2} target="_blank" rel='noreferrer' className="text-gray-400"> Code </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;