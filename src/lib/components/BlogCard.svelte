<script lang="ts">
  import type { Post } from "$lib/microcms";
  import type { MicroCMSListContent } from "microcms-js-sdk";

  interface Props {
    post: Post & MicroCMSListContent;
  }

  let { post }: Props = $props();
  const publishedAt = post.publishedAt ?? "";
</script>

<article class="group">
  <a href="/{post.id}">
    <img alt="eyecatch" src={post.eyecatch.url} class="aspect-[8/5] w-full rounded object-cover" />
    <div class="p-4 sm:p-5">
      <time datetime={publishedAt} class="block text-xs text-neutral-500">
        {new Date(publishedAt).toDateString()}
      </time>
      <h2 class="mt-0.5 text-lg group-hover:underline">{post.title}</h2>
      <p class="mt-2 line-clamp-3 text-sm/relaxed text-neutral-500">
        {post.description}
      </p>
    </div>
  </a>
</article>
