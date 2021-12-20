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
              <div class="objects-switch" :class="{'objects-switch--pos-2': isSwitched}">
              
                <span class="objects-switch__link"
                :class="{'objects-switch__link--selected': !isSwitched}"
                data-btn="1"
                @click="switchHeandler"
                >Список</span>
                
                <span
                class="objects-switch__link"
                :class="{'objects-switch__link--selected': isSwitched}"
                @click="switchHeandler"
                data-btn="2"
                >Карта</span>
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
                    :slug="item.rest_base"
                    @itemChange="getParamsFormInput"
                    @clearParams="clearParams"
                  >
                  </objects-filter>
                </div>

                <!-- кнопка показать  -->
                <button class="btn objects-controls-btn" @click="createUrl">
                  Показать
                </button>
              </div>
            </div>
          </div>
        </div>
    
    
        <objects-list
        :active="isSwitched"
        :objects-list-url="objectsListUrl"
        ></objects-list>

        <the-map
        :active="isSwitched"
        :objects-list-url="objectsListUrl"
        ></the-map>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive, watch } from "vue";
import ObjectsFilter from "./ObjectsFilter.vue";
import TheMap from "./TheMap.vue";
import ObjectsList from "./ObjectsList.vue";

export default {
  components: { TheMap, ObjectsFilter, ObjectsList },
  setup() {
    const data = reactive({
      types: [],
      typesTerms: [],
    });

    const isSwitched = ref(false)
    const switchHeandler = (event) => {
        if(event.target.getAttribute('data-btn') === "1") {
          isSwitched.value = false
        } else {
          isSwitched.value = true
        }
    }

    const isOpen = ref(false);
    const isAnim = ref(false);
    const openList = () => {
      isOpen.value = !isOpen.value;
      setTimeout(() => {
        isAnim.value = !isAnim.value;
      });
    };

    const getTerms = async (value) => {
      let res = await fetch(
        "https://staging.getcode.tech/wp-json/wp/v2/taxonomies?type=" + value
      );
      if (res.ok) {
        let resData = await res.json();
        data.typesTerms = Object.values(resData);
      }
    };

    const getTypes = async () => {
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
      }
    };

    const paramsItems = reactive({
      params: {},
    });
    const getParamsFormInput = (itemIds, itemRestBase) => {
      paramsItems.params[itemRestBase] = itemIds;
    };

    const clearParams = () => {
      paramsItems.params = {};
    };

    const typeEstate = ref("live_object");
    watch(typeEstate, (newVal) => {
      getTerms(newVal);
      objectsListUrl.value = "https://staging.getcode.tech/wp-json/wp/v2/" + newVal
    });

    const objectsListUrl = ref("")

    const createUrl = () => {
      let url = `https://staging.getcode.tech/wp-json/wp/v2/${typeEstate.value}`;
      const paramsArr = [];
      for (const [key, value] of Object.entries(paramsItems.params)) {
        if (value.length) {
          paramsArr.push(`${key}=${value}`);
        }
      }
      if (paramsArr.length) {
        const paramsStr = "?" + paramsArr.join("&");
        objectsListUrl.value = url + paramsStr;
      } else {
        objectsListUrl.value = url
      }
    };



    onMounted(() => {
      getTypes();
      getTerms("live_object");
    });

    return {
      data,
      openList,
      isOpen,
      isAnim,
      typeEstate,
      getParamsFormInput,
      createUrl,
      clearParams,
      objectsListUrl,
      isSwitched,
      switchHeandler
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

