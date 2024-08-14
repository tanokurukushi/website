import { getPostDetail } from "$lib/microcms";

export async function load({ params }) {
  return await getPostDetail(params.slug);
}
