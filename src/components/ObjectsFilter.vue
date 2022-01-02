<template lang="">
                      <div
                  class="
                    objects-controls__type
                    objects-filter objects-controls-item
                  "
                >
                    <div class="select-btn" @click="openList">
                        <svg
                        class="svg-sprite-icon icon-arrow"
                        :class="{ rotate: isOpen }"
                      >
                        <use
                          xlink:href="../assets/images/svg/symbol/sprite.svg#arrow"
                        ></use>
                      </svg>
                      <div class="select-btn__txt">{{isOpen ? 'Закрыть' : parentName}}</div>
                    </div>
                    <div
                      class="select-dropdown"
                      :class="{ 'd-block': isOpen, 'd-animate': isOpen }"
                    >
                      <div class="select-dropdown__content">
                        <div class="select-dropdown__list render-list">
                          <label
                            class="select-dropdown__label"
                            v-for="(item, index) in terms" :key="index"
                            >
                            <input
                                class="select-dropdown__label-input"
                                type="checkbox"
                                :name="parentName"
                                :value="item.id"
                                v-model="filterItem"
                            /><span class="select-dropdown__label-txt">{{item.name}}</span>
                            </label>
                        </div>
                      </div>
                    </div>
                    <!-- select-dropdown end -->
                </div>
</template>
<script>
import { ref, onMounted, watch, reactive } from "vue";

export default {
  props: {
    parentName: String,
    slug: String,
  },
  emits: ["itemChange", "clearParams"],

  setup(props, context) {
    const isOpen = ref(false);
    const isAnim = ref(false);
    function openList() {
      isOpen.value = !isOpen.value;
    }

    const terms = ref([]);

    const getTerms = async (slug) => {
      let res = await fetch(
        `${process.env.VUE_APP_URL}/wp-json/wp/v2/${slug}?hide_empty=true`
      );
      let resData = await res.json();
      terms.value = resData;
    };

    const filterItem = ref([]);

    watch(filterItem, (newValue, oldValue) => {
          context.emit("itemChange", newValue, props.slug);
       
    });

    watch(
      () => props.slug,
      (newValue) => {
        getTerms(newValue);
        filterItem.value = [];
        context.emit("clearParams");
      }
    );

    onMounted(() => {
      getTerms(props.slug);
    });

    return {
      isOpen,
      openList,
      isAnim,
      terms,
      filterItem,
      // allCloseInner
    };
  },
};
</script>
<style>

</style>




   