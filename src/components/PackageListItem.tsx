import { Link } from "react-router-dom";
import { type PackageSummary } from "../api/types/packageBrief";

export type PackageListItemProps = {
  pkg: PackageSummary;
};

function PackageListItem({ pkg }: PackageListItemProps) {
  const { name, keywords, description, version } = pkg;
  const renderedKeywords = (keywords || []).map((keyword, index) => (
    <div
      key={index}
      className="bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 font-medium py-2 px-3 rounded-lg transition-all duration-300 hover:bg-neutral-300 dark:hover:bg-neutral-600 hover:scale-105 text-sm"
    >
      {keyword}
    </div>
  ));

  return (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-neutral-50 dark:hover:bg-neutral-700">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-grow">
          <div className="flex items-center mb-4 gap-4">
            <h2 className="text-xl font-semibold transition-colors duration-300 hover:text-red-600 dark:text-neutral-100">
              {name}
            </h2>
            <span className="text-sm font-medium bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 py-1 px-2 rounded-full">
              v{version}
            </span>
          </div>
          <p className="text-neutral-600 dark:text-neutral-300 mb-3 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">{renderedKeywords}</div>
        </div>
        <div className="self-start sm:self-center mt-4 sm:mt-0">
          <Link
            className="bg-red-500 text-white font-medium py-3 px-5 rounded-lg transition-all duration-300 hover:bg-red-600 hover:shadow-md hover:scale-105 active:scale-95 whitespace-nowrap group"
            to={`/packages/${pkg.name}`}
          >
            View{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PackageListItem;
