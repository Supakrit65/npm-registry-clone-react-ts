import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function SomethingWentWrong() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-lg text-center">
      <FaExclamationTriangle className="mx-auto h-12 w-12 text-red-500 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        Something Went Wrong!
      </h1>
      <p className="text-gray-600 dark:text-neutral-300 mb-8">
        We apologize for the inconvenience. Please try again later.
      </p>
      <Link
        to="/"
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-red-200 dark:focus:ring-red-800"
      >
        Back to Home
      </Link>
    </div>
  );
}
