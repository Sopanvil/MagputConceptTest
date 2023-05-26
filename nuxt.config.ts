// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@/assets/styles/main.scss', '@/assets/styles/variables.scss'],
    plugins: [
        {
            src: '~/plugins/v-calendar',
            mode: 'client',
        },
    ],
});
