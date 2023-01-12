import React from "react";
import Link from "next/link";

type Props = {};

interface Issue {
  date: string;
  blurb: string;
  stories: string[];
  href: string;
}

const issues: Issue[] = [
  {
    date: "2021-01-01",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stories: [
      "AI in the new economy",
      "The Future of AI is in the Cloud",
      "You can now talk to AI like you would a person",
      "Stable Diffusion Goes Mainstream",
      "A 17 year old writes a book with GPT-3",
    ],
    href: "/issues/2021-01-01",
  },
  {
    date: "2021-01-01",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stories: [
      "AI in the new economy",
      "The Future of AI is in the Cloud",
      "You can now talk to AI like you would a person",
      "Stable Diffusion Goes Mainstream",
      "A 17 year old writes a book with GPT-3",
    ],
    href: "/issues/2021-01-01",
  },
  {
    date: "2021-01-01",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stories: [
      "AI in the new economy",
      "The Future of AI is in the Cloud",
      "You can now talk to AI like you would a person",
      "Stable Diffusion Goes Mainstream",
      "A 17 year old writes a book with GPT-3",
    ],
    href: "/issues/2021-01-01",
  },
  {
    date: "2021-01-01",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stories: [
      "AI in the new economy",
      "The Future of AI is in the Cloud",
      "You can now talk to AI like you would a person",
      "Stable Diffusion Goes Mainstream",
      "A 17 year old writes a book with GPT-3",
    ],
    href: "/issues/2021-01-01",
  },
  {
    date: "2021-01-01",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stories: [
      "AI in the new economy",
      "The Future of AI is in the Cloud",
      "You can now talk to AI like you would a person",
      "Stable Diffusion Goes Mainstream",
      "A 17 year old writes a book with GPT-3",
    ],
    href: "/issues/2021-01-01",
  },
];

export default function index({}: Props) {
  return (
    <div className="">
      <div className="w-full border-b-2 border-gray-700">
        <h2 className="font-bold font-audiowide">Recent Issues</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
        {issues.map((issue, i) => (
          <Issue issue={issue} key={i} />
        ))}
      </div>
    </div>
  );
}

const Issue = ({ issue }: { issue: Issue }) => {
  return (
    <Link
      href={issue.href}
      className="hover:bg-yellow-200 transition-all duration-300 rounded-md p-2 hover:scale-[1.01] block mt-2"
    >
      <div className="w-full border-gray-700">
        <h2 className=" text-gray-700 font-audiowide">
          {new Date(issue.date).toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h2>
      </div>
      <div className="w-full">
        <ul>
          {issue.stories.map((story) => (
            <li key={story} className="text-gray-600 font-light text-sm ml-2">
              - {story}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
