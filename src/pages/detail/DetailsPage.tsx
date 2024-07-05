import { Await, useLoaderData } from "react-router-dom";
import { type DetailLoaderResult } from "./detailLoader";
import PackageDetailSkeleton from "../../components/detail/PackageDetailSkeleton";
import { Suspense } from "react";
import PackageDetailComponent from "../../components/detail/PackageDetail";
import SomethingWentWrong from "../../components/SomethingWentWrong";

function DetailsPage() {
  const { pkgDetail } = useLoaderData() as DetailLoaderResult;

  return (
    <Suspense fallback={<PackageDetailSkeleton />}>
      <Await
        resolve={pkgDetail}
        errorElement={<SomethingWentWrong />}
      >
        <PackageDetailComponent />
      </Await>
    </Suspense>
  );
}

export default DetailsPage;
