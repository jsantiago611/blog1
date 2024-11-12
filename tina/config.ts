import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",  // Ensure the environment variable is set or defaults to an empty string
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",   // Add a default branch if needed
  token: process.env.TINA_TOKEN || "",                     // Add a default if necessary
  media: {
    tina: {
      mediaRoot: "public/uploads",
      publicFolder: "public",
    },
  },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  schema: {
    collections: [
      {
        label: "Blog Posts",
        name: "posts",
        path: "src/posts",  
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,  
          },
        ],
      },
    ],
  },
});
