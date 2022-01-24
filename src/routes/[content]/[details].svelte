<script lang="ts">
    import { page } from '$app/stores'
    import { useQuery } from '@sveltestack/svelte-query';
    import { defaultQueryFunction } from '../../config/query/client';
    import MarkdownIt from 'markdown-it'
    import 'highlight.js/styles/a11y-light.css'
    import hljs from 'highlight.js'
    
    const { url: { pathname } } = $page;

    const repositoryData = useQuery(`repos/nilomiranda/TIL/contents${pathname}`, ({ queryKey }) => defaultQueryFunction({ queryKey, config: {
        headers: {
            Accept: 'application/vnd.github.v3.raw+json'
        }
    } }))

    const md = new MarkdownIt({
      highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value
        } catch (e) {
          console.error('Failed to highlight string')
        }
      }
      return ''
    },
  })

  let rendered;
  repositoryData.subscribe(({ data }) => {
    if (data && typeof data === 'string') {
        rendered = md.render(data)
    }
  })
</script>

<article class="flex flex-col items-center">
    <a href="../" class="mb-11">Go back</a>
    <h1 class="heading-h1 mb-14">Content</h1>

    {#if $repositoryData.isLoading}
        <strong>Loading</strong>
    {:else}
        <div>
            {@html rendered}
        </div>
    {/if}
</article>