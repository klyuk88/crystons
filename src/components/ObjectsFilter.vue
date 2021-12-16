<template lang="">
                      <div
                  class="
                    objects-controls__type
                    objects-filter objects-controls-item
                  "
                >
                  <div class="select">
                    <div class="select-btn" @click="openList">
                      <div class="select-btn__txt">{{parentName}}</div>
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
                    
                          <!-- <label v-for="(item, index) in typeItemData.childTerms"
                            class="select-dropdown__label"
                            >
                            <input
                                class="select-dropdown__label-input"
                                type="checkbox"
                                :name="parentName"
                                :value="item.slug"
                                
                            /><span class="select-dropdown__label-txt">{{item.name}}</span>
                            </label> -->
                        </div>
                      </div>
                    </div>
                    <!-- select-dropdown end -->
                  </div>
                </div>
</template>
<script>
import {
  ref,
  reactive,
  onUpdated,
  computed,
  watch,
  onMounted,
  onUnmounted
} from "vue";

export default {
  props: {
    parentName: String,
    slug: String,
  },

  setup(props, context) {
   
    const isOpen = ref(false);
    const isAnim = ref(false);

    function openList() {
      isOpen.value = !isOpen.value;
      setTimeout(() => {
        isAnim.value = !isAnim.value;
      });
    }

    onMounted(() => {
      console.log(props.slug);
    })



    return {
      isOpen,
      openList,
      isAnim,
      // typeItemData,
    };
  },
};
</script>
<style lang="">
</style>
