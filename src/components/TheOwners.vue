<template lang="">
      <div class="owners section" id="owners">
        <div class="container">
          <div class="section-title">Собственникам</div>
          <div class="owners__subtitle section-subtitle">Хотите <br class="mobile">продать <br>свою недвижимость? Мы Вам
            поможем</div>
          <div class="owners-list" ref="trigger">
            <div class="owners-list__item">
              <div class="owners-item">
                <div class="row">
                  <div class="col-3 owners-item__col-img">
                    <div class="owners-item__images owners-item__images--1">
                      <div class="owners-item__img owners-item__img--1" ref="imageOne">
                        <picture>
                          <source srcset="../assets/images/general/owners-1.webp" type="image/webp"><img
                            src="../assets/images/general/owners-1.jpg" width="539" height="809" alt="img">
                        </picture>
                      </div>
                      <div class="owners-item__img owners-item__img--2 image" ref="imageTwo">
                        <picture>
                          <source srcset="../assets/images/general/owners-2.webp" type="image/webp"><img
                            src="../assets/images/general/owners-2.jpg" width="382" height="573" alt="img">
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div class="col-3 owners-item__col-content">
                    <div class="owners-item__content owners-item__content--1">
                      <div class="owners-item__number">01</div>
                      <div class="owners-item__title">МЫ ДОРОЖИМ<br> ВАШЕМ ВРЕМЕНЕМ</div>
                      <div class="owners-item__txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
                        dignissim lorem cursus commodo sit nunc. Dictumst purus eu odio risus, sollicitudin risus cras
                        id. Odio egestas convallis tortor nec lorem diam morbi convallis. Est tellus ultrices sed
                        sagittis </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="owners-list__item">
              <div class="owners-item">
                <div class="row">
                  <div class="col-3 owners-item__col-content">
                    <div class="owners-item__content owners-item__content--2">
                      <div class="owners-item__number">02</div>
                      <div class="owners-item__title">С НАМИ МОЖНО <br>ЖИТЬ УВЕРЕННО</div>
                      <div class="owners-item__txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
                        dignissim lorem cursus commodo sit nunc. Dictumst purus eu odio risus, sollicitudin risus cras
                        id. Odio egestas convallis tortor nec lorem diam morbi convallis. Est tellus ultrices sed
                        sagittis </div>
                    </div>
                  </div>
                  <div class="col-3 owners-item__col-img">
                    <div class="owners-item__images owners-item__images--2">
                      <div class="owners-item__img owners-item__img--3 image">
                        <picture>
                          <source srcset="../assets/images/general/owners-3.webp" type="image/webp"><img
                            src="../assets/images/general/owners-3.jpg" width="774" height="617" alt="img">
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="owners-list__item">
              <div class="owners-item">
                <div class="row">
                  <div class="col-3 owners-item__col-img">
                    <div class="owners-item__images owners-item__images--3">
                      <div class="owners-item__img owners-item__img--4" ref="imageThree">
                        <picture>
                          <source srcset="../assets/images/general/owners-4.webp" type="image/webp"><img
                            src="../assets/images/general/owners-4.jpg" width="566" height="755" alt="img">
                        </picture>
                      </div>
                      <div class="owners-item__img owners-item__img--5 image" ref="imageFour">
                        <picture>
                          <source srcset="../assets/images/general/owners-5.webp" type="image/webp"><img
                            src="../assets/images/general/owners-5.jpg" width="382" height="573" alt="img">
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div class="col-3 owners-item__col-content">
                    <div class="owners-item__content owners-item__content--3">
                      <div class="owners-item__number">03</div>
                      <div class="owners-item__title">ВАША НЕДВИЖИМОСТЬ–<br>ВАШ ДОХОД</div>
                      <div class="owners-item__txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
                        dignissim lorem cursus commodo sit nunc. Dictumst purus eu odio risus, sollicitudin risus cras
                        id. Odio egestas convallis tortor nec lorem diam morbi convallis. Est tellus ultrices sed
                        sagittis</div><a class="btn owners-item__btn" href="#">Хочу продать </a>
                    </div>
                  </div>
                </div>
              </div>
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
    const imageFour = ref(null);

    const parallaxImages = () => {
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: trigger.value,
          scrub: true,
          start: "top center",
        },
      });

      tl2.to(imageOne.value, {
        yPercent: 40,
        ease: "none",
      });
      tl2.to(
        imageTwo.value,
        {
          yPercent: -50,
          ease: "none",
        },
        "<"
      );
      tl2.to(
        imageThree.value,
        {
          yPercent: -40,
          ease: "none",
        },
        ">"
      );
      tl2.to(
        imageFour.value,
        {
          yPercent: -80,
          ease: "none",
        },
        "<"
      );
    };

    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);
      parallaxImages();
    });

    return {
      trigger,
      imageOne,
      imageTwo,
      imageThree,
      imageFour,
    };
  },
};
</script>
<style lang="">
</style>