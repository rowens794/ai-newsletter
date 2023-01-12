import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../logo";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Past Letters", href: "#", current: false },
  { name: "RSS Feed", href: "#", current: false },
];

type Props = {};

export default function index({}: Props) {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex justify-between w-full">
                <Logo />
                <DesktopLinks />
              </div>
              <SignUpButton />
              <MobileMenuButton open={open} />
            </div>
          </div>
          <MobileLinks />
        </>
      )}
    </Disclosure>
  );
}

const MobileMenuButton = ({ open }: { open: boolean }) => {
  return (
    <div className="-mr-2 flex sm:hidden">
      {/* Mobile menu button */}
      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <span className="sr-only">Open main menu</span>
        {open ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Disclosure.Button>
    </div>
  );
};

const SignUpButton = () => {
  return (
    <div className="hidden sm:ml-6 sm:block ">
      <div className="flex items-center">
        <button
          type="button"
          className="rounded-md bg-gray-800 border border-yellow-500 py-1 px-2 text-yellow-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 w-28 lg:w-44 transition-colors"
        >
          Sign Up Free
        </button>
      </div>
    </div>
  );
};

const DesktopLinks = () => {
  return (
    <div className="hidden md:ml-6 md:block">
      <div className="flex space-x-4">
        {navigation.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-md  px-3 py-2 text-sm font-medium text-yellow-50"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const MobileLinks = () => {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3">
        {navigation.map((item) => {
          return (
            <Disclosure.Button
              as="a"
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-white"
              key={item.name}
            >
              {item.name}
            </Disclosure.Button>
          );
        })}
      </div>
    </Disclosure.Panel>
  );
};
