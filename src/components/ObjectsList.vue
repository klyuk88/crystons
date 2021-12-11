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
          let res = await fetch('http://localhost:8888/estate/wp-json/wp/v2/object?type_object=11')
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


 Object

_links: {self: [{href: "http://localhost:8888/estate/wp-json/wp/v2/object/36"}], collection: [{href: "http://localhost:8888/estate/wp-json/wp/v2/object"}], about: [{href: "http://localhost:8888/estate/wp-json/wp/v2/types/object"}], wp:featuredmedia: [{embeddable: true, href: "http://localhost:8888/estate/wp-json/wp/v2/media/10"}], wp:attachment: [{href: "http://localhost:8888/estate/wp-json/wp/v2/media?parent=36"}], …}

acf: {coordinates: "55.758987518303165, 37.61956750897765", presentation: "", adress: "Городской объект 5", price: "5 000 000 руб."}

content: {rendered: "↵<p>Городской объект 5</p>↵", protected: false}

date: "2021-12-05T17:21:42"

date_gmt: "2021-12-05T14:21:42"

featured_media: 10

guid: {rendered: "http://localhost:8888/estate/?post_type=object&#038;p=36"}

id: 36

link: "http://localhost:8888/estate/object/gorodskoj-obekt-5/"

modified: "2021-12-05T17:21:43"

modified_gmt: "2021-12-05T14:21:43"

slug: "gorodskoj-obekt-5"

status: "publish"

template: ""

title: {rendered: "Городской объект 5"}

type: "object"

type_object: [11, 16] (2)