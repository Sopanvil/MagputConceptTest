<template>
    <div>
        <section class="intro">
            <div class="intro__container">
                <div class="intro-info">
                    <div class="intro__text">
                        6 миллионов путешественников ежегодно бронируют у нас отели, туры и экскурсии
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
                            <div class="search-all">
                                <label class="search-all__label">
                                    <input type="checkbox" />
                                    Искать везде
                                </label>
                            </div>
                        </div>
                        <!-- 2 -->
                        <div class="search-input">
                            <client-only>
                                <input type="text" class="search-input__where" placeholder="Куда хотите поехать?" />
                                <VDatePicker
                                    is-expanded
                                    v-model="popover.dates"
                                    :popover="popover"
                                    :min-date="new Date()"
                                    is-range
                                >
                                    <template #default="{ inputValue, inputEvents }">
                                        <div class="search-input-date">
                                            <input
                                                type="text"
                                                :value="inputValue.start"
                                                class="search-input__first-date"
                                                v-on="inputEvents.start"
                                                placeholder="Заезд"
                                            />
                                            <input
                                                type="text"
                                                :value="inputValue.end"
                                                class="search-input__second-date"
                                                v-on="inputEvents.end"
                                                placeholder="Выезд"
                                            />
                                        </div>
                                    </template>
                                </VDatePicker>
                                <select class="search-input__people select-placeholder">
                                    <option class="select-placeholder" selected hidden>Cколько поедет</option>
                                    <option>123</option>
                                </select>
                                <button class="search-input__button">Найти</button>
                            </client-only>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="popular">
            <ClientOnly>
                <div class="popular__container">
                <div v-for="(tour, index) in tours" class="popular-tours">
                     {{ tour }}
                    <br>
                </div>
            </div>
            </ClientOnly>
        </div>
    </div>
</template>
<script setup>
// Подгрузка по кешу!!!!!!!!!!!!!!!!!!!!!!!!!!
const { data: tours } = await useAsyncData('tours', () => $fetch('/api/tours'));
const popover = ref({
    dates: {
        start: '',
        end: '',
    },
});
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
        height: 700px;
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
                max-width: 770px;
                font-weight: 300;
                font-size: 49px;
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
                padding: 50px;
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
                    .search-all {
                        display: flex;
                        align-items: center;
                        gap: 5px;
                        &__label {
                            padding: 10px;
                            border-radius: 10px;
                            background-color: $border-grey;
                            cursor: pointer;
                            transition: 0.15s;
                            &:hover {
                                background-color: $border-grey-hover;
                            }
                        }
                    }
                }
                .search-input {
                    height: 50px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border: 2px solid $main-blue;
                    background: $main-blue;
                    border-radius: 10px;
                    .search-input__where {
                        width: 100%;
                        height: 100%;
                        padding: 0 16px;
                        box-sizing: border-box;
                        font-size: 14px;
                        font-weight: 400;
                        border: none;
                        border-radius: 8px 0 0 8px;
                    }
                    .search-input-date {
                        display: flex;
                        height: 100%;
                        .search-input__first-date,
                        .search-input__second-date {
                            max-width: 120px;
                            padding: 0 16px;
                            box-sizing: border-box;
                            font-size: 14px;
                            font-weight: 400;
                            border: none;
                            border-left: 2px solid $border-grey;
                        }
                    }
                    .search-input__people {
                        height: 100%;
                        padding: 0 40px 0 16px;
                        box-sizing: border-box;
                        display: flex;
                        position: relative;
                        font-size: 14px;
                        font-weight: 400;
                        border: none;
                        border-left: 2px solid $border-grey;
                        border-radius: 0 8px 8px 0;
                    }
                    .search-input__button {
                        padding: 16px 30px;
                        font-size: 16px;
                        font-weight: 300;
                        color: #ffffff;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
