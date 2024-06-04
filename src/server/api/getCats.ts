export default defineEventHandler(async () => {
    /*
    * This is an API handler that fetches cat facts from an external API.
    * The API endpoint is defined in the runtime config.
    * The number of cat facts to fetch is also defined in the runtime config.
    */
    try {
        const config = useRuntimeConfig()
        const response = await $fetch(`${config.public.apiBase}/?count=${config.public.CATS_COUNT}`)

        return response

    } catch (error: any) {
        console.error(`An error occurred: ${error.message}`);
    }
})