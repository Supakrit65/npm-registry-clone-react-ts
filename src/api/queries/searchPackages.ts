import axios from 'axios'
import { type PackageSummary, type SearchResponse } from '../types/packageBrief';

export async function searchPackages(term: string) {
  const res = await axios.get<SearchResponse>(`https://registry.npmjs.org/-/v1/search?text=${term}&size=10`);
  return res.data.objects.map(({ package: pkg }): PackageSummary => ({
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    keywords: pkg.keywords,
  }));
}