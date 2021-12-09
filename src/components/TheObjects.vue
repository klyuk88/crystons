<template>
  <div class="objects section" id="objects">
    <div class="container">
      <div class="section-title">Объекты</div>
      <div class="objects__head">
        <div class="row">
          <div class="col-3">
            <!-- Search objects begin -->
            <form class="objects-search" action="/">
              <button
                class="objects-search__btn"
                type="submit"
                aria-label="search"
              >
                <img
                  src="../assets/images/general/search.svg"
                  width="36"
                  height="36"
                  alt=""
                />
              </button>
              <input class="objects-search__input" type="text" />
            </form>
            <!-- Search objects end -->
          </div>
          <div class="col-3">
            <!-- Switch objects lists begin -->
            <div class="objects-controls__switch">
              <div class="objects-switch">
                <span
                  class="objects-switch__link objects-switch__link--selected"
                  data-tabs="1"
                  >Список</span
                >
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

                <div
                  class="
                    objects-controls__type
                    objects-filter objects-controls-item
                  "
                >
                  <div class="select">
                    <div class="select-btn" @click="openList">
                      <div class="select-btn__txt">Тип недвижимости</div>
                      <svg
                        class="svg-sprite-icon icon-arrow"
                        :class="{ rotate: isOpen }"
                      >
                        <use
                          xlink:href="../assets/images/svg/symbol/sprite.svg#arrow"
                        ></use>
                      </svg>
                    </div>

                    <div
                      class="select-dropdown"
                      :class="{ 'd-block': isOpen, 'd-animate': isAnim }"
                    >
                      <div class="select-dropdown__content">
                        <div class="select-dropdown__list render-list">
                          <label
                            class="select-dropdown__label"
                            v-for="(item, index) in data.parentTerms"
                            :key="index"
                          >
                            <input
                              class="select-dropdown__label-input"
                              type="radio"
                              name="Тип недвижимости"
                              value="gorodskaya"
                              @click="renderParams(item.id)"
                            /><span class="select-dropdown__label-txt">{{
                              item.name
                            }}</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <!-- select-dropdown end -->
                  </div>
                </div>

                <!-- Filter type end  -->

                <div class="objects-parametrs">
                  <objects-filter v-for="(item, index) in data.currentTerms" :key="index" :name="item.name" :id="item.id" :data="data">
                  </objects-filter>
                </div>
               

                <button class="btn objects-controls-btn">Показать</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Objects list begin  -->
        <div class="objects__content objects__content--active" data-tabs="1">
          <div class="objects-list row">
            <objects-item></objects-item>
            <!-- More objects btn begin  -->
            <div class="objects-list__item col-3 more-objects-btn">
              <div class="objects-more title">
                <a class="objects-more__link" href="#"
                  >Показать еще <span>39 объектов</span>
                </a>
              </div>
            </div>
            <!-- More objects btn end  -->
          </div>
        </div>
        <!-- Objects list end  -->

        <!-- Map list begin  -->
        <div class="objects__content" data-tabs="2">
          <div id="map"></div>
        </div>
        <!-- Map list end  -->
      </div>
   </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from "vue";
import ObjectsItem from "./ObjectsItem.vue";
import ObjectsFilter from "./ObjectsFilter.vue";
export default {
  components: { ObjectsItem, ObjectsFilter },
  setup() {
    const data = reactive({
      terms: [], //все термины
      parentTerms: [], //термины верхней категории
      currentTerms: [], //термины первой верхнней категории
    })
    const isOpen = ref(false)
    const isAnim = ref(false)

    function renderParams(id) {
      data.currentTerms = data.terms.filter(item => item.parent === id)
      console.log(data.currentTerms)
    }


    function openList() {
      isOpen.value = !isOpen.value;
      setTimeout(() => {
        isAnim.value = !isAnim.value;
      });
    }

    onMounted(async () => {
      let res = await fetch(
        "http://localhost:8888/estate/wp-json/wp/v2/type_object"
      );
      if (res.ok) {
        let resData = await res.json();
        data.terms = resData;
        data.parentTerms = resData.filter((item) => item.parent === 0);
        const firstTermId = data.parentTerms[0].id;
        data.currentTerms = resData.filter(
          (item) => item.parent === firstTermId
        );
      }
    });

    return {
      data,
      openList,
      isOpen,
      isAnim,
      renderParams
    };
  },
};
</script>

<style>
.objects-controls-filters-wrap {
  align-items: center;
  margin-bottom: 30px;
}
</style>

