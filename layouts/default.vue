<template>
    <div>
        <div class="header">
            <div class="header__container">
                <p class="header__logo">MAGPUT</p>
                <div class="header-links">
                    <nuxt-link class="header__link" to="">Туры</nuxt-link>
                    <nuxt-link class="header__link" to="">Новости</nuxt-link>
                    <nuxt-link class="header__link" to="">О нас</nuxt-link>
                    <nuxt-link class="header__link" to="">Контакты</nuxt-link>
                </div>
            </div>
        </div>
        <div class="">
            <slot />
        </div>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.header {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    .header__container {
        width: 100%;
        max-width: 1060px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .header__logo {
            font-size: 32px;
            font-weight: 900;
            color: $main-green;
        }
        .header-links {
            display: flex;
            align-items: center;
            gap: 70px;
            .header__link {
                font-size: 16px;
                font-weight: 500;
                color: $main-text;
            }
        }
    }
}
</style>
