import React from "react";
import Link from "next/link";
import Logo from "../logo";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="bg-gray-800 py-12">
      <div className="text-center">
        <Logo />
      </div>
      <div className="flex flex-row mx-auto gap-8 w-[600px] justify-center py-4 text-white font-light ">
        <Link href="/" className="hover:text-yellow-100">
          Home
        </Link>
        <Link href="/" className="hover:text-yellow-100">
          Past Letters
        </Link>
        <Link href="/" className="hover:text-yellow-100">
          Articles
        </Link>
        <Link href="/" className="hover:text-yellow-100">
          RSS Feed
        </Link>
        <Link href="/privacy" className="hover:text-yellow-100">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
