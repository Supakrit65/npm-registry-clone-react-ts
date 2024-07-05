import { FiSearch } from "react-icons/fi";
import { Form } from "react-router-dom";

function SearchInput() {
  return (
    <Form action="/search" className="relative flex items-center">
      <input
        type="text"
        name="term"
        id="search-navbar"
        className="block w-full p-2 pl-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
        placeholder="Search Packages..."
        required
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
      >
        <FiSearch className="w-5 h-5" aria-hidden="true" />
      </button>
    </Form>
  );
}

export default SearchInput;
