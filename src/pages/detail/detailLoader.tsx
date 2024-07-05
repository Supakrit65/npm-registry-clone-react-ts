import { Params, defer } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackage";
import { PackageDetail } from "../../api/types/packageFull";

export type DetailLoaderResult = {
  pkgDetail: PackageDetail;
};

export async function detailLoader({
  params: { pkgName },
}: {
  params: Params;
}) {
  if (!pkgName) {
    throw new Error("Package name must be provided");
  }
  const pkgDetail = getPackage(pkgName);
  return defer({ pkgDetail: pkgDetail});
}
