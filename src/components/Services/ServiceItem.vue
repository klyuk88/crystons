<template lang="">
                <div class="service-list__item">
              <div class="service-item">
                <div
                class="service-item__head f-50"
                :class="{'service-item__head--active': openServiceItem}"
                @click="serviceItemHeandler"
                >
                  <div class="service-item__title">
                      {{title}}
                  </div>
                  <div class="service-item__btn"><span class="service-item__btn-plus">+</span><span
                      class="service-item__btn-minus">- </span></div>
                </div>
                <div
                class="service-item__content"
                :class="{'service-item__content--active': openServiceItem}"
                >
                  <div class="service-item__content-inner" ref="contentText">
                      
                    
                  </div>
                </div>
              </div>
            </div>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    title: String,
    content: String,
  },
  setup(props) {
    const contentText = ref(null)
    const openServiceItem = ref(false);
    const serviceItemHeandler = () => {
      openServiceItem.value = !openServiceItem.value;
    };

    const innerText = () => {
      contentText.value.innerHTML = props.content
    }

    onMounted(() => {
      innerText()
    })

    return {
      openServiceItem,
      serviceItemHeandler,
      contentText
      
    };
  },
};
</script>
<style lang="">
</style>