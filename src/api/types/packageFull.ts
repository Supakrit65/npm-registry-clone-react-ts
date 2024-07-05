export type PackageDetail = {
  name: string;
  description: string;
  readme: string;
  "dist-tags": {
    latest: string,
  }
  author: {
    email: string;
    name: string;
  };
  maintainers: {
    name: string;
    email: string;
  }[];

  license: string;
};
