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
                            v-for="(item, index) in data.types"
                            :key="index"
                          >
                            <input
                              class="select-dropdown__label-input"
                              type="radio"
                              name="Тип недвижимости"
                              :value="item.slug"
                              v-model="typeEstate"
                              :checked="
                                item.slug === 'live_object' ? true : false
                              "
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

                <!-- параметры  -->
                <div class="objects-parametrs">
                  <objects-filter
                    v-for="(item, index) in data.typesTerms"
                    :key="index"
                    :parent-name="item.name"
                    :slug="item.slug"
                    :data="data"
                  >
                  </objects-filter>
                </div>

                <!-- кнопка показать  -->
                <button class="btn objects-controls-btn">Показать</button>
              </div>
            </div>
          </div>
        </div>

        <!-- <objects-list :currentObjectsId="firstTermId"></objects-list> -->

        <the-map></the-map>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive, watch } from "vue";
import ObjectsFilter from "./ObjectsFilter.vue";
import TheMap from "./TheMap.vue";

export default {
  components: { TheMap, ObjectsFilter },
  setup() {
    const data = reactive({
      types: [],
      typesTerms: [],
      typesTermsChilds: [],
    });

    const isOpen = ref(false);
    const isAnim = ref(false);
    const typeEstate = ref(null);

    function openList() {
      isOpen.value = !isOpen.value;
      setTimeout(() => {
        isAnim.value = !isAnim.value;
      });
    }

    watch(typeEstate, async (newValue) => {
      let res = await fetch(
        "https://staging.getcode.tech/wp-json/wp/v2/taxonomies?type=" + newValue
      );
      if (res.ok) {
        let resData = await res.json();
        data.typesTerms = Object.values(resData);
        data.typesTerms.forEach(async (elem) => {
          let res2 = await fetch(
            "https://staging.getcode.tech/wp-json/wp/v2/" +
              elem.rest_base +
              "?hide_empty=true"
          );
          if (res2.ok) {
            let resData2 = await res2.json();
            data.typesTermsChilds = resData2;
          }
        });
      }
    });

    onMounted(async () => {
      let res = await fetch("https://staging.getcode.tech/wp-json/wp/v2/types");
      if (res.ok) {
        let resData = await res.json();
        data.types = Object.values(resData);
        data.types = data.types.filter((item) => {
          if (
            item.slug !== "page" &&
            item.slug !== "post" &&
            item.slug !== "wp_block" &&
            item.slug !== "attachment" &&
            item.slug !== "wp_template"
          ) {
            return item;
          }
        });

        let res2 = await fetch(
          "https://staging.getcode.tech/wp-json/wp/v2/taxonomies?type=" +
            data.types[0].slug
        );
        if (res2.ok) {
          let resData2 = await res2.json();
          data.typesTerms = Object.values(resData2);
          data.typesTerms.forEach(async (elem) => {
            let res3 = await fetch(
              "https://staging.getcode.tech/wp-json/wp/v2/" +
                elem.rest_base +
                "?hide_empty=true"
            );
            if (res3.ok) {
              let resData3 = await res3.json();
              data.typesTermsChilds = resData3;
              // console.log(data.typesTermsChilds);
            }
          });
        }
      }
    });

    return {
      data,
      openList,
      isOpen,
      isAnim,
      typeEstate,
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

