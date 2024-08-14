import { getPostList } from "$lib/microcms";

export async function load() {
  return {
    posts: (await getPostList()).contents
  };
}
