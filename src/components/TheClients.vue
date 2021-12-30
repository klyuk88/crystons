<template lang="">
        <div class="clients section" id="clients">
        <div class="container">
          <div class="clients__title section-title">Клиентам</div>
          <div class="clients__subtitle section-subtitle">Подберем недвижимость под вашу задачу</div>
          <div class="quiz">

            <div class="quiz-steps">
            <form @submit.prevent="submitForm">

              <div
              class="quiz-step"
              :class="{'d-block': steps[0].active, 'd-animate': steps[0].active}"
              >
                <div class="quiz-step__title">С какой целью планируете покупку недвижимости?</div>
                <div class="quiz-step__answers">
                  <div class="quiz-step__answers-item">
                    <label class="quiz-checkbox">
                      <input class="quiz-checkbox__input" type="radio" name="Цель покупки" value="Для проживания" v-model="formInputs.buyTarget"><span
                        class="quiz-checkbox__txt" >Для проживания</span>
                    </label>
                  </div>
                  <div class="quiz-step__answers-item">
                    <label class="quiz-checkbox">
                      <input class="quiz-checkbox__input" type="radio" name="Цель покупки" value="Для инвестиций" v-model="formInputs.buyTarget"><span
                        class="quiz-checkbox__txt">Для инвестиций</span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="quiz-step"
               :class="{'d-block': steps[1].active, 'd-animate': steps[1].active}"
              >
                <div class="quiz-step__title">Какой тип недвижимости интересует?</div>
                <div class="quiz-step__answers">
                  <div class="quiz-step__answers-item">
                    <label class="quiz-checkbox">
                      <input class="quiz-checkbox__input" type="radio" name="Тип недвижимости" value="Жилая" v-model="formInputs.typeEstate"><span
                        class="quiz-checkbox__txt">Жилая</span>
                    </label>
                  </div>
                  <div class="quiz-step__answers-item">
                    <label class="quiz-checkbox">
                      <input class="quiz-checkbox__input" type="radio" name="Тип недвижимости" value="Торговая" v-model="formInputs.typeEstate"><span
                        class="quiz-checkbox__txt">Торговая</span>
                    </label>
                  </div>
                  <div class="quiz-step__answers-item">
                    <label class="quiz-checkbox">
                      <input class="quiz-checkbox__input" type="radio" name="Тип недвижимости" value="Офисная" v-model="formInputs.typeEstate"><span
                        class="quiz-checkbox__txt">Офисная</span>
                    </label>
                  </div>
                  <div class="quiz-step__answers-item">
                    <label class="quiz-checkbox">
                      <input class="quiz-checkbox__input" type="radio" name="Тип недвижимости" value="Земельные участки" v-model="formInputs.typeEstate"><span
                        class="quiz-checkbox__txt">Земельные участки</span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="quiz-step"
               :class="{'d-block': steps[2].active, 'd-animate': steps[2].active}"
              >
                <div class="quiz-step__title">Площадь объекта</div>
                <div class="quiz-step__answers">

                  <div class="quiz-step__answers-item">
                    <label class="quiz-checkbox">
                      <input class="quiz-checkbox__input" type="radio" name="Площадь" value="50 - 100 кв.м." v-model="formInputs.square"><span
                        class="quiz-checkbox__txt">50 - 100 кв.м.</span>
                    </label>
                  </div>

                   <div class="quiz-step__answers-item">
                    <label class="quiz-checkbox">
                      <input class="quiz-checkbox__input" type="radio" name="Площадь" value="100 -150 кв.м." v-model="formInputs.square"><span
                        class="quiz-checkbox__txt">100 -150 кв.м.</span>
                    </label>
                  </div>

                   <div class="quiz-step__answers-item">
                    <label class="quiz-checkbox">
                      <input class="quiz-checkbox__input" type="radio" name="Площадь" value="150 – 200 кв.м." v-model="formInputs.square"><span
                        class="quiz-checkbox__txt">150 – 200 кв.м.</span>
                    </label>
                  </div>

                   <div class="quiz-step__answers-item">
                    <label class="quiz-checkbox">
                      <input class="quiz-checkbox__input" type="radio" name="Площадь" value="Более 200 кв.м." v-model="formInputs.square"><span
                        class="quiz-checkbox__txt">Более 200 кв.м.</span>
                    </label>
                  </div>
                
                </div>
              </div>

               <div class="quiz-step"
               :class="{'d-block': steps[3].active, 'd-animate': steps[3].active}"
               >
                <div class="quiz-step__title">{{sendTitle}}</div>
                <div class="quiz-step__answers quize-form-wrap">
                  <div class="quize-form" v-if="!sendOk">
                    <input class="contacts-form__input" name="Имя" type="text" placeholder="Имя" v-model="formInputs.name" required>
                    <input class="contacts-form__input" name="Телефон" type="tel" placeholder="Телефон" v-model="formInputs.phone" required v-maska="['+7 (###) ##-##-##', '+7 (###) ###-##-##']">

                    <button class="contacts-form__btn btn quize-form-btn" type="submit">Отправить завяку</button>
                  </div>
                  
              
                </div>
              </div>

              </form>
            </div>


            <div class="quiz-controls" v-if="!sendOk">

              <button
              v-if="currentStep > 1"
              class="quiz-btn quiz-btn--prev"
              type="button"
              @click="prevSlideHeandler"
              >Предыдущий шаг
                <svg class="svg-sprite-icon icon-prev">
                  <use xlink:href="../assets/images/svg/symbol/sprite.svg#prev"></use>
                </svg>
              </button>

              <button
              v-if="currentStep !== steps.length"
              class="quiz-btn quiz-btn--next"
              type="button"
              @click="nextSlideHeandler"
              >Следлующий шаг
                <svg class="svg-sprite-icon icon-next">
                  <use xlink:href="../assets/images/svg/symbol/sprite.svg#next"></use>
                </svg>
              </button>

            </div>

            <div class="quiz-progress" v-if="!sendOk">
              <div
              class="quiz-progress__line"> <span :style="{width: quizProgress + '%'}"></span></div>
              <div class="quiz-progress__count"><span>{{quizProgress}}</span>%</div>
            </div>

          </div>
        </div>
      </div>
</template>
<script>
import { ref, reactive, watch, computed } from "vue";
import { serialize } from "object-to-formdata";
export default {
  setup(props) {
    const activeQuizItem = ref(true);
    const currentStep = ref(1);
    const steps = ref([
      {
        step: 1,
        active: true,
      },
      {
        step: 2,
        active: false,
      },
      {
        step: 3,
        active: false,
      },
      {
        step: 4,
        active: false,
      },
    ]);

    const changeStep = () => {
      steps.value.forEach((step) => {
        step.step === currentStep.value
          ? (step.active = true)
          : (step.active = false);
      });
    };

    const nextSlideHeandler = () => {
      if (currentStep.value !== steps.value.length) {
        currentStep.value++;
        changeStep();
      }
    };
    const prevSlideHeandler = () => {
      if (currentStep.value >= 1) {
        currentStep.value--;
        changeStep();
      }
    };
    const formInputs = reactive({
      buyTarget: null,
      typeEstate: null,
      square: null,
      name: null,
      phone: null,
    });

    watch(formInputs, () => {
      setTimeout(() => {
        nextSlideHeandler();
      }, 300);
    });

    const quizProgress = computed(() => {
      return (100 / steps.value.length) * currentStep.value;
    });

    const submitForm = () => {
      
      let formData = serialize(formInputs);
      fetch(`/send.php`, {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          fakeSend()
        })
        .catch((err) => {
          console.log(err);
        })
    };

    const sendTitle = ref("Получите персональную подборку объектов");
    const sendOk = ref(false)
    const fakeSend = () => {
      sendTitle.value =
        "Спасибо за обращение, в ближайшее время мы с вами свяжемся";
      sendOk.value = true
    };

    return {
      activeQuizItem,
      steps,
      nextSlideHeandler,
      currentStep,
      prevSlideHeandler,
      formInputs,
      submitForm,
      quizProgress,
      sendTitle,
      sendOk,
    };
  },
};
</script>
<style lang="">
</style>