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
                          <label-item v-for="(item, index) in childTerms.terms" :key="index" :name="item.name" :id="item.id"></label-item>
                        </div>
                      </div>
                    </div>
                    <!-- select-dropdown end -->
                  </div>
                </div>
</template>
<script>
import { ref, reactive, onUpdated, } from "vue";
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
    const childTerms = reactive({
        terms: []
    })
    childTerms.terms = props.data.terms.filter(item => item.parent === props.id)


    function openList() {
      isOpen.value = !isOpen.value;
      setTimeout(() => {
        isAnim.value = !isAnim.value;
      });
    }
 
  
    onUpdated(async () => {
        let res = await fetch('http://localhost:8888/estate/wp-json/wp/v2/type_object?parent=' + props.id)
        if(res.ok) {
          const childData = await res.json()
          childTerms.terms = childData
        }
    })
    

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