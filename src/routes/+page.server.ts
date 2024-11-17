import { getPostList } from "$lib/microcms";

export async function load() {
  const limit = 24;
  return {
    posts: (await getPostList({ limit })).contents
  };
}
