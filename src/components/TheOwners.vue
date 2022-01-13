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
                      <div class="owners-item__txt">Время – бесценный, невосполнимый ресурс человека, но его можно сэкономить благодаря делегированию полномочий. Мы умеем эффективно им распоряжаться, достаточно просто поставить нам задачу.</div>
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
                      <div class="owners-item__txt">Мы способны быстро решать сложные вопросы и добиваться поставленных целей методами, достойными доверия. Наши ключевые компетенции — это профессионализм, надежность и обязательность.
                      </div>
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
                      <div class="owners-item__txt">Недвижимость – один из основных инструментов, который позволяет сохранить ресурсы в материальном виде. Но рынок не стоит на месте, а вместе с ним и потребности клиентов. Мы следим за тенденциями и знаем все новые объекты, в том числе на этапе закрытых продаж. За счет своевременного решения о продаже и дальнейшего перераспределения средств в более ликвидный объект, можно не только сохранить, но преумножить капитал</div>
                      <a
                        class="btn owners-item__btn"
                        href="#"
                        @click.prevent="wantSaleHeandler"
                        >Хочу продать </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopUP
      v-if="isVisible"
      title="Оставьте ваши данные для обратной связи с менеджером"
      @closePopup="isClosePopup"
      />
</template>
<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PopUP from './PopUP.vue';
export default {
  components: {
    PopUP
  },
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
          yPercent: -20,
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
          yPercent: 20,
          ease: "none",
        },
        "<"
      );
    };

    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);
      parallaxImages();
    });

    const isVisible = ref(false)
    const wantSaleHeandler = () => {
      isVisible.value = true
    }
    const isClosePopup = () => {
      isVisible.value = false
    }

    return {
      trigger,
      imageOne,
      imageTwo,
      imageThree,
      imageFour,
      wantSaleHeandler,
      isVisible,
      isClosePopup
    };
  },
};
</script>
<style lang="">
</style>