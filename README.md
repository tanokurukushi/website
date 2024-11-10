# My Personal Website - tanokurukushi.com

:house: [tanokurukushi.com](https://tanokurukushi.com)

## Feature

- Blog
- Page Preview

## Technology

:heart: Svelte / SvelteKit

:heart: Tailwind CSS

:heart: microCMS

## microCMS

### Blog

- API Type: List Format
- Endpoint: posts

API Schema

| Field ID    | Display Name     | Type             |
| ----------- | ---------------- | ---------------- |
| title       | タイトル         | Text Field       |
| description | 説明             | Text Field       |
| eyecatch    | アイキャッチ画像 | Image            |
| content     | 内容             | Rich Text Editor |

### Page Preview

Set Preview URL.

```
https://yourdomain.com/preview?contentId={CONTENT_ID}&draftKey={DRAFT_KEY}
```

## Environmental Variables

Create an .env file in the project root and set the following items.

- MICROCMS_API_KEY: API Key
- MICROCMS_SERVICE_DOMAIN: Service ID

```
MICROCMS_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
MICROCMS_SERVICE_DOMAIN=xxxxxxxxxx
```

## License

MIT License

See [LICENSE](LICENSE) for more information.
