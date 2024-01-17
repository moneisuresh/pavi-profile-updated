import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Meteor_Shower from "../../styles/Meteor_Shower.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#ecf0f3");
  const [position, setPosition] = useState("fixed");
  const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === "/property" ||
  //     router.asPath === "/crypto" ||
  //     router.asPath === "/netflix" ||
  //     router.asPath === "/twitch"
  //   ) {
  //     setNavBg("transparent");
  //     setLinkColor("#ecf0f3");
  //   } else {
  //     setNavBg("#ecf0f3");
  //     setLinkColor("#1f2937");
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 "
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[#151f29]">
        <Link legacyBehavior href="/">
          <a>
            <Image
              src={Meteor_Shower}
              alt="/"
              width="40"
              height="40"
              className="cursor-pointer rounded-full"
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm hover:border-b text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm hover:border-b text-white">
              <Link
                href="/components/Education_Background
"
              >
                Educational Background
              </Link>
            </li>
            <li className="ml-10 text-sm hover:border-b text-white">
              <Link href="/components/Research_skills">Research Skills</Link>
            </li>
            <li className="ml-10 text-sm hover:border-b text-white">
              <Link href="/components/Publications">Publications</Link>
            </li>
            <li className="ml-10 text-sm hover:border-b text-white">
              <Link href="/components/Projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm hover:border-b text-white">
              <Link href="/components/Conference">Conferences</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1f87d7] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link legacyBehavior href="/">
                <a>
                  <Image
                    src={Meteor_Shower}
                    width="40"
                    height="40"
                    alt="/"
                    className="rounded-full"
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              {/* <p className="w-[85%] md:w-[90%] py-4">zzz</p> */}
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/components/Education_Background">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Educational backgrounds
                </li>
              </Link>
              <Link href="/components/Research_skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Research skills
                </li>
              </Link>
              <Link href="/components/Publications">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Publications
                </li>
              </Link>
              <Link href="/components/Projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/components/Conference">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Conference
                </li>
              </Link>
            </ul>
            <div className="pt-5">
              <p className="lowercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-center my-4 w-full sm:w-[80%] gap-14 m-10">
                {/* <a
                  href="https://www.linkedin.com/in/clint-briley-50056920a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a> */}
                {/* <a
                  href="https://github.com/fireclint"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a> */}
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="https://www.researchgate.net/profile/Pavithraa-Sundararajan">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
