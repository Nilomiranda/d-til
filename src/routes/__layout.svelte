<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { QueryClient, QueryClientProvider, useQuery } from '@sveltestack/svelte-query'


	const defaultQueryFunction = async ({ queryKey }) => {
        const response = await fetch(`https://api.github.com/${queryKey[0]}`)
        const responseJson = await response.json();
        return responseJson;
    }

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                queryFn: defaultQueryFunction,
            }
        }
    });
</script>

<Header />

<QueryClientProvider client={queryClient}>
	<main>
		<slot />
	</main>	
</QueryClientProvider>

