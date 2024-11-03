<script setup>
import axios from 'axios';
import { ref } from 'vue';

const countries = ref([]);

const fetchGalleryData = async () => {
    try {
        const serverUrl = 'http://192.168.100.30:3000/gallery';
        const response = await axios.get(serverUrl);
        countries.value = response.data; // Обновляем данные
        console.log('Ответ сервера: ', response.data);
    } catch (error) {
        console.error('Error fetching gallery data:', error);
    }
};
fetchGalleryData();
</script>



<template>
    <section class="catalog" id="catalog">
        <div class="container-fluid container-lg">
            <div class="row align-items-md-center title-row">
                <div class="col-12 col-md-auto">
                    <h2>Репродукции</h2>
                </div>
                <div class="col-12 col-md d-flex justify-content-md-end">
                    <div class="catalog__filters filters d-none d-sm-flex">
                        <button type="button" class="filters__item active raleway-medium france">
                            Франция
                        </button>
                        <button type="button" class="filters__item raleway-medium germany">
                            Германия
                        </button>
                        <button type="button" class="filters__item raleway-medium england">
                            Англия
                        </button>
                    </div>
                    <div class="catalog__filters flags d-flex d-sm-none justify-content-center">
                        <button type="button" class="flags__item">
                            <img src="./assets/img/fr.svg" alt="France" />
                        </button>
                        <button type="button" class="flags__item">
                            <img src="./assets/img/ger.svg" alt="Germany" />
                        </button>
                        <button type="button" class="flags__item">
                            <img src="./assets/img/eng.svg" alt="England" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="row catalog__list">
                <!-- <div v-for="country in countries" :key="country.id">
                    <div v-for="item in country.paintings" :key="item.id">
                        {{ item.price }}
                    </div>
                </div> -->

                <div class="france countries show flex-wrap" v-for="country in countries" :key="country.id">
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center"
                        v-for="item in country.paintings" :key="item.id">
                        <div class="catalog__card product d-flex flex-column">
                            <img :src="item.url" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    {{ item.author }}
                                </p>
                                <h3>{{ item.title }}</h3>
                                <p class="product__details">
                                    {{ item.description }}
                                </p>
                                <p class="product__price">{{ item.price }}</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="france countries show flex-wrap">
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Марсель Руссо
                                </p>
                                <h3>Охота Амура</h3>
                                <p class="product__details">
                                    Холст, масло (50х80)
                                </p>
                                <p class="product__price">14 500 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>



<style scoped></style>