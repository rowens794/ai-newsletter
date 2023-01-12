import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

type Props = {};

export default function privacy({}: Props) {
  return (
    <>
      {" "}
      <Navbar />
      <div className="py-8 sm:py-20 max-w-5xl mx-auto px-4">
        <h1 className="font-bold text-xl pb-8 text-gray-700">
          ComingSoonInAI Privacy Policy
        </h1>

        <p className="text-gray-700 font-light">
          ComingSoonInAI collects personal information from users in order to
          send newsletters and measure bsite traffic. This policy explains how
          the Site collects, uses, and shares your personal information.
        </p>

        <h2 className="text-gray-700 font-bold text-lg underline pt-8">
          Information I Collect
        </h2>

        <p className="text-gray-700 font-light">
          ComingSoonInAI collects the following types of personal information
          from users:
        </p>

        <ul className="text-gray-700 font-light list-disc ml-2 list-inside">
          <li>Names</li>
          <li>Email addresses</li>
        </ul>

        <p className="text-gray-700 font-light">
          ComingSoonInAI also uses cookies and Google Analytics to collect
          additional information about users and website usage data.
        </p>

        <h2 className="text-gray-700 font-bold text-lg underline pt-8">
          How I Collect Information
        </h2>

        <p className="text-gray-700 font-light">
          ComingSoonInAI collects personal information through website forms and
          through the use of cookies and Google Analytics. By using the Site,
          you consent to the collection of this information.
        </p>

        <h2 className="text-gray-700 font-bold text-lg underline pt-8">
          Why I Collect Information
        </h2>

        <p className="text-gray-700 font-light">
          ComingSoonInAI collects personal information for the following
          purposes:
        </p>

        <ul className="text-gray-700 font-light list-disc ml-2 list-inside">
          <li>To send newsletters to users who have subscribed</li>
          <li>To measure website traffic and improve the Site</li>
        </ul>

        <h2 className="text-gray-700 font-bold text-lg underline pt-8">
          How I Use Information
        </h2>

        <p className="text-gray-700 font-light">
          ComingSoonInAI uses personal information for the following purposes:
        </p>

        <ul className="text-gray-700 font-light list-disc ml-2 list-inside">
          <li>To send newsletters to users who have subscribed</li>
          <li>To improve the Site based on usage data</li>
        </ul>

        <h2 className="text-gray-700 font-bold text-lg underline pt-8">
          How I Share Information
        </h2>

        <p className="text-gray-700 font-light">
          ComingSoonInAI shares personal information with the following third
          party service providers:
        </p>

        <ul className="text-gray-700 font-light list-disc ml-2 list-inside">
          <li>
            MailerLite (My email service provider - I use them to manage, send,
            and track email statistics )
          </li>
          <li>
            Google Analytics (My web analytics service provider - I use them to
            track website usage. )
          </li>
        </ul>

        <h2 className="text-gray-700 font-bold text-lg underline pt-8">
          How I Protect Information
        </h2>

        <p className="text-gray-700 font-light">
          ComingSoonInAI uses encrypted web protocols (https) and secure access
          controls at 3rd party vendors to protect personal information from
          unauthorized access. However, no method of internet transmission or
          storage is completely secure.
        </p>

        <h2 className="text-gray-700 font-bold text-lg underline pt-8">
          Your Rights and Choices
        </h2>

        <p className="text-gray-700 font-light">
          You have the right to opt out of receiving newsletters from
          ComingSoonInAI at any time. You can do this by clicking the
          &quot;unsubscribe&quot; link at the bottom of any email that I send.
          You can also contact me directly at ryan@comingsooninai.com to request
          that your personal information be deleted from the sites records.
        </p>

        <h2 className="text-gray-700 font-bold text-lg underline pt-8">
          Changes to This Policy
        </h2>

        <p className="text-gray-700 font-light">
          I may update this policy from time to time. I will post any changes on
          this page and notify you via email. By continuing to use
          ComingSoonInAI after changes are posted/emailed, you agree to be bound
          by the revised policy.
        </p>

        <h2 className="text-gray-700 font-bold text-lg underline pt-8">
          Contact Us
        </h2>

        <p className="text-gray-700 font-light">
          If you have any questions about this policy or my use of your personal
          information, please contact me at ryan@comingsooninai.com.
        </p>
      </div>
      <Footer />
    </>
  );
}
