import type { PackageDetail } from "../types/packageFull";
import { getPackage } from "./getPackage";

const FEATURED_PACKAGES = [
  'react', 'typescript', 'redux', 'vite'
];

export async function getFeaturedPackages(): Promise<PackageDetail[]> {
  return Promise.all(FEATURED_PACKAGES.map(pkgName => getPackage(pkgName)));
}