<template lang="">
      <!-- Objects list begin  -->
        <div class="objects__content" :class="{'objects__content--active': !active}">
            
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
import { ref, onMounted, watch } from "vue"
import ObjectsItem from "./ObjectsItem.vue"
import MoreButton from './MoreButton.vue'

export default {
  components: { ObjectsItem, MoreButton },
  props: {
      typeEstate: String,
      objectsListUrl: String,
      active: Boolean
  },
  setup(props) {

      const currentObjects = ref([])

      const getObjects = async (url) => {
          let res = await fetch(url)
          let resData = await res.json()
          currentObjects.value = resData
      }

      watch(() => props.objectsListUrl,(newValue) => {
          getObjects(newValue)
      })


      onMounted(()=> {
         getObjects("https://staging.getcode.tech/wp-json/wp/v2/live_object")
      })
    return {
        currentObjects
    };
  },
};
</script>
<style lang="">
</style>