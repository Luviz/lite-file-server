export const fileService = {
  list: () => [],
  get: (id: string) => ({id}),
  download: (id: string) => {
    throw Error("Not implemented");
  },
  upload: (file: any) => {
    throw Error("Not implemented");
  },
};
