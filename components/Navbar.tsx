import Image from "next/image";
import React from "react";
import mujtaba from "../.next/cache/images/Mujtaba.png";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-4 bg-white shadow-md">
      <div className="w-full max-w-[1200px] mx-auto h-16 flex justify-between items-center">
        <h1 className="text-xl font-black">Grammar AI</h1>
        <a
          href="https://portfolio-mujtaba.netlify.app/"
          target={"_blank"}
          className="flex items-center gap-4 text-sm"
        >
          Developed by
          <Image
            src={mujtaba}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full bg-contain"
          />
        </a>
      </div>
    </nav>
  );
}
