import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo2 from "../public/derlenglogo2.png";

function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="navbar nav-shadow fixed w-full z-10 top-0 ">
      <nav
        id="navbar"
        className="  py-2 relative flex flex-wrap items-center justify-between bg-white"
      >
        <div className="w-full flex flex-col lg:flex-row justify-between mx-14">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="">
              <nav className="flex flex-row">
                <Link href="/">
                  <a className="">
                    {/* <h1 className="text-8xl font-medium text-slate-700">
                    ដើរលេង
                  </h1> */}
                    <Image src={logo2} width={125} height={50}></Image>
                  </a>
                </Link>
              </nav>
            </div>
            <div>
              {" "}
              <button
                className="text-slate-700 cursor-pointer text-xl leading-none  py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-end xl:border-non lg:p-0 p-6" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {" "}
              <a>
                {" "}
                <li className="nav-item hover:scale-105">
                  <Link href="/">
                    <a className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-slate-700 hover:opacity-75">
                      <i className=" text-slate-700 opacity-75"></i>
                      <span className="text-lg truncate p-1 text-slate-700 hover:text-pink-800 ">
                        {" "}
                        ទំព័រដើម
                      </span>
                    </a>
                  </Link>
                </li>
              </a>
              <a href="#introduction">
                {" "}
                <li className="nav-item rounded-xl">
                  <a className="px-3 py-2 flex items-center uppercase  leading-snug text-slate-700 hover:opacity-75">
                    <i className="text-slate-700 opacity-75"></i>
                    <span className="text-lg truncate p-1 text-slate-700 hover:text-pink-800 ">
                      {" "}
                      ដើរលេងជាអ្វី?
                    </span>
                  </a>
                </li>
              </a>
              <a href="#ourservice">
                {" "}
                <li className="nav-item rounded-xl">
                  <a className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-slate-700 hover:opacity-75">
                    <i className=" text-slate-700 opacity-75"></i>
                    <span className="text-lg truncate p-1 text-slate-700 hover:text-pink-800 ">
                      {" "}
                      សេវាកម្ម
                    </span>
                  </a>
                </li>
              </a>
              <a href="#how-it-work">
                {" "}
                <li className="nav-item rounded-xl">
                  <a className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-slate-700 hover:opacity-75">
                    <i className="text-slate-700 opacity-75"></i>
                    <span className="text-lg truncate p-1 text-slate-700 hover:text-pink-800 ">
                      {" "}
                      របៀបប្រើប្រាស់
                    </span>
                  </a>
                </li>
              </a>
              <a href="#faq">
                {" "}
                <li className="nav-item rounded-xl">
                  <a className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-slate-700 hover:opacity-75">
                    <i className="text-slate-700 opacity-75"></i>
                    <span className="text-lg truncate p-1 text-slate-700 hover:text-pink-800 ">
                      {" "}
                      សំណួរ ចម្លើយ
                    </span>
                  </a>
                </li>
              </a>
              <a href="#topsupplier">
                {" "}
                <li className="nav-item rounded-xl">
                  <a className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-slate-700 hover:opacity-75">
                    <i className=" text-slate-700 opacity-75"></i>
                    <span className="text-lg truncate p-1 text-slate-700 hover:text-pink-800 ">
                      {" "}
                      អ្នកផ្គត់ផ្គង់របស់យើង
                    </span>
                  </a>
                </li>
              </a>
              <a href="#contact-us">
                {" "}
                <li className="nav-item rounded-xl">
                  <a className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-slate-700 hover:opacity-75">
                    <i className="text-slate-700 opacity-75"></i>
                    <span className="text-lg truncate p-1 text-slate-700 hover:text-pink-800 ">
                      {" "}
                      ទំនាក់ទំនង
                    </span>
                  </a>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
