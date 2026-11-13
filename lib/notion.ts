import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type NotionPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string | null;
  slug: string;
};

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const DATA_SOURCE_ID = process.env.NOTION_DATABASE_ID ?? "";

function extractText(property: unknown): string {
  if (!property || typeof property !== "object") return "";
  const p = property as Record<string, unknown>;
  if (p.type === "title" && Array.isArray(p.title))
    return (p.title as { plain_text: string }[]).map((t) => t.plain_text).join("");
  if (p.type === "rich_text" && Array.isArray(p.rich_text))
    return (p.rich_text as { plain_text: string }[]).map((t) => t.plain_text).join("");
  return "";
}

function extractDate(property: unknown): string {
  if (!property || typeof property !== "object") return "";
  const p = property as Record<string, unknown>;
  if (p.type === "date" && p.date && typeof p.date === "object")
    return (p.date as { start: string }).start ?? "";
  return "";
}

function extractCover(page: PageObjectResponse): string | null {
  if (!page.cover) return null;
  if (page.cover.type === "external") return page.cover.external.url;
  if (page.cover.type === "file") return page.cover.file.url;
  return null;
}

export async function getNewsFromNotion(): Promise<NotionPost[]> {
  if (!process.env.NOTION_TOKEN || !DATA_SOURCE_ID) return [];

  const response = await notion.dataSources.query({
    data_source_id: DATA_SOURCE_ID,
    filter: {
      property: "Status",
      select: { equals: "Published" },
    } as Parameters<typeof notion.dataSources.query>[0]["filter"],
    sorts: [{ property: "Date", direction: "descending" }],
    page_size: 9,
  });

  return (response.results as unknown as PageObjectResponse[])
    .filter((p) => p.object === "page")
    .map((page) => {
      const props = page.properties;
      return {
        id: page.id,
        title: extractText(props["Title"] ?? props["Nome"] ?? props["Name"]),
        excerpt: extractText(props["Excerpt"] ?? props["Resumo"] ?? props["Description"]),
        date: extractDate(props["Date"] ?? props["Data"]),
        coverImage: extractCover(page),
        slug: page.id,
      };
    })
    .filter((p) => p.title);
}
