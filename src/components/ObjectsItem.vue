<template lang="">
              <div class="objects-list__item col-3">
            <div class="objects-card"
            @click="openObjectInfo"
            :class="{'objects-card--active': objectOpen}">
              <div class="objects-card__top">
                <span class="close-project"
                :class="{'d-block': objectOpen}"
                @click.stop="closeObjectInfo"
                >✕</span>
                <div class="objects-card__img">
                  <img :src="itemImage" :alt="name"/>
                </div>
                <div class="objects-card__desc">
                  <div class="objects-card__txt">
                    {{content}}
                  </div>
                  <div class="objects-card__list">
                    <div class="objects-card__list-item object-card-price">Цена: {{numberFormatter(price)}}</div>
                  </div>
                  <div class="objects-card__links">
                    <a
                      class="objects-card__link objects-card__back"
                      href="#"
                      @click.prevent="$emit('openPop')"
                      >
                      ПОЛУЧИТЬ ПРЕЗЕНТАЦИЮ</a
                    >
                  </div>
                </div>
              </div>
              <div class="objects-card__bottom">
                <div class="objects-card__name">
                  {{name}}
                </div>
                <div class="objects-card__location">
                  {{adress}}
                </div>
              </div>
            </div>
          </div>
       
</template>
<script>
import { ref, reactive, onMounted, watch } from "vue";

export default {
  props: {
    name: String,
    adress: String,
    price: String,
    content: String,
    imageId: [Number, String]
  },
  emits: ['openPop'],
  setup(props, context) {
 
    const numberFormatter = (param) => {
      if (Number(param)) {
        return "от " + new Intl.NumberFormat("ru").format(param) + "₽";
      } else {
        return param;
      }
    };

    const itemImage = ref("");

    const getMedia = async (imageId, link) => {
      let res = await fetch(
        process.env.VUE_APP_URL + "/wp-json/wp/v2/media/" + imageId
      );
      let resData = await res.json();
      link["value"] = resData.source_url;
    };

    watch(() => props.imageId, (newValue) => {
      getMedia(newValue, itemImage)
    })

    const objectOpen = ref(false);
    const openObjectInfo = () => {
      objectOpen.value = true;
    };
    const closeObjectInfo = () => {
      objectOpen.value = false;
    };

    onMounted(() => {
      getMedia(props.imageId, itemImage);
    });

    return {
      objectOpen,
      openObjectInfo,
      closeObjectInfo,
      itemImage,
      numberFormatter,
    };
  },
};
</script>
<style lang="">



</style>