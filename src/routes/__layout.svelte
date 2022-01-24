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
	<main class="h-full">
		<slot />
	</main>	
    <footer class="w-full flex justify-center">
        <a href="https://www.flaticon.com/free-icons/notes" title="notes icons">Notes icons created by Freepik - Flaticon</a>
    </footer>
</QueryClientProvider>

