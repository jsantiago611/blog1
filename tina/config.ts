import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: "fc9a9c93-70d2-4461-96d1-5f4dadb706da",  // Ensure the environment variable is set or defaults to an empty string
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",   // Add a default branch if needed
  token: "caf2aaad604254e4d03dac141f3e3658658c0c1b",                     // Add a default if necessary
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
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
