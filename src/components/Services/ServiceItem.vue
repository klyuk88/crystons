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
                  <div class="service-item__content-inner">
                      <p>
                        {{content}}
                      </p>
                    
                  </div>
                </div>
              </div>
            </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    title: String,
    content: String,
  },
  setup(props) {
    const openServiceItem = ref(false);
    const serviceItemHeandler = () => {
      openServiceItem.value = !openServiceItem.value;
    };

    return {
      openServiceItem,
      serviceItemHeandler,
    };
  },
};
</script>
<style lang="">
</style>