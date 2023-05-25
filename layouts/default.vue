<template>
    <div>
        <div class="header">
            <div class="header__container">
                <p class="header__logo">MAGPUT</p>
                <div class="header-links">
                    <nuxt-link class="header__link" to="">
                        <img src="@/assets/img/world-tour-icon.svg" class="header__link-image" />
                        <div class="header__link-text">Туры</div>
                    </nuxt-link>
                    <nuxt-link class="header__link" to="">
                        <img src="@/assets/img/love.svg" class="header__link-image" />
                        <div class="header__link-text">Избранное</div>
                    </nuxt-link>
                    <nuxt-link class="header__link" to="">
                        <img src="@/assets/img/help.svg" class="header__link-image" />
                        <div class="header__link-text">Поддержка</div>
                    </nuxt-link>
                    <nuxt-link class="header__link" to="">
                        <img src="@/assets/img/pocket.svg" class="header__link-image" />
                        <div class="header__link-text">Мои поездки</div>
                    </nuxt-link>
                </div>
                <div class="header-profile">
                    <img src="@/assets/img/wrld.svg" class="world" />
                    <div class="woman"></div>
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
        max-width: 1260px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .header__logo {
            font-size: 28px;
            font-weight: 500;
            color: $main-blue;
            font-family: 'Kodchasan', sans-serif;
        }
        .header-links {
            display: flex;
            align-items: center;
            gap: 50px;
            .header__link {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 7px 15px 7px 10px;
                border: 1px solid #ebeaea;
                border-radius: 16px;
                &-text {
                    font-size: 14px;
                    font-weight: 500;
                    color: $main-text;
                    margin-bottom: 1px;
                }
                &-image {
                    width: 20px;
                }
            }
        }
        .header-profile {
            display: flex;
            align-items: center;
            gap: 10px;
            .world {
                width: 27px;
                height: 27px;
            }
            .woman {
                width: 30px;
                height: 30px;
                background: #ebeaea;
                object-fit: cover;
                border-radius: 360px;
            }
        }
    }
}
</style>
