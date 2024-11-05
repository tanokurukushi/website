<script lang="ts">
  import Page from "../[slug]/+page.svelte";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<div class="mx-auto max-w-2xl">
  <div role="alert" class="m-4 rounded border-s-4 border-yellow-500 bg-yellow-50 p-4">
    <div class="flex items-center gap-2 text-yellow-800">
      <svg
        class="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        ><path
          d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        ></path>
      </svg>
      <strong class="block font-medium">プレビュー画面を表示しています</strong>
    </div>
    <p class="mt-2 text-sm text-yellow-700">
      <span>contentId={data.contentId}</span>
      <span>draftKey={data.draftKey}</span>
    </p>
  </div>
</div>

<Page data={data.post} />
