import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

interface Story {
  title: string;
  blurb: string;
  date: string;
  image: string;
  href: string;
}

const stories: Story[] = [
  {
    title: "AI in the new economy",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2021-01-01",
    image: "https://loremflickr.com/800/400",
    href: "/articles/ai-in-the-new-economy",
  },
  {
    title: "The Future of AI is in the Cloud",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2021-01-01",
    image: "https://loremflickr.com/400/200",
    href: "/articles/the-future-of-ai-is-in-the-cloud",
  },
  {
    title: "You can now talk to AI like you would a person",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2021-01-01",
    image: "https://loremflickr.com/400/200",
    href: "/articles/you-can-now-talk-to-ai-like-you-would-a-person",
  },
  {
    title: "Stable Diffusion Goes Mainstream",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2021-01-01",
    image: "https://loremflickr.com/400/200",
    href: "/articles/stable-diffusion-goes-mainstream",
  },
  {
    title: "A 17 year old writes a book with GPT-3",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2021-01-01",
    image: "https://loremflickr.com/400/200",
    href: "/articles/a-17-year-old-writes-a-book-with-gpt-3",
  },
];

export default function index({}: Props) {
  let mainStory = stories[0];
  let otherStories = stories.slice(1, stories.length);

  return (
    <div className="">
      <div className="w-full border-b-2 border-gray-700 mb-4">
        <h2 className="font-bold font-audiowide text-gray-800">
          Featured Stories
        </h2>
      </div>
      <MainStory story={mainStory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 sm:pt-12">
        {otherStories.map((story, i) => (
          <SecondaryStory story={story} key={i} i={i} />
        ))}
      </div>
    </div>
  );
}

const MainStory = ({ story }: { story: Story }) => {
  return (
    <Link
      href={story.href}
      className="hover:bg-yellow-200 transition-all duration-300 rounded-md p-2 w-full block hover:scale-[1.01]"
    >
      <Image
        src={story.image}
        alt="story image"
        className="object-fill w-full"
        width={800}
        height={600}
      />
      <h3 className="text-xl sm:text-3xl font-bold font-audiowide py-2 text-gray-700">
        <span className="text-yellow-600 pr-2">01</span>
        {story.title}
      </h3>
      <p className="font-light text-gray-700">{story.blurb}</p>
    </Link>
  );
};

const SecondaryStory = ({ story, i }: { story: Story; i: number }) => {
  return (
    <Link
      href={story.href}
      className="hover:bg-yellow-200 transition-all duration-300 rounded-md p-2 hover:scale-[1.025]"
    >
      <Image
        src={story.image}
        alt="story image"
        className="object-fill"
        width={800}
        height={600}
      />
      <h3 className="text-xl font-bold font-audiowide py-2 text-gray-700">
        <span className="text-yellow-600 pr-2">0{i + 2}</span>
        {story.title}
      </h3>
      <p className="text-gray-700 font-light">{story.blurb}</p>
    </Link>
  );
};
