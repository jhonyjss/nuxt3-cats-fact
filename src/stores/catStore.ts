import { defineStore } from 'pinia';

interface Cats {
    cats: string[]
}

export const useCatStore = defineStore('catStore', {
    state: () => ({
        cats: [] as string[], // cats is an array of strings
        isFetching: false,
    }),

    actions: {
        async fetchCats(): Promise<string[] | void> { // fetchCats returns an array of strings or void
            if (this.cats.length > 0) {
                // Return cached data if available
                console.log('FROM CACHING...');
                return this.cats;
            }

            this.isFetching = true;

            try {
                const API_BASEURL = useRuntimeConfig().public.baseUrl;
                // Use useFetch to make the API request
                const {data} = await $fetch(`${API_BASEURL}api/getCats`) as any;
                console.log('FETCHING CATS', data)
                this.cats = data
               
                return this.cats;
            } catch (error) {
                console.error('Failed to fetch cats:', error);
                throw error;
            } finally {
                this.isFetching = false;
            }
        },
    },
    getters: {
        randomCatDescription(state) {
            if (state.cats.length === 0) {
                return null;
            }
            const randomIndex = Math.floor(Math.random() * state.cats.length);
            
            console.log(randomIndex, Math.random())
            return state.cats[randomIndex];
        },
    
      },
});
