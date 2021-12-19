<template lang="">
      <!-- Objects list begin  -->
        <div class="objects__content objects__content--active" data-tabs="1">
            
          <div class="objects-list row">
            <objects-item
            v-for="(item, index) in currentObjects" :key="index"
            :name="item.title.rendered"
            :adress="item.acf.adress"
            :price="item.acf.price"
            :content="item.acf.about"
            :image-id="item.featured_media"
            :presentation-id="item.acf.presentation"
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
      typeEstate: String
  },
  setup(props) {

      const currentObjects = ref([])
      const getObjects = async () => {
          let res = await fetch(`https://staging.getcode.tech/wp-json/wp/v2/live_object`)
          let resData = await res.json()
          currentObjects.value = resData
      }
      onMounted(()=> {
         getObjects()
      })
    return {
        currentObjects
    };
  },
};
</script>
<style lang="">
</style>