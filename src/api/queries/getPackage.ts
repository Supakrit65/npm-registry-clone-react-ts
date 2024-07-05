import axios from "axios";
import { type PackageDetail } from "../types/packageFull";

export async function getPackage(pkgName: string): Promise<PackageDetail> {
  const res = await axios.get<PackageDetail>(`https://registry.npmjs.org/${pkgName}`) 
  return res.data
}