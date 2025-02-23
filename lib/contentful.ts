import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE!,
  environment: "master",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export default client;
