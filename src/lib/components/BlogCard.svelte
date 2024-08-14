<script lang="ts">
  import type { Post } from "$lib/microcms";
  import type { MicroCMSListContent } from "microcms-js-sdk";

  export let post: Post & MicroCMSListContent;
  const publishedAt = post.publishedAt ?? "";
</script>

<article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <a href="/{post.id}">
    <img alt="eyecatch" src={post.eyecatch.url} class="h-56 w-full object-cover" />
    <div class="p-4 sm:p-6">
      <time datetime={publishedAt} class="block text-xs text-neutral-500">
        {new Date(publishedAt).toDateString()}
      </time>
      <h2 class="mt-0.5 text-lg">{post.title}</h2>
      <p class="mt-2 line-clamp-3 text-sm/relaxed text-neutral-500">
        {post.description}
      </p>
    </div>
  </a>
</article>
