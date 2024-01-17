import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import pavi from "../../public/pavi.png";

const Main = () => {
  return (
    <div className="flex flex-col w-full h-full text-center full-screen-container:cover xl:w-full xl:h-full full-screen-container bg-opacity-100">
      <div className="px-[5px] py-0 w-full mt-[5px] xl:mt-[100px]">
        <h5 className=" text-cyan-500 text-[25px] mt-[100px] md:mt-[10px]">
          <small>
            <q>
              <cite>
                The cosmos is within us. We are made of star-stuff. We are a way
                for the universe to know itself.
              </cite>
            </q>
            {" - "}
            <span>Carl Sagan</span>
          </small>
        </h5>
      </div>

      <div className="flex flex-col-2 items-center px-[25px] py-0 sm:mt-[25px] xl:ml-[25px]">
        <div>
          <h1 className=" mt-[25px] ml-5">
            <span className="text-white"> Pavithraa</span>{" "}
            <span className="text-white">Sundararajan</span>
          </h1>
          <h2 className="py-4 text-gray-300 rounded-[5px] bg-opacity-20 mt-2">
            Ph.D. (Molecular Science/Astrochemistry)
          </h2>
          <h6 className="m1-9 text-gray-300 rounded-[5px] bg-opacity-40 sm:max-w-[100%] mb-10 ">
            Astrochemistry/Interstellar Chemistry, Spectroscopy, PAH Chemistry
            in space.
          </h6>
        </div>
        <div className="mt-[30px] xl:ml-10">
          <Image
            src={pavi}
            alt="/"
            width="175"
            height="125"
            className="cursor-pointer rounded-full"
          />
        </div>
        <div className="grid grid-rows-2"></div>
      </div>

      <div className="mx-[100px]">
        <p className=" bg-black rounded-[5px] bg-opacity-10 text-left text-white p-5 mt-5 mx-5">
          I am an experimental Astrochemist with nine years of international
          research experience, currently a Marie Curie Postdoctoral Fellow at
          the Leiden Observatory. Astronomy generally makes us ponder on stars,
          planets and galaxies, etc., but I am curious about the molecules
          building up these celestial bodies. Experimental Astrochemistry is a
          vast and interdisciplinary field incorporating several techniques in a
          laboratory to simulate the conditions of outer space or planetary
          surfaces. Spectroscopy is the prime tool used to probe the
          fingerprints of astro-relevant molecules. This study is fundamental to
          interpret the observational data sent by space telescopes. Over the
          years, I have gained ability to perform three key experimental
          techniques that are equally important to understand astro-relevant
          molecules:
        </p>
        <div className="bg-black rounded-[5px] bg-opacity-10 mt-0 text-left ml-[100px] text-white p-5 mx-5">
          <ol className="list-decimal">
            <li>Low temperature ice-phase experiments</li>
            <li>Matrix isolation technique in solid p-H2</li>
            <li>Gas Phase dissociation experiments </li>
          </ol>
        </div>
        <div className="mt-5">
          <p className="ml-5 mr-5 text-left bg-black rounded-[5px] bg-opacity-10 text-white mx-5 p-5">
            I also have hands-on experience in several spectroscopic techniques
            including:
          </p>
          <ul className="list-disc bg-black rounded-[5px] bg-opacity-10 ml-[100px] text-left text-white p-5 mx-5 ">
            <li>Infrared spectroscopy</li>
            <li>Vacuum Ultraviolet (VUV) Spectroscopy</li>
            <li>Quadrupole Ion Trap, Time-of-Flight Mass spectroscopy, etc.</li>
          </ul>
        </div>
        <div className="bg-black rounded-[5px] bg-opacity-10 text-white">
          <p className="text-left ml-10 mt-5 p-5">
            I realized the importance of larger molecules in space that could
            contribute to the Aromatic Infrared Bands (AIBs) which is a
            long-standing problem in Astronomy. My present research is involves
            spectroscopy and spectrometry of large hydrocarbon molecules called
            the Polycyclic Aromatic Hydrocarbons (PAHs) that are considered to
            be the emitters of AIB. Apart from research, I also take interest
            and initiative in several outreach activities. My hobbies include
            pencil sketching, doodling, traveling, cycling, etc.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between max-w-[170px] m-auto py-4 mt-[35px] gap-5">
        <Link href="https://google.com/gmail">
          <div className="rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-white">
            <AiOutlineMail />
          </div>
        </Link>
        <Link href="https://www.researchgate.net/profile/Pavithraa-Sundararajan">
          <div className="rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-white">
            <BsFillPersonLinesFill />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
