export type SearchResponse = {
  objects: {
    package: {
      name: string;
      version: string;
      description: string;
      keywords?: string[];
    };
  }[];
};

export type PackageSummary = SearchResponse["objects"][0]["package"];
