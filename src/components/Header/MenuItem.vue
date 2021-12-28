<template lang="">
    <li
    :class="{'menu__item': !mobile, 'mobile-menu__item': mobile}"
    @click="menuItemHeandler"
    >{{title}}</li>
</template>
<script>
import {onMounted} from 'vue'
import {gsap} from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
export default {

  props: {
    title: String,
    anchor: String,
    mobile: Boolean
  },
  emits: [],
  setup(props, context) {
    const menuItemHeandler = () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: props.anchor,
        ease: "power2",
      });
    };

    onMounted(() => {
        gsap.registerPlugin(ScrollToPlugin);
    })

    return {
      menuItemHeandler,
    };
    
  },
};
</script>
<style lang="">
</style>