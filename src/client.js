import client from "@sanity/client";

export default client({
  projectId: "pfkqoh4z",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-09-23",
});
