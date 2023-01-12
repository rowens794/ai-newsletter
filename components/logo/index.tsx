import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="flex-shrink-0 font-audiowide h-9">
      <Image
        height={40}
        width={40}
        className="inline-block h-8 w-auto mr-2"
        src="/logo-light.svg"
        alt="Coming Soon in AI"
      />
      <div className="inline-block transform translate-y-1">
        <span className="text-xl font-thin text-yellow-500 mr-1 inline-block">
          Coming Soon
        </span>
        <span className="text-xs font-light text-yellow-300 mr-1">in</span>
        <span className="text-xl font-black text-yellow-600 ">AI</span>
      </div>
    </div>
  );
}
