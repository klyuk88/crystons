<template lang="">
<div class="map-info">
    <img :src="infoContentImage">
        <div class="map-info-inner-block">
        <h2 class="map-info-title">{{title}}</h2>
        <p class="map-info-text">{{about}}</p>
        <p class="map-info-price">Цена: {{numberFormatter(price)}}</p>
        <button class="btn map-info-btn"
        @click="$emit('openPopMap')"
        >Получить презентацию</button>
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
  },
  emits: ['openPopMap'],
  setup(props) {
    const infoContentImage = ref("")

    const getMedia = async (imageId, link) => {
      let res = await fetch(
        process.env.VUE_APP_URL + "/wp-json/wp/v2/media/" + imageId
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

    onMounted(() => {
        getMedia(props.image, infoContentImage)
    })

    return {
        infoContentImage,
        numberFormatter
        
    }
  },
};
</script>
<style lang="">
</style>