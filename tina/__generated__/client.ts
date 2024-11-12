import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'caf2aaad604254e4d03dac141f3e3658658c0c1b', queries,  });
export default client;
  