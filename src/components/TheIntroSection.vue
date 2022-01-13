<template>
  <div class="intro section">
    <div class="container">
      <h1 class="title intro-title">
        <span class="intro-title__1">НЕДВИЖИМОСТЬ </span
        ><span class="intro-title__2">ДЛЯ ЖИЗНИ </span
        ><span class="intro-title__3">И ИНВЕСТИЦИЙ</span>
      </h1>
      <div class="intro-gallery parallax-section" ref="trigger">
        <div class="intro-gallery__img intro-gallery__img--main">
          <picture>
            <source
              srcset="../assets/images/general/intro-1.webp"
              type="image/webp"
            />
            <img
              src="../assets/images/general/intro-1.jpg"
              width="522"
              height="713"
              alt="img"
            />
          </picture>
        </div>
        <div
          class="
            intro-gallery__img
            intro-gallery__img--1
            intro-gallery__img--transform
            image
          "
          ref="imageOne"
        >
          <picture>
            <source
              srcset="../assets/images/general/intro-2.webp"
              type="image/webp"
            />
            <img
              src="../assets/images/general/intro-2.jpg"
              width="351"
              height="487"
              alt="img"
            />
          </picture>
        </div>
        <div
          class="
            intro-gallery__img
            intro-gallery__img--2
            intro-gallery__img--transform
            image
          "
          ref="imageTwo"
        >
          <picture>
            <source
              srcset="../assets/images/general/intro-3.webp"
              type="image/webp"
            />
            <img
              src="../assets/images/general/intro-3.jpg"
              width="550"
              height="442"
              alt="img"
            />
          </picture>
        </div>
        <div
          class="
            intro-gallery__img
            intro-gallery__img--3
            intro-gallery__img--transform
            image
          "
          ref="imageThree"
        >
          <picture>
            <source
              srcset="../assets/images/general/intro-4.webp"
              type="image/webp"
            />
            <img
              src="../assets/images/general/intro-4.jpg"
              width="499"
              height="499"
              alt="img"
            />
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  setup(props) {
    const trigger = ref(null);
    const imageOne = ref(null);
    const imageTwo = ref(null);
    const imageThree = ref(null);

    const parallaxMainImages = () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger.value,
          scrub: true,
          start: "top center",
        },
      });
      tl.to(
        imageOne.value,
        {
          yPercent: -60,
          ease: "none",
        },
        "<"
      );
      tl.to(
        imageTwo.value,
        {
          yPercent: -160,
          ease: "none",
        },
        "<"
      );
      tl.to(
        imageThree.value,
        {
          yPercent: -100,
          ease: "none",
        },
        "<"
      );
    };

    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);
      parallaxMainImages()
    });

    return {
      trigger,
      imageOne,
      imageTwo,
      imageThree,
    };
  },
};
</script>

<style>
</style>