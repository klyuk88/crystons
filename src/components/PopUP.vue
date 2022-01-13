<template>
  <div class="popup-wrap" :class="{ 'visible': true }">
    <div class="popup">
      <img
        src="@/assets/images/general/close-popup.svg"
        alt=""
        class="close-popup"
        @click="closePopup"
      />
      <template v-if="!sendOk">
          <h2 class="popup-title">
        {{title}}
      </h2>
      <form action="" class="popup-form" @submit.prevent="submitForm">
        <input
          type="text"
          placeholder="Имя"
          name="user_name"
          v-model="inputs.name"
        />
        <input
          type="tel"
          placeholder="Телефон"
          name="user_phone"
          v-maska="['+7 (###) ##-##-##', '+7 (###) ###-##-##']"
          required
          v-model="inputs.phone"
        />
        <button class="btn popup-btn">Отправить</button>
        <small
          >Отправляя форму, согласен(а) с обработкой персональных данных</small
        >
      </form>
          
      </template>
      <h2 class="popup-title" v-else>Спасибо за обращение, в ближайшее время мы с вами свяжемся</h2>
      
    </div>
  </div>
</template>

<script>
import { ref, watch, reactive } from "vue";
import { serialize } from "object-to-formdata";
export default {
  props: {
    title: String
  },
  emits: ["closePopup"],
  setup(props, context) {
    const inputs = reactive({
      name: null,
      phone: null,
    });
    const isVisible = ref(false);
    watch(
      () => props.visible,
      (newVal) => {
        isVisible.value = newVal;
      }
    );

    const closePopup = () => {
      isVisible.value = false;
      sendOk.value = false
      context.emit("closePopup");
    };

    const sendOk = ref(false)
    const submitForm = () => {
      const formData = serialize(inputs);
      fetch(`/send.php`, {
        method: "POST",
        body: formData,
      })
        .then(() => {
         sendOk.value = true
         inputs.name = null
         inputs.phone = null
        })
        .catch((err) => {
          alert("Возникла ошибка, мы уже работаем над ее исправлением");
        });
    };
    return {
      closePopup,
      isVisible,
      inputs,
      submitForm,
      sendOk
    };
  },
};
</script>

<style lang="sass">
.popup-wrap
    position: fixed
    width: 100%
    height: 100%
    display: none
    align-items: center
    justify-content: center
    background: rgba(0,0,0,0.8)
    z-index: 1000
    .popup
        max-width: 600px
        width: 600px
        background: #fff
        padding: 50px
        position: relative
        text-align: center
        @media screen and (max-width: 576px)
            width: 95%
        .popup-title
            font-size: 25px
            font-family: 'Gilroy'
            @media screen and (max-width: 576px)
                font-size: 18px
        .close-popup
            position: absolute
            right: 10px
            top: 10px
            width: 30px
            height: auto
            cursor: pointer
        .popup-form
            display: flex
            flex-direction: column
            align-items: center
            margin-top: 30px
            @media screen and (max-width: 576px)
                margin-top: 20px
            input
                border: none
                border-bottom: 1px solid grey
                margin-bottom: 20px
                width: 100%
                padding: 15px
                padding-left: 0
                @media screen and (max-width: 576px)
                    padding: 10px
                    padding-left: 0
                    margin-bottom: 10px

.popup-wrap.visible
    display: flex


.btn.popup-btn
    @media screen and (max-width: 576px)
        margin-top: 20px


</style>