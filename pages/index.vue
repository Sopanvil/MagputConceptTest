<template>
    <div>
        <section class="intro">
            <div class="intro__container">
                <div class="intro-info">
                    <div class="intro__title">МАГАЗИН ПУТЕШЕСТВИЙ</div>
                    <div class="intro__text">
                        И в любой день недели вы можете присоединиться к нашему однодневному или многодневному туру, не
                        важно, путешествуете вы большой компанией или в одиночку
                    </div>
                </div>
                <img class="intro-image" src="@/assets/img/forest.svg" />
            </div>
        </section>
        <section class="search">
            <div class="search__container">
                <div v-for="(item, index) in users" :key="index" class="search-item">
                    {{ item.name }}
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            users: '',
        }
    },
    async mounted() {
        this.users = await $fetch('https://jsonplaceholder.typicode.com/users')
    },
}
</script>
<style lang="scss" scoped>
.intro {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 50px 0;
    .intro__container {
        width: 100%;
        max-width: 1060px;
        padding: 20px 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(102.54deg, #329f5b 0%, #329f5b 7.29%, #8fd5a6 100%);
        border-radius: 24px;
        box-sizing: border-box;
        .intro-info {
            .intro__title {
                max-width: 400px;
                margin-bottom: 20px;
                font-weight: 900;
                font-size: 48px;
                line-height: 95.2%;
                color: #0446ef;
            }
            .intro__text {
                max-width: 400px;
                font-weight: 500;
                font-size: 18px;
                line-height: 20px;
                color: #0446ef;
            }
        }
        .intro-image {
            width: 450px;
        }
    }
}
</style>
