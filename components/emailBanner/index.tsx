import React from "react";
import Link from "next/link";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="rounded-lg px-6 py-6 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl font-bold tracking-tight text-gray-200 sm:text-3xl">
              5 minutes of the most interesting news in AI
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-200">
              In your inbox every Monday & Thursday.
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-yellow-700"
                placeholder="Your email address"
              />
              <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-500 px-5 py-3 text-base font-black text-white shadow hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-yellow-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Join Now
              </button>
            </form>
            <p className="mt-3 text-sm text-gray-300 font-light">
              I care about the protection of your data. Read my{" "}
              <Link href="/privacy" className="text-gray-300 underline">
                Privacy Policy.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
