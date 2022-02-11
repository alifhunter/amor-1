import NavItem from "./NavItem";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "Hosting", href: "#" },
  { name: "Domain", href: "#" },
  { name: "Dedicated Server", href: "#" },
];

export default function Nav() {
  return (
    <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row justify-center py-6 lg:ml-4 lg:space-x-8 xl:space-x-10 lg:items-center font-medium ">
      {/* <ul className="flex justify-center py-6 space-x-10 font-medium"> */}
      {/* <NavItem>Hosting</NavItem>
      <NavItem>Domain</NavItem>
      <NavItem>Dedicated Server</NavItem> */}
      <Menu>
        <div className="relative inline-block hidden lg:block">
          <div>
            <Menu.Button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownHosting"
              className="text-14px font-medium dark:text-gray-200 hover:text-softPurple flex items-center space-x-1 focus:outline-none"
            >
              <span>Hosting</span>
              <ChevronDownIcon
                className="w-5 h-5 ml-2 -mr-1"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              id="dropdownHosting"
              className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      href="/unlimited-hosting"
                    >
                      Unlimited Hosting
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      href="/unlimited-hosting"
                    >
                      Shared Hosting
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      href="/unlimited-hosting"
                    >
                      Cloud Hosting
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </div>
      </Menu>
      <Menu>
        <div className="relative inline-block hidden lg:block">
          <div>
            <Menu.Button className="text-14px font-medium dark:text-gray-200 hover:text-softPurple flex items-center space-x-1 focus:outline-none">
              <span>Domain</span>
              <ChevronDownIcon
                className="w-5 h-5 ml-2 -mr-1"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              id="dropdownHosting"
              className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      href="/unlimited-hosting"
                    >
                      Unlimited Hosting
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      href="/unlimited-hosting"
                    >
                      Shared Hosting
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </div>
      </Menu>
      <a
        href="#"
        className="relative inline-block hidden lg:block text-14px font-medium hover:text-softPurple"
      >
        Dedicated Server
      </a>
    </div>
  );
}
