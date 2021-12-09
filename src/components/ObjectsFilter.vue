<template lang="">
                      <div
                  class="
                    objects-controls__type
                    objects-filter objects-controls-item
                  "
                >
                  <div class="select">
                    <div class="select-btn" @click="openList">
                      <div class="select-btn__txt">{{name}}</div>
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
                          <label-item v-for="(term, index) in childTerms" :key="index" :label="term.name"></label-item>
                        </div>
                      </div>
                    </div>
                    <!-- select-dropdown end -->
                  </div>
                </div>
</template>
<script>
import { ref } from "vue";
import LabelItem from './LabelItem.vue';

export default {
  components: {LabelItem},
   props: {
    name: String,
    id: Number,
    data: Object
  },

 
  setup(props) {
    const isOpen = ref(false);
    const isAnim = ref(false);
    const childTerms = ref([])
    childTerms.value = props.data.terms.filter(item => item.parent === props.id)
    function openList() {
      isOpen.value = !isOpen.value;
      setTimeout(() => {
        isAnim.value = !isAnim.value;
      });
    }
    return {
      isOpen,
      openList,
      isAnim,
      childTerms
    };
  },
};
</script>
<style lang="">
</style>