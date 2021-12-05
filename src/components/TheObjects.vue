<template>
        <div class="objects section" id="objects">
        <div class="container">
          <div class="section-title">Объекты</div>
          <div class="objects__head">
            <div class="row">
              <div class="col-3">
                <!-- Search objects begin -->
                <form class="objects-search" action="/">
                  <button class="objects-search__btn" type="submit" aria-label="search">
                    <img src="../assets/images/general/search.svg" width="36" height="36" alt=""></button>
                  <input class="objects-search__input" type="text">
                </form>
                <!-- Search objects end -->
              </div>
              <div class="col-3">
                <!-- Switch objects lists begin -->
                <div class="objects-controls__switch">
                  <div class="objects-switch">
                    <span class="objects-switch__link objects-switch__link--selected" data-tabs="1">Список</span>
                    <span class="objects-switch__link" data-tabs="2">Карта</span>
                    <span class="objects-switch__bg"></span>
                  </div>
                </div>
                <!-- Switch objects lists end -->
              </div>
              <div class="col-6">

                <div class="objects-controls">
                  <div class="objects-controls-filters-wrap">
                    <!-- Filter type begin  -->
                    <div class="objects-controls__type objects-filter objects-controls-item">
                      <div class="select">
                        <div class="select-btn">
                          <div class="select-btn__txt">Тип <span>недвижиомсти</span></div>
                          <svg class="svg-sprite-icon icon-arrow">
                            <use xlink:href="../assets/images/svg/symbol/sprite.svg#arrow"></use>
                          </svg>
                        </div>
                        <div class="select-dropdown">

                          <div class="select-dropdown__content">
                            <div class="select-dropdown__list render-list">
                              
                              <!-- загружаем из базы типы недвижимости -->
                            </div>
                          </div>
                        </div>
                        <!-- select-dropdown end -->
                      </div>
                    </div>
                    
                    <!-- Filter type end  -->

                    <!-- Filter district begin  -->
                    <div class="objects-parametrs">
                      
                    </div>
                    <!-- <div class="objects-controls__district parameters-filter objects-controls-item">
                      <div class="select">
                        <div class="select-btn">
                          <div class="select-btn__txt filter-parametr-btn">Район</div>
                          <svg class="svg-sprite-icon icon-arrow">
                            <use xlink:href="../assets/images/svg/symbol/sprite.svg#arrow"></use>
                          </svg>
                        </div>

                        <div class="select-dropdown">
                          <div class="select-dropdown__content">
                            <div class="select-dropdown__list render-list">
                              <label class="select-dropdown__label">
                                <input class="select-dropdown__label-input" type="checkbox" name="type" data-slug=""
                                  data-id="" value="gorodskaya"><span
                                  class="select-dropdown__label-txt">Городская</span>
                              </label>

                            </div>
                          </div>


                        </div>
                      </div>
                    </div> -->
                    <!-- Filter district end  -->

                  </div>
                  <!-- objects-controls-filters-wrap -->

                  <button class="btn objects-controls-btn">
                    Показать
                  </button>



                </div>
              </div>
            </div>
          </div>
          <!-- Objects list begin  -->
          <div class="objects__content objects__content--active" data-tabs="1">
            <div class="objects-list row">
              <div class="objects-list__item col-3">
                <div class="objects-card">

                  <div class="objects-card__top">
                    <span class="close-project">✕</span>
                    <div class="objects-card__img">
                      <picture>
                        <source srcset="../assets/images/content/objects-1.webp" type="image/webp"><img
                          src="../assets/images/content/objects-1.jpg" width="630" height="450" alt="img">
                      </picture>
                    </div>
                    <div class="objects-card__desc">

                      <div class="objects-card__txt">ТестМ.Бронная 15 — клубный дом в 10 минутах от метро «Чистые
                        пруды». В доме высотой от 6 до 8 этажей расположилось 93 квартиры с готовой отделкой. На
                        цокольном этаже откроют кинотеатр на 12 мест, ресторан, тренажерный зал, СПА-зону с бассейном 25
                        метров. Сдача — 1 квартал 2022.</div>
                      <div class="objects-card__list">
                        <div class="objects-card__list-item">51 квартира в продаже</div>
                        <div class="objects-card__list-item">от 44 000 000 ₽</div>
                      </div>
                      <div class="objects-card__links">
                        <a class="objects-card__link objects-card__back" href="#" download>СКАЧАТЬ ПРЕЗЕНТАЦИЮ</a>
                      </div>
                    </div>
                  </div>
                  <div class="objects-card__bottom">
                    <div class="objects-card__name">ЖК “The Residence at Mandarin”</div>
                    <div class="objects-card__location">Москва, ЦАО, Хамовники, Обыденский пер.</div>
                  </div>
                </div>
              </div>
              <div class="objects-list__item col-3">
                <div class="objects-card">

                  <div class="objects-card__top">
                    <span class="close-project">✕</span>
                    <div class="objects-card__img">
                      <picture>
                        <source srcset="../assets/images/content/objects-1.webp" type="image/webp"><img
                          src="../assets/images/content/objects-1.jpg" width="630" height="450" alt="img">
                      </picture>
                    </div>
                    <div class="objects-card__desc">

                      <div class="objects-card__txt">ТестМ.Бронная 15 — клубный дом в 10 минутах от метро «Чистые
                        пруды». В доме высотой от 6 до 8 этажей расположилось 93 квартиры с готовой отделкой. На
                        цокольном этаже откроют кинотеатр на 12 мест, ресторан, тренажерный зал, СПА-зону с бассейном 25
                        метров. Сдача — 1 квартал 2022.</div>
                      <div class="objects-card__list">
                        <div class="objects-card__list-item">51 квартира в продаже</div>
                        <div class="objects-card__list-item">от 44 000 000 ₽</div>
                      </div>
                      <div class="objects-card__links">
                        <a class="objects-card__link objects-card__back" href="#" download>СКАЧАТЬ ПРЕЗЕНТАЦИЮ</a>
                      </div>
                    </div>
                  </div>
                  <div class="objects-card__bottom">
                    <div class="objects-card__name">ЖК “The Residence at Mandarin”</div>
                    <div class="objects-card__location">Москва, ЦАО, Хамовники, Обыденский пер.</div>
                  </div>
                </div>
              </div>
              <div class="objects-list__item col-3">
                <div class="objects-card">

                  <div class="objects-card__top">
                    <span class="close-project">✕</span>
                    <div class="objects-card__img">
                      <picture>
                        <source srcset="../assets/images/content/objects-1.webp" type="image/webp"><img
                          src="../assets/images/content/objects-1.jpg" width="630" height="450" alt="img">
                      </picture>
                    </div>
                    <div class="objects-card__desc">

                      <div class="objects-card__txt">ТестМ.Бронная 15 — клубный дом в 10 минутах от метро «Чистые
                        пруды». В доме высотой от 6 до 8 этажей расположилось 93 квартиры с готовой отделкой. На
                        цокольном этаже откроют кинотеатр на 12 мест, ресторан, тренажерный зал, СПА-зону с бассейном 25
                        метров. Сдача — 1 квартал 2022.</div>
                      <div class="objects-card__list">
                        <div class="objects-card__list-item">51 квартира в продаже</div>
                        <div class="objects-card__list-item">от 44 000 000 ₽</div>
                      </div>
                      <div class="objects-card__links">
                        <a class="objects-card__link objects-card__back" href="#" download>СКАЧАТЬ ПРЕЗЕНТАЦИЮ</a>
                      </div>
                    </div>
                  </div>
                  <div class="objects-card__bottom">
                    <div class="objects-card__name">ЖК “The Residence at Mandarin”</div>
                    <div class="objects-card__location">Москва, ЦАО, Хамовники, Обыденский пер.</div>
                  </div>
                </div>
              </div>

              <!-- More objects btn begin  -->
              <div class="objects-list__item col-3 more-objects-btn">
                <div class="objects-more title"><a class="objects-more__link" href="#">Показать еще <span>39
                      объектов</span> </a></div>
              </div>
              <!-- More objects btn end  -->
            </div>

          </div>
          <!-- Objects list end  -->

          <!-- Map list begin  -->
          <div class="objects__content" data-tabs="2">
            <div id="map">

            </div>
          </div>
          <!-- Map list end  -->
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>