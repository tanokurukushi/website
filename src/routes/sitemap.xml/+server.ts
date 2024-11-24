import { getPostList } from "$lib/microcms";

const baseUrl = "https://tanokurukushi.com";

export async function GET() {
  const sitemap = await generateSitemap();
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}

async function generateSitemap() {
  let urls = [baseUrl];
  const postIds = await getAllPostIds();
  urls = [...urls, ...postIds.map((id) => `${baseUrl}/${id}`)];
  return `
		<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(generateUrlXml).join("")}
		</urlset>`.trim();
}

async function getAllPostIds() {
  let ids: string[] = [];
  const limit = 100;
  for (let offset = 0; ; offset += limit) {
    const posts = await getPostList({
      offset,
      limit,
      fields: "id"
    });
    if (posts.contents.length === 0) {
      break;
    }
    ids = [...ids, ...posts.contents.map((post) => post.id)];
  }
  return ids;
}

function generateUrlXml(loc: string) {
  return `
    <url>
      <loc>${loc}</loc>
    </url>`;
}
