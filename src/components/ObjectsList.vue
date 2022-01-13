<template lang="">
      <!-- Objects list begin  -->
        <div class="objects__content" :class="{'objects__content--active': !active}">
            
          <div class="objects-list row">
            <objects-item
            v-for="(item, index) in innerObjectList" :key="index"
            :name="item.title.rendered"
            :adress="item.acf.adress"
            :price="item.acf.price"
            :content="item.acf.about"
            :image-id="item.featured_media"
            @openPop="$emit('openPop')"
            ></objects-item>
            
            <more-button
            v-if="innerObjectList.length !== objectsList.length"
            @click="moreBtnHeandler"></more-button>
          </div>
        </div>
        <!-- Objects list end  -->
  
</template>
<script>
import { ref, onMounted, watch } from "vue";
import ObjectsItem from "./ObjectsItem.vue";
import MoreButton from "./MoreButton.vue";
import PopUP from "./PopUP.vue";

export default {
  components: { ObjectsItem, MoreButton, PopUP },
  props: {
    typeEstate: String,
    objectsList: Array,
    active: Boolean,
    objectsListUrl: String,
  },
  emits: ['openPop'],
  setup(props) {
    const innerObjectList = ref([]);
    const sliceObject = ref([]);
    const firstPos = ref(0);
    const lastPos = ref(5);

    innerObjectList.value = props.objectsList.slice(
      firstPos.value,
      lastPos.value
    );

    watch(
      () => props.objectsList,
      (newVal) => {
        innerObjectList.value = newVal.slice(firstPos.value, lastPos.value);
      }
    );

    const moreBtnHeandler = () => {
      firstPos.value = firstPos.value + 5;
      lastPos.value = lastPos.value + 5;
      sliceObject.value = props.objectsList.slice(
        firstPos.value,
        lastPos.value
      );
      innerObjectList.value = innerObjectList.value.concat(sliceObject.value);
    };

    const isVisible = ref(false);
    const closePopup = () => {
      isVisible.value = false;
    };
    const openPopup = () => {
      console.log('click');
      isVisible.value = true;
    };

    return {
      innerObjectList,
      moreBtnHeandler,
      openPopup,
      isVisible,
      closePopup,
    };
  },
};
</script>
<style lang="">
</style>