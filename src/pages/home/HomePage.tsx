import { Link, useLoaderData } from "react-router-dom";
import { HomeLoaderResult } from "./homeLoader";
import { type PackageDetail } from "../../api/types/packageFull";

function HomePage() {
  const { featuredPkgDetails } = useLoaderData() as HomeLoaderResult;

  const renderedFeaturedPackages = featuredPkgDetails.map(
    (pkg: PackageDetail) => (
      <div
        key={pkg.name}
        className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 mb-4 flex flex-col justify-between relative"
        style={{ aspectRatio: "1 / 1" }}
      >
        <div>
          <h2 className="text-4xl font-semibold transition-colors duration-300 hover:text-red-600 dark:text-neutral-100">
            {pkg.name}
          </h2>
          <p className="text-neutral-600 text-lg dark:text-neutral-300 flex-grow mt-3">
            {pkg.description}
          </p>
        </div>
        <Link
          className="absolute bottom-4 right-4 bg-red-500 text-white group font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:bg-red-600 hover:shadow-md"
          to={`/packages/${pkg.name}`}
        >
          View{" "}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    )
  );

  return (
    <div className="container mx-auto p-12">
      <h1 className="text-7xl font-extrabold text-center mb-6">The NPM Registry</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center mb-6 w-3/5 mx-auto">
        Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {renderedFeaturedPackages}
      </div>
    </div>
  );
}

export default HomePage;
