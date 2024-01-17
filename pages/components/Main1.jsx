import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import pavi from "../../public/pavi.png";

const Main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen text-center full-screen-container"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="flex flex-col-2 mt-[250px] gap-10">
            <div>
              <h1 className="py-4 text-gray-700 mt-[30px]">
                <span className="text-white"> Pavithraa</span>
                {"  "} <span className="text-white">Sundararajan</span>
              </h1>
            </div>
            <div>
              <Image
                src={pavi}
                alt="/"
                width="150"
                height="100"
                className="cursor-pointer rounded-full"
              />
            </div>
          </div>

          <h2 className="py-2 text-[#b9c4d4] mt-5">
            Ph.D. (Molecular Science/Astrochemistry)
          </h2>
          <p className="py-4 text-[#b9c4d4] sm:max-w-[70%] m-auto">
            Astrochemistry/Interstellar Chemistry, Spectroscopy,{" "}
            <bold>PAH</bold> Chemistry in space.
          </p>
          <div className="mt-[50px]">
            <div className="mt-[5px]">
              <p className="text-white text-[30px]">
                <small>
                  <q>
                    <cite>
                      The cosmos is within us. We are made of star-stuff. We are
                      a way for the universe to know itself.
                    </cite>
                  </q>
                  {" - "} <span>Carl Sagan</span>
                </small>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between max-w-[170px] m-auto py-4 mt-[35px]">
            {/* <a
              href="https://www.linkedin.com/in/clint-briley-50056920a/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/fireclint"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a> */}
            <Link href="https://google.com/gmail">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="https://www.researchgate.net/profile/Pavithraa-Sundararajan">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
