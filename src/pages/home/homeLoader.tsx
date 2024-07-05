import { getFeaturedPackages } from "../../api/queries/getFeaturedPackages";
import { PackageDetail } from "../../api/types/packageFull";

export type HomeLoaderResult = {
  featuredPkgDetails: PackageDetail[];
};

export async function homeLoader(): Promise<HomeLoaderResult> {
  const featuredPkgDetails = await getFeaturedPackages();
  return { featuredPkgDetails };
}
