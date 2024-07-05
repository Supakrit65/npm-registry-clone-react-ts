import ReactMarkdown from "react-markdown";
import { useAsyncValue } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { PackageDetail as PackageDetailType } from "../../api/types/packageFull";

export default function PackageDetail() {
  const pkgDetail = useAsyncValue() as PackageDetailType;
  return (
    <div className="max-w-5xl mx-auto my-6 p-6 space-y-8 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg shadow-md border dark:border-neutral-900 animate-fadeIn">
      <div className="flex items-center justify-between border-b-2 border-red-500 dark:border-red-700 pb-2 transition-colors duration-300 hover:text-red-600">
        <h1 className="text-4xl font-bold animate-slideInLeft">
          {pkgDetail.name}
        </h1>
        <span className="bg-red-500 dark:bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
          v{pkgDetail["dist-tags"].latest}
        </span>
      </div>

      <section className="animate-slideInRight">
        <h2 className="text-2xl font-semibold mb-2 text-red-600 dark:text-red-400">
          Description
        </h2>
        <p className="text-lg bg-neutral-200 dark:bg-neutral-700 p-4 rounded-md">
          {pkgDetail.description}
        </p>
      </section>

      <section className="animate-slideInLeft">
        <h2 className="text-2xl font-semibold mb-2 text-red-600 dark:text-red-400">
          License
        </h2>
        <p className="text-lg bg-neutral-200 dark:bg-neutral-700 p-4 rounded-md">
          {pkgDetail.license}
        </p>
      </section>

      {pkgDetail.author && (
        <section className="animate-slideInRight">
          <h2 className="text-2xl font-semibold mb-2 text-red-600 dark:text-red-400">
            Author
          </h2>
          <div className="bg-neutral-200 dark:bg-neutral-700 p-4 rounded-md">
            <p className="text-lg">{pkgDetail.author.name}</p>
            <p className="text-md text-neutral-600 dark:text-neutral-400">
              {pkgDetail.author.email}
            </p>
          </div>
        </section>
      )}

      <section className="animate-slideInLeft">
        <h2 className="text-2xl font-semibold mb-2 text-red-600 dark:text-red-400">
          Maintainers
        </h2>
        <ul className="bg-neutral-200 dark:bg-neutral-700 p-4 rounded-md space-y-2">
          {pkgDetail.maintainers.map((maintainer, index) => (
            <li key={index} className="text-lg">
              {maintainer.name}{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                ({maintainer.email})
              </span>
            </li>
          ))}
        </ul>
      </section>

      {pkgDetail.readme && (
        <section className="animate-slideInRight">
          <h2 className="text-2xl font-semibold mb-2 text-red-600 dark:text-red-400">
            README
          </h2>
          <div className="bg-neutral-200 dark:bg-neutral-700 p-4 rounded-md prose dark:prose-invert max-w-none overflow-auto">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {pkgDetail.readme}
            </ReactMarkdown>
          </div>
        </section>
      )}
    </div>
  );
}
