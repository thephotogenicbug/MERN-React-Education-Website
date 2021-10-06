import client from "@sanity/client";

export default client({
  projectId: "hhzmd8lt",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-09-23",
});
