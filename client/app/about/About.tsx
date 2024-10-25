import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white bg-gray-50 dark:bg-gray-900 py-10">
      <div className="w-[95%] 800px:w-[85%] m-auto text-center">
        <h1 className={`${styles.title} 800px:!text-[45px] text-4xl font-bold`}>
          What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">EduMatrixAI?</span>
        </h1>
        <br />
        <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
          Are you ready to take your programming skills to the next level? Look no further than EduMatrixAI, the premier programming community dedicated to helping new programmers achieve their goals and reach their full potential.
        </p>
      </div>
      <br />

      <div className="w-[95%] 800px:w-[70%] m-auto text-left">
        <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
          As the founder and CEO of EduMatrixAI, I know firsthand the challenges that come with learning and growing in the programming industry. That&apos;s why I created EduMatrixAI &ndash; to provide new programmers with the resources and support they need to succeed.
        </p>
        <br />
        <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
          Our YouTube channel is a treasure trove of informative videos on everything from programming basics to advanced techniques. But that&apos;s just the beginning. Our affordable courses are designed to give you the high-quality education you need to succeed in the industry, without breaking the bank.
        </p>
        <br />
        <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
          At EduMatrixAI, we believe that price should never be a barrier to achieving your dreams. That&apos;s why our courses are priced low &ndash; so that anyone, regardless of their financial situation, can access the tools and knowledge they need to succeed.
        </p>
        <br />
        <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
          But EduMatrixAI is more than just a community &ndash; we&apos;re a family. Our supportive community of like-minded individuals is here to help you every step of the way, whether you&apos;re just starting out or looking to take your skills to the next level.
        </p>
        <br />
        <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
          With EduMatrixAI by your side, there&apos;s nothing standing between you and your dream job. Our courses and community will provide you with the guidance, support, and motivation you need to unleash your full potential and become a skilled programmer.
        </p>
        <br />
        <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
          So what are you waiting for? Join the EduMatrixAI family today and let&apos;s conquer the programming industry together! With our affordable courses, informative videos, and supportive community, the sky&apos;s the limit.
        </p>
      </div>
      <br />
    </div>
  );
};

export default About;
