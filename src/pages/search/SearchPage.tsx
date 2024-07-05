import { useLoaderData } from "react-router-dom";
import { SearchLoaderResult } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";

function SearchPage() {
  const data = useLoaderData() as SearchLoaderResult;

  const renderPackages = data.packages.map((pkg) => (
    <PackageListItem key={pkg.name} pkg={pkg} />
  ));
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-neutral-800 dark:text-neutral-100">Search Results</h1>
      {data.packages.length > 0 ? (
        <div className="flex flex-col gap-y-6">
          {renderPackages}
        </div>
      ) : (
        <p className="text-lg text-neutral-600 dark:text-neutral-400">No packages found. Please try a different search term.</p>
      )}
    </div>
  );
}

export default SearchPage;
