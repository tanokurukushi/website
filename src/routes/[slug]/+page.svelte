<script lang="ts">
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  const publishedAt = data.publishedAt ?? "";
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
  <script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>
</svelte:head>

<div class="prose prose-neutral mx-auto max-w-2xl p-5">
  <time datetime={publishedAt} class="block text-xs text-neutral-500">
    {new Date(publishedAt).toDateString()}
  </time>
  <h1 class="mt-1">{data.title}</h1>
  <img class="aspect-[8/5] w-full rounded object-cover" src={data.eyecatch.url} alt="eyecatch" />
  <div>
    {@html data.content}
  </div>
</div>
