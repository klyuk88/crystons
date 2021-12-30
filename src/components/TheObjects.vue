<template>
  <div class="objects section" id="objects">
    <div class="container">
      <div class="section-title">Объекты</div>
      <div class="objects__head">
        <div class="row">
          <div class="col-3">
            <!-- Search objects begin -->
            <div class="objects-search">
              <img
              class="objects-search__btn"
                src="../assets/images/general/search.svg"
                width="36"
                height="36"
                alt=""
              />
            <input
              class="objects-search__input"
              type="text"
              placeholder="Hазвание, адрес"
              v-model.trim.lazy="searchInput"
              @keyup.enter="searchHeandler"
            />
            <button
            class="search-btn"
            @click="searchHeandler"
            >Найти</button>

            </div>
         
            <!-- Search objects end -->
          </div>
          <div class="col-3">
            <!-- Switch objects lists begin -->
            <div class="objects-controls__switch">
              <div
                class="objects-switch"
                :class="{ 'objects-switch--pos-2': isSwitched }"
              >
                <span
                  class="objects-switch__link"
                  :class="{ 'objects-switch__link--selected': !isSwitched }"
                  data-btn="1"
                  @click="switchHeandler"
                  >Список</span
                >

                <span
                  class="objects-switch__link"
                  :class="{ 'objects-switch__link--selected': isSwitched }"
                  @click="switchHeandler"
                  data-btn="2"
                  >Карта</span
                >
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
        <h2 class="not-found-search-title" v-if="searchObjectsList.length === 0 && notSearchResult">По вашему запросу ничего не найдено</h2>
        <template v-else>
          <objects-list
          :objects-list-url="objectsListUrl"
            :active="isSwitched"
            :objects-list="
              searchObjectsList.length ? searchObjectsList : objectsList
            "
          ></objects-list>

          <the-map
            :active="isSwitched"
            :objects-list="
              searchObjectsList.length ? searchObjectsList : objectsList
            "
          ></the-map>
        </template>
       
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

    const isSwitched = ref(false);
    const switchHeandler = (event) => {
      if (event.target.getAttribute("data-btn") === "1") {
        isSwitched.value = false;
      } else {
        isSwitched.value = true;
      }
    };

    const getData = async (url, refLink) => {
      let res = await fetch(url);
      let resData = await res.json();
      refLink["value"] = resData;
    };

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
        process.env.VUE_APP_URL + "/wp-json/wp/v2/taxonomies?type=" + value
      );
      if (res.ok) {
        let resData = await res.json();
        data.typesTerms = Object.values(resData);
      }
    };

    const getTypes = async () => {
      let res = await fetch(process.env.VUE_APP_URL + "/wp-json/wp/v2/types");
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
    const createUrl = () => {
      let url = `${process.env.VUE_APP_URL}/wp-json/wp/v2/${typeEstate.value}`;
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
        objectsListUrl.value = url;
      }
    };
    const getParamsFormInput = (itemIds, itemRestBase) => {
      paramsItems.params[itemRestBase] = itemIds;
    };

    const clearParams = () => {
      paramsItems.params = {};
    };

    const objectsListUrl = ref("");
    const objectsList = ref([]);
    const typeEstate = ref("live_object");

    watch(typeEstate, (newVal) => {
      getTerms(newVal);
      objectsListUrl.value =
        process.env.VUE_APP_URL + "/wp-json/wp/v2/" + newVal;
      searchInput.value = "";
      searchObjectsList.value = [];
      notSearchResult.value = false
    });

    watch(objectsListUrl, (newVal) => {
      searchInput.value = "";
      searchObjectsList.value = [];
      getData(newVal, objectsList);
    });

    const searchInput = ref(null);
    const searchObjectsList = ref([]);
    const notSearchResult = ref(false)
    const searchHeandler = () => {
      if (searchInput.value.length > 0) {
        searchObjectsList.value = objectsList.value.filter((item) => {
          const regexp = new RegExp(`${searchInput.value}`, "i");
          const adressSearch = item.acf.adress.match(regexp) || [];
          const titleSearch = item.title.rendered.match(regexp) || [];
          if (titleSearch.length || adressSearch.length) {
            return true;
          }
        });
        if(searchObjectsList.value.length === 0) {
          notSearchResult.value = true
        } else {
          notSearchResult.value = false
        }
        
      } else {
        searchObjectsList.value = [];
        notSearchResult.value = false
      }
    };

    onMounted(() => {
      getTypes();
      getTerms("live_object");
      getData(
        process.env.VUE_APP_URL + `/wp-json/wp/v2/${typeEstate.value}`,
        objectsList
      );
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
      isSwitched,
      switchHeandler,
      searchInput,
      searchHeandler,
      objectsList,
      searchObjectsList,
      notSearchResult,
      objectsListUrl
    };
  },
};
</script>

<style>
.objects-controls-filters-wrap {
  align-items: center;
  margin-bottom: 30px;
}
.not-found-search-title {
  font-size: 30px;
  font-family: 'TT Tsars A';
  padding: 50px 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
}
.search-btn {
  border: none;
  position: absolute;
  right: 0;
  transform: translateX(-80%);
  font-size: 18px;
  font-family: 'Gilroy';
  top: 50%;
  transform: translateY(-50%);
}
@media screen and (max-width: 576px) {
  .search-btn {
    font-size: 14px;
  }
}
</style>

