<script lang="ts">
  import type { PageData } from "./$types";
  import BlogCard from "$lib/components/BlogCard.svelte";

  export let data: PageData;
</script>

<div class="mx-auto max-w-screen-xl p-5">
  <h1 class="text-2xl font-bold">Blog</h1>
  <ol class="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {#each data.posts as post}
      <li><BlogCard {post} /></li>
    {/each}
  </ol>
</div>
