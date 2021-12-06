import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import axios from "axios";
const string_or_null = (string: string | string[] | null) => {
  if (string) {
    return string;
  }
  return "";
};

const Username = (
  username: string | null,
  prevUrl: string | string[] | null
) => {
  if (username) {
    return (
      <>
        <li className="nav-item">
          <Link href="/userpage" passHref>
            <a className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75">
              <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">{username}</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href={`/logout?prevUrl=${string_or_null(prevUrl)}`} passHref>
            <a className="px-3 py-2 flex items-center  text-lg uppercase font-bold leading-snug text-white hover:opacity-75">
              <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Logout</span>
            </a>
          </Link>
        </li>
      </>
    );
  } else {
    return (
      <li className="nav-item">
        <Link href={`/login?prevUrl=${string_or_null(prevUrl)}`} passHref>
          <a className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75">
            <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
            <span className="ml-2">Login</span>
          </a>
        </Link>
      </li>
    );
  }
};
type token = {
  exp: number;
  fav_color: string;
  iat: number;
  jti: string;
  token_type: string;
  user_id: number;
  username: string;
};
const Navbar = () => {
  const [username, setusername] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    const rawtoken = localStorage.getItem("access_token");
    try {
      const token: any = rawtoken && jwt_decode(rawtoken);
      setusername(token?.username);
    } catch (e) {
      setusername(null);
    }
  }, [router]);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" passHref>
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <div className=" text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                Aeonmoon Homepage
              </div>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </Link>
          <Link href="/lor" passHref>
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <div className=" text-base font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-yellow-200">
                Library of Ruina
              </div>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </Link>
          <div
            className={"lg:flex flex-grow items-center"}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {Username(username, router.pathname)}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
