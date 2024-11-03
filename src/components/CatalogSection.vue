<script setup>

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
                <div class="france countries show flex-wrap">
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
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img1.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Анри Селин
                                </p>
                                <h3>Дама с собачкой</h3>
                                <p class="product__details">
                                    Акрил, бумага (50х80)
                                </p>
                                <p class="product__price">16 500 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img2.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Франсуа Дюпон
                                </p>
                                <h3>Процедура</h3>
                                <p class="product__details">
                                    Цветная литография (40х60)
                                </p>
                                <p class="product__price">20 000 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img3.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Луи Детуш
                                </p>
                                <h3>Роза</h3>
                                <p class="product__details">
                                    Бумага, акрил (50х80)
                                </p>
                                <p class="product__price">12 000 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img4.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Франсуа Дюпон
                                </p>
                                <h3>Птичья трапеза</h3>
                                <p class="product__details">
                                    Цветная литография (40х60)
                                </p>
                                <p class="product__price">22 500 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img5.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Пьер Моранж
                                </p>
                                <h3>Пейзаж с рыбой</h3>
                                <p class="product__details">
                                    Цветная литография (40х60)
                                </p>
                                <p class="product__price">20 000 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="germany countries flex-wrap">
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img6.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Курт Вернер
                                </p>
                                <h3>Над городом</h3>
                                <p class="product__details">
                                    Цветная литография (40х60)
                                </p>
                                <p class="product__price">16 000 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img7.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Макс Рихтер
                                </p>
                                <h3>Птенцы</h3>
                                <p class="product__details">
                                    Холст, масло (50х80)
                                </p>
                                <p class="product__price">14 500 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img8.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Мартин Майер
                                </p>
                                <h3>Среди листьев</h3>
                                <p class="product__details">
                                    Цветная литография (40х60)
                                </p>
                                <p class="product__price">20 000 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img9.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Герман Беккер
                                </p>
                                <h3>Яркая птица</h3>
                                <p class="product__details">
                                    Цветная литография (40х60)
                                </p>
                                <p class="product__price">13 000 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img10.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Вульф Бауэр
                                </p>
                                <h3>Дятлы</h3>
                                <p class="product__details">
                                    Бумага, акрил (50х80)
                                </p>
                                <p class="product__price">20 000 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img11.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Вальтер Хартманн
                                </p>
                                <h3>Большие воды</h3>
                                <p class="product__details">
                                    Бумага, акрил (40х60)
                                </p>
                                <p class="product__price">23 000 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="england countries flex-wrap">
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img12.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Пол Смит
                                </p>
                                <h3>Дикий зверь</h3>
                                <p class="product__details">
                                    Акварель, бумага (50х80)
                                </p>
                                <p class="product__price">19 500 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img13.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Джон Уайт
                                </p>
                                <h3>Скалистый берег</h3>
                                <p class="product__details">
                                    Цветная литография (40х60)
                                </p>
                                <p class="product__price">17 500 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img14.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Джим Уотсон
                                </p>
                                <h3>Река и горы</h3>
                                <p class="product__details">
                                    Акварель, бумага (50х80)
                                </p>
                                <p class="product__price">20 5000 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img15.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Юджин Зиллион
                                </p>
                                <h3>Белый попугай</h3>
                                <p class="product__details">
                                    Цветная литография (40х60)
                                </p>
                                <p class="product__price">15 500 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img16.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Эрик Гиллман
                                </p>
                                <h3>Ночная рыба</h3>
                                <p class="product__details">
                                    Бумага, акрил (50х80)
                                </p>
                                <p class="product__price">12 500 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
                        <div class="catalog__card product d-flex flex-column">
                            <img src="./assets/img/img17.png" alt="img" />
                            <div class="product__info d-flex flex-column">
                                <p class="product__descriptions">
                                    Альфред Барр
                                </p>
                                <h3>Рыжий кот</h3>
                                <p class="product__details">
                                    Цветная литография (40х60)
                                </p>
                                <p class="product__price">21 000 руб</p>
                                <a href="#" class="d-block text-center baton">В корзину</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<style scoped></style>