<script lang="ts">
    import "../app.css";
	import Header from '$lib/header/Header.svelte';
	import { QueryClient, QueryClientProvider, useQuery } from '@sveltestack/svelte-query'
    import { defaultQueryFunction } from '../config/query/client';


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

