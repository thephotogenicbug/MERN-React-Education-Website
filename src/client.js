import client from "@sanity/client";

export default client({
  projectId: "x5w0jomo",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-09-23",
});
