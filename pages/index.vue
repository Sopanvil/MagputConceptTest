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
                <div class="search">
                    <div class="search__container">
                        <!-- 1 -->
                        <div class="search-header">
                            <div class="search-type">
                                <div class="search-type-item active">
                                    <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                        xml:space="preserve"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                    >
                                        <g id="Layer_Grid" />

                                        <g id="Layer_2">
                                            <path
                                                fill="#0446ef"
                                                d="M21,8c0-2.2-1.8-4-4-4H7C4.8,4,3,5.8,3,8v3.8c-0.6,0.5-1,1.3-1,2.2v2.7V17v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-1h16v1   c0,0.6,0.4,1,1,1s1-0.4,1-1v-2v-0.3V14c0-0.9-0.4-1.7-1-2.2V8z M5,8c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2v3h-1v-1c0-1.7-1.3-3-3-3   h-1c-0.8,0-1.5,0.3-2,0.8C11.5,7.3,10.8,7,10,7H9c-1.7,0-3,1.3-3,3v1H5V8z M16,10v1h-3v-1c0-0.6,0.4-1,1-1h1C15.6,9,16,9.4,16,10z    M11,10v1H8v-1c0-0.6,0.4-1,1-1h1C10.6,9,11,9.4,11,10z M20,16H4v-2c0-0.6,0.4-1,1-1h3h3h2h3h3c0.6,0,1,0.4,1,1V16z"
                                            />
                                        </g>
                                    </svg>
                                    <p class="searh-type__title">Отели</p>
                                    <div class="search-type__stroke"></div>
                                </div>
                                <div class="search-type-item">
                                    <img src="@/assets/img/tour.svg" class="searh-type__img" />
                                    <p class="searh-type__title">Туры</p>
                                </div>
                                <div class="search-type-item">
                                    <img src="@/assets/img/walk.svg" class="searh-type__img" />
                                    <p class="searh-type__title">Экскурсии</p>
                                </div>
                            </div>
                            <div class="search__all">
                                <input type="checkbox" id="search-all" />
                                <label for="search-all">Искать везде</label>
                            </div>
                        </div>
                        <!-- 2 -->
                        <div class="search-input">
                            <client-only>
                                <VDatePicker v-model="selectedDate" :popover="popover">
                                    <template #default="{ inputEvents }">
                                        <input type="text" class="search-input__item" v-on="inputEvents" />
                                    </template>
                                </VDatePicker>
                            </client-only>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    setup() {
        const popover = ref({
            visibility: 'click',
            placement: 'bottom',
            dates: {
                start: new Date(),
            },
        });
        const attributes = ref([{}]);
        return {
            attributes,
            popover,
        };
    },
    data() {
        return {
            users: '',
            selectedDate: '',
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
        height: 75vh;
        padding: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background: url('@/assets/img/forest.jpg');
        background-size: cover;
        background-position: center;
        border-radius: 50px;
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
        .search {
            width: 100%;
            .search__container {
                padding: 35px 50px;
                background: #ffffff;
                border-radius: 50px;

                .search-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 40px;
                    .search-type {
                        display: flex;
                        align-items: center;
                        gap: 25px;
                        .search-type-item {
                            display: flex;
                            align-items: center;
                            gap: 5px;
                            position: relative;
                            cursor: pointer;
                            .searh-type__img {
                                width: 20px;
                                height: 20px;
                                path {
                                    fill: $main-blue;
                                }
                            }
                            .searh-type__title {
                                font-size: 18px;
                                font-weight: 500;
                            }
                            .search-type__stroke {
                                width: 100%;
                                height: 2px;
                                bottom: -10px;
                                position: absolute;
                                border-radius: 10px;
                                background: $main-blue;
                            }
                            &.active {
                                .searh-type__title {
                                    color: $main-blue;
                                }
                            }
                        }
                    }
                    .search__all {
                        display: flex;
                        align-items: center;
                        gap: 5px;
                        padding: 10px;
                        border-radius: 10px;
                        background-color: $border-grey;
                        cursor: pointer;
                    }
                }
                .search-input {
                    .search-input__item {
                        width: 100%;
                        padding: 20px;
                        box-sizing: border-box;
                        border: 2px solid $main-blue;
                        border-radius: 16px;
                    }
                }
            }
        }
    }
}
</style>
