import { getPostDetail } from "$lib/microcms";

export const prerender = false;

export async function load({ url }) {
  const params = url.searchParams;
  const contentId = params.get("contentId");
  const draftKey = params.get("draftKey");
  return {
    post: await getPostDetail(contentId ?? "", {
      draftKey: draftKey ?? undefined
    }),
    contentId,
    draftKey
  };
}
