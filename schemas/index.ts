import type { SchemaTypeDefinition } from "sanity";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Certificate schema
  {
    name: "certificate",
    title: "Certificate",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
      },
    ],
  },
  // Review schema (youtube video url, title)
  {
    name: "review",
    title: "Review",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        description: "Optional title for the video. Displayed on hover.",
      },
      {
        name: "url",
        title: "Video URL",
        type: "url",
        validation: (Rule) => Rule.required(),
        description: "Note: Does not support timestamp.",
      },
    ],
  },
];
