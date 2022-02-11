import Nav from "../components/Nav";
import Logo from "../components/Logo";
import BtnLogin from "../components/BtnLogin";
import { PhoneIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 dark:border-gray-700 lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-40">
      <nav className="container px-4 py-2 mx-auto space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-10">
        <div className="w-1/12">
          <Logo />
        </div>
        <div className="w-6/12 lg:flex lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:space-x-2">
          <Nav />
        </div>
        <div className="w-5/12 text-right">
          <span className="mx-8 font-medium hidden lg:inline-block">
            <PhoneIcon
              className="w-5 h-5 ml-2 mr-1 inline"
              aria-hidden="true"
            />
            +628123456789
          </span>
          <BtnLogin>Log In</BtnLogin>
        </div>
      </nav>
    </header>
  );
}
