<script lang="ts">
    import { page } from '$app/stores'
    import { useQuery } from '@sveltestack/svelte-query';
    import { defaultQueryFunction } from '../../config/query/client';
    import MarkdownIt from 'markdown-it'
    import 'highlight.js/styles/a11y-light.css'
    import hljs from 'highlight.js'
    
    const { url: { pathname }, params: { details } } = $page;
    console.log('$page', $page)


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

<svelte:head>
    <title>{details.replace('.md', '')}</title>
</svelte:head>

<article class="flex flex-col items-center">
    <a href="../" class="mb-11">Go back</a>
    <h1 class="heading-h1 mb-14">{details.replace('.md', '')}</h1>

    {#if $repositoryData.isLoading}
        <strong>Loading</strong>
    {:else}
        <div class="blog-content w-full max-w-4xl px-4">
            {@html rendered}
        </div>
    {/if}
</article>

<style>
    :global(article div.blog-content p) {
        margin-bottom: 1rem !important;
    }

    :global(article div.blog-content pre) {
        margin-bottom: 1rem !important;
        background: #FFE6BC77;
        padding: 1.25rem 1rem;
        border-radius: 1rem;
        overflow-x: auto;
    }
</style>