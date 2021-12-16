<template lang="">
      <!-- Objects list begin  -->
        <div class="objects__content objects__content--active" data-tabs="1">
            
          <div class="objects-list row">
            <objects-item
            v-for="(item, index) in currentObjects" :key="index"
            :name="item.title.rendered"
            :adress="item.acf.adress"
            :price="item.acf.price"
            :content="item.content.rendered"
            ></objects-item>
            <more-button></more-button>
          </div>
        </div>
        <!-- Objects list end  -->
</template>
<script>
import { ref, onMounted } from "vue"
import ObjectsItem from "./ObjectsItem.vue"
import MoreButton from './MoreButton.vue'

export default {
  components: { ObjectsItem, MoreButton },
  props: {
      currentObjectsId: Number
  },
  setup(props) {
      const currentObjects = ref([])
      onMounted(async ()=> {
          let res = await fetch('')
          let resData = await res.json()
          currentObjects.value = resData
      })
    return {
        currentObjects
    };
  },
};
</script>
<style lang="">
</style>
