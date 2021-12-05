<template lang="">
      <div class="contacts section" id="contacts">
        <div class="container">
          <div class="contacts__title section-title">Контакты</div>
          <div class="contacts__subtitle section-subtitle">Оставьте заявку<br> и мы Вам<br> перезвоним</div>
          <div class="row">
            <div class="col-3">
              <form class="contacts-form" action="/">
                <input class="contacts-form__input" type="text" placeholder="ФИО">
                <input class="contacts-form__input" type="text" placeholder="Телефон">
                <button class="contacts-form__btn btn" type="submit">Отправить завяку</button>
              </form>
              <div class="contacts-thanks">
                <div class="contacts-thanks__title">СПАСИБО!</div>
                <div class="contacts-thanks__txt">Наш менеджер перезвонит Вам <br>в ближайшее время</div>
              </div>
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
export default {
    
}
</script>
<style lang="">
    
</style>