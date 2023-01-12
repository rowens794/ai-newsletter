import React from "react";
import Link from "next/link";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20 py-8 lg:py-16 max-w-7xl mx-auto px-4 sm:px-8 lg:px-4">
      {/* column 1 */}
      <div className="flex flex-col justify-center items-center text-gray-800">
        <span className="text-4xl font-bold font-audiowide">
          Get Smarter about What&apos;s happening in AI.
        </span>
        <span className="py-2 font-light block w-full text-gray-700 text-left md:text-center lg:text-left">
          A <span className="font-bold">5-minute summary</span> of the most
          important developments in your inbox.
        </span>
        <InputEmail />
        <span className="font-thin text-gray-600 text-xs">
          I&apos;m committed to your privacy. I use this info to send you a
          twice a week newsletter - I DON&apos;T SELL YOUR INFO. You may
          unsubscribe at any time. For more information, check out the{" "}
          <Link href="/privacy" className="text-yellow-600 underline">
            Privacy Policy
          </Link>
          .
        </span>
      </div>

      {/* column 2 */}
      <Graphic />
    </div>
  );
}

const InputEmail = () => {
  return (
    <div className="w-full flex border rounded-md p-2 pl-3 my-5 bg-gray-50 shadow-lg">
      <input
        type="email"
        placeholder="Your Email Address"
        className="flex-grow outline-none bg-gray-50"
      />
      <button
        type="submit"
        className="w-28 bg-orange-600 font-black py-2 px-2 rounded-md  text-white"
      >
        Join Now
      </button>
    </div>
  );
};

const heroStories = [
  {
    title: "The Future of AI is in the Cloud",
    href: "#",
    date: "2021-07-01",
  },
  {
    title: "You can now talk to AI like you would a person",
    href: "#",
    date: "2021-08-01",
  },
  {
    title: "Stable Diffusion Goes Mainstream",
    href: "#",
    date: "2021-09-01",
  },
  {
    title: "A 17 year old writes a book with GPT-3",
    href: "#",
    date: "2021-10-01",
  },
  {
    title: "GPT-4 is on the Horizon",
    href: "#",
    date: "2021-11-01",
  },
];

const Graphic = () => {
  return (
    <div className="relative">
      <div className="w-full border-2 border-gray-200 rounded-2xl h-72 z-10 relative bg-white transform lg:rotate-3">
        <div className="p-4">
          <span className="text-2xl text-gray-500 font-bold">Inbox</span>
        </div>
        <div className="px-4 grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className={`${
                item === 1 ? "bg-red-100" : "bg-gray-100"
              } rounded-md h-3 w-full`}
            ></div>
          ))}
        </div>
        <div className="py-8">
          {heroStories.map((item, i) => (
            <div
              key={i}
              className={`border-t border-gray-200 h-[35px] flex hover:transform hover:scale-105 hover:border hover:border-gray-200 hover:bg-white text-gray-400 hover:text-yellow-600 transition-all`}
            >
              <div className="border rounded-sm border-gray-200 w-4 h-4 m-2 flex-shrink-0" />
              <div className="mt-[6px]">
                <Star />
              </div>
              <div className="py-1 px-4 w-full flex justify-between">
                <Link
                  className="font-bold text-sm truncate flex-grow max-w-[80%]"
                  href={item.href}
                >
                  {item.title}
                </Link>
                <span className="text-xs text-gray-400 hidden sm:inline-block">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Star = () => {
  return (
    <svg
      fill="#000000"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 487.222 487.222"
      width="18px"
      height="18px"
    >
      <g className="">
        <path
          className="stroke-2 fill-gray-200 "
          d="M486.554,186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6l-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5l0,0c-5.1,0-9.8,2.9-12.1,7.6
		l-67.5,137.9l-152,22.6c-5.1,0.8-9.3,4.3-10.9,9.2s-0.2,10.3,3.5,13.8l110.3,106.9l-25.5,151.4c-0.9,5.1,1.2,10.2,5.4,13.2
		c2.3,1.7,5.1,2.6,7.9,2.6c2.2,0,4.3-0.5,6.3-1.6l135.7-71.9l136.1,71.1c2,1,4.1,1.5,6.2,1.5l0,0c7.4,0,13.5-6.1,13.5-13.5
		c0-1.1-0.1-2.1-0.4-3.1l-26.3-150.5l109.6-107.5C486.854,197.111,488.154,191.711,486.554,186.811z M349.554,293.911
		c-3.2,3.1-4.6,7.6-3.8,12l22.9,131.3l-118.2-61.7c-3.9-2.1-8.6-2-12.6,0l-117.8,62.4l22.1-131.5c0.7-4.4-0.7-8.8-3.9-11.9
		l-95.6-92.8l131.9-19.6c4.4-0.7,8.2-3.4,10.1-7.4l58.6-119.7l59.4,119.4c2,4,5.8,6.7,10.2,7.4l132,18.8L349.554,293.911z"
        />
      </g>
    </svg>
  );
};
