<template>
    <div>
        <section class="intro">
            <div class="intro__container">
                <div class="intro-info">
                    <div class="intro__text">
                        И в любой день недели вы можете присоединиться к нашему однодневному или многодневному туру, не
                        важно, путешествуете вы большой компанией или в одиночку
                    </div>
                </div>
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
        };
    },
    async mounted() {
        this.users = await $fetch('https://jsonplaceholder.typicode.com/users');
    },
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.intro {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    .intro__container {
        width: 100%;
        max-width: 1260px;
        height: 80vh;
        padding: 80px;
        display: flex;
        justify-content: space-between;
        justify-content: center;
        background: url('@/assets/img/forest.jpg');
        background-size: cover;
        background-position: center;
        border-radius: 60px;
        box-sizing: border-box;
        .intro-info {
            .intro__text {
                margin-top: 30px;
                max-width: 820px;
                font-weight: 300;
                font-size: 34px;
                font-family: 'Montserrat', sans-serif;
                text-align: center;
                line-height: 53px;
                color: #ffffff;
            }
        }
        .intro-image {
            width: 450px;
        }
    }
}
</style>
