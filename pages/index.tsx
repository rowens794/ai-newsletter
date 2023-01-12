import Head from "next/head";
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";

import Navbar from "../components/navbar";
import Hero from "../components/heroSignup";
import FeaturedStories from "../components/featuredStories";
import RecentIssues from "../components/recentIssues";
import EmailBanner from "../components/emailBanner";
import Footer from "../components/footer";

export default function Home({ newsletters }: { newsletters: any }) {
  return (
    <>
      <Head>
        <title>Coming Soon in AI</title>
        <meta
          name="description"
          content="A newsletter about up and coming developments in AI."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="mx-auto pt-8 lg:pt-20 w-full">
        <Hero />
        <div className="px-4 sm:px-8 lg:px-4 max-w-7xl mx-auto grid-cols-3 grid gap-20 py-20">
          <div className="col-span-3 lg:col-span-2">
            <FeaturedStories />
          </div>
          <div className="col-span-3 lg:col-span-1">
            <RecentIssues />
          </div>
        </div>
        <EmailBanner />
      </main>

      <Footer />
    </>
  );
}

const client = createClient({
  projectId: "h5m9g9eg",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

//get server side props
export async function getServerSideProps(context: any) {
  const newsletters = await client.fetch(`*[_type == "newsletter"]`);

  return {
    props: { newsletters }, // will be passed to the page component as props
  };
}
