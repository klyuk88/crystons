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
                  <picture>
                    <source
                      srcset="../assets/images/content/objects-1.webp"
                      type="image/webp"
                    />
                    <img
                      src="../assets/images/content/objects-1.jpg"
                      width="630"
                      height="450"
                      alt="img"
                    />
                  </picture>
                </div>
                <div class="objects-card__desc">
                  <div class="objects-card__txt">
                    {{contentFree}}
                  </div>
                  <div class="objects-card__list">
                    <!-- <div class="objects-card__list-item">
                      51 квартира в продаже
                    </div> -->
                    <div class="objects-card__list-item object-card-price">Цена: от {{price}}</div>
                  </div>
                  <div class="objects-card__links">
                    <a
                      class="objects-card__link objects-card__back"
                      href="#"
                      download
                      >СКАЧАТЬ ПРЕЗЕНТАЦИЮ</a
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
import { ref } from 'vue'
export default {
  props: {
    name: String,
    adress: String,
    price: String,
    content: String
  },
    setup(props) {
      const objectOpen = ref(false)
      const contentFree = ref('')
      contentFree.value = props.content
      contentFree.value = contentFree.value.replace(/<\/?[a-zA-Z]+>/gi,'')
      
      function openObjectInfo() {
        objectOpen.value = true
      }
      function closeObjectInfo(event) {
          objectOpen.value = false
      }
      return {
        objectOpen, openObjectInfo, closeObjectInfo, contentFree
      }
    }
}
</script>
<style lang="">

    
</style>