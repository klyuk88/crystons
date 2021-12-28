<template lang="">
<div class="map-info">
    <img :src="infoContentImage">
        <div class="map-info-inner-block">
        <h2 class="map-info-title">{{title}}</h2>
        <p class="map-info-text">{{about}}</p>
        <p class="map-info-price">Цена: {{numberFormatter(price)}}</p>
        <a v-if="infoContentPresentation" :href="infoContentPresentation" download target="_blank"><button class="btn map-info-btn">Скачать презентацию</button></a>
        </div>
</div>
</template>
<script>
import { ref, onMounted, watch } from "vue";
export default {
  props: {
    title: String,
    about: String,
    price: [Number, String],
    image: Number,
    presentation: [Number, String, null],
  },
  setup(props) {
    const infoContentImage = ref("")
    const infoContentPresentation = ref("")

    const getMedia = async (imageId, link) => {
      let res = await fetch(
        "https://staging.getcode.tech/wp-json/wp/v2/media/" + imageId
      );
      let resData = await res.json();
      link["value"] = resData.source_url;
    };



    const numberFormatter = (param) => {
        if(Number(param)) {
            return "от " +  new Intl.NumberFormat('ru').format(param) + " ₽"
        } else {
            return param
        }
    }

    watch(() => props.image, (newVal) => {
      getMedia(newVal, infoContentImage)
    })
    watch(() => props.presentation, (newVal) => {
      getMedia(newVal, infoContentPresentation)
    })


    onMounted(() => {
        getMedia(props.image, infoContentImage)
        getMedia(props.presentation, infoContentPresentation)
    })


    return {
        infoContentImage,
        infoContentPresentation,
        numberFormatter
        
    }
  },
};
</script>
<style lang="">
</style>