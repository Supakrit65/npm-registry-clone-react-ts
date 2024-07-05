import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-gray-200 dark:bg-neutral-900 dark:border-neutral-800 shadow-md">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link className="flex items-center space-x-2" to={"/"}>
          <img src="npm-icon.svg" className="h-8" alt="NPM Registry Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            NPM Registry
          </span>
        </Link>
        <div className="w-1/4">
          <SearchInput />
        </div>
      </div>
    </nav>
  );
}

export default Header;