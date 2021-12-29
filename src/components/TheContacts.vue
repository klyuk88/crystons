<template lang="">
      <div class="contacts section" id="contacts">
        <div class="container">
          <div class="contacts__title section-title">Контакты</div>
          <div class="contacts__subtitle section-subtitle">Оставьте заявку<br> и мы Вам<br> перезвоним</div>
          <div class="row">
            <div class="col-3">
              <form class="contacts-form" @submit.prevent="formSubmit" v-if="!sendOk">
                <input class="contacts-form__input" type="text" name="Имя" placeholder="Имя" v-model="formInputs.name" required>
                <input class="contacts-form__input" type="tel" placeholder="Телефон" name="Телефон" v-model="formInputs.phone" required>
                <button class="contacts-form__btn btn" type="submit">Отправить завяку</button>
              </form>

               <h2 class="form-send-ok-title" v-else>Спасибо за обращение. <br>В ближайшее время мы с вами свяжемся.</h2>
              <!-- <div class="contacts-thanks">
                <div class="contacts-thanks__title">СПАСИБО!</div>
                <div class="contacts-thanks__txt">Наш менеджер перезвонит Вам <br>в ближайшее время</div>
              </div> -->
            </div>
            <div class="col-3">
              <div class="contacts-list">
                <div class="contacts-list__item">
                  <div class="contacts-item">
                    <div class="contacts-item__title">Эл. почта</div><a class="contacts-item__txt contacts-item__link"
                      href="mailto:crystos@gmail.com"> crystos@gmail.com</a>
                  </div>
                  <div class="contacts-item">
                    <div class="contacts-item__title">Телефон</div><a class="contacts-item__txt"
                      href="tel:+79035041838"> +7 (903) 504-18-38</a>
                  </div>
                </div>
                <div class="contacts-list__item">
                  <div class="contacts-item">
                    <div class="contacts-item__title">Адрес</div>
                    <div class="contacts-item__txt">Пресненская набережная, 6с2, башня «Империя», 3-й подъезд, офис 4315
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- row end -->
        </div>
        <!-- container end -->
      </div>
</template>
<script>
import { reactive, watch, ref } from "vue";
import { serialize } from "object-to-formdata";
export default {
  setup(props) {

    const formInputs = reactive({
      name: null,
      phone: null,
    });

    const sendOk = ref(false)

    const fakeSend = () => {
      sendOk.value = true
    }

    const formSubmit = () => {
      fakeSend()
      // let formData = serialize(
      //   formInputs,
      // );
      // fetch(`${process.env.VUE_APP_URL}/send.php`, {
      //   method: "POST",
      //   body: formData,
      // })
      // .then((res) => {
      //   console.log(res);
      //   console.log('ok');
      // })
      // .catch((err) => {
      //   console.log(err);
      //   console.log('fuck');
      // })
      // .finally(() => {
      //   formInputs.name = null
      //   formInputs.phone = null
      // })
    };

    return {
      formInputs,
      formSubmit,
      sendOk
    };
  },
};
</script>
<style lang="css">
.form-send-ok-title {
  font-size: 35px;

}
</style>