<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const publishedAt = data.publishedAt ?? "";
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
</svelte:head>

<div class="prose prose-neutral mx-auto max-w-2xl p-5">
  <img class="rounded" src={data.eyecatch.url} alt="eyecatch" />
  <time datetime={publishedAt} class="block text-xs text-neutral-500">
    {new Date(publishedAt).toDateString()}
  </time>
  <h1 class="mt-1">{data.title}</h1>
  <div>
    {@html data.content}
  </div>
</div>
