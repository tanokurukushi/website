import { MICROCMS_API_KEY, MICROCMS_SERVICE_DOMAIN } from "$env/static/private";
import { createClient, type MicroCMSImage, type MicroCMSQueries } from "microcms-js-sdk";

const microcms = createClient({
  apiKey: MICROCMS_API_KEY,
  serviceDomain: MICROCMS_SERVICE_DOMAIN
});

const endpoint = "posts";

export type Post = {
  title: string;
  description: string;
  eyecatch: MicroCMSImage;
  content: string;
};

export async function getPostList(queries?: MicroCMSQueries) {
  return await microcms.getList<Post>({
    endpoint,
    queries: { orders: "-publishedAt", ...queries }
  });
}

export async function getPostDetail(contentId: string, queries?: MicroCMSQueries) {
  return await microcms.getListDetail<Post>({
    endpoint,
    contentId,
    queries
  });
}
