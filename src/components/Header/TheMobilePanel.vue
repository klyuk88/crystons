<template>
  <div class="mobile-panel" :class="{ 'mobile-panel--open': openPanel }">
    <div class="mobile-panel__head">
      <div class="mobile-panel__logo">
        <img
          src="../../assets/images/general/white-logo.png"
          width="55"
          height="42"
          alt=""
        />
      </div>
      <div class="mobile-panel__close">
        <span class="close-menu" @click="closeMenuHeandler">Закрыть</span>
      </div>
    </div>
    <div class="mobile-panel__content">
      <ul class="mobile-menu">
        <menu-item
        v-for="(item, index) in menuItems" :key="index"
          :title="item.title"
          :anchor="item.anchor"
          :mobile="openPanel"
          @click="closeMenuHeandler"
        ></menu-item>
      </ul>
      <div class="mobile-panel__links">
        <a
          class="mobile-panel__links-item mobile-panel__links-mail"
          href="mailto:site@crystons.ru"
          >site@crystons.ru</a
        ><a class="mobile-panel__links-item" href="tel:+74957955537"
          >+7 (495) 795 55 37
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";

export default {
  props: {
    openPanel: Boolean,
  },
  emits: ["closeMenuEvent"],
  components: { MenuItem },
  setup(props, context) {
    const menuItems = [
      {
        id: 1,
        title: 'О КОМПАНИИ',
        anchor: '#about'
      },
      {
        id: 2,
        title: 'ОБЪЕКТЫ',
        anchor: '#objects'
      },
      {
        id: 3,
        title: 'УСЛУГИ',
        anchor: '#services'
      },
      {
        id: 4,
        title: 'КЛИЕНТАМ',
        anchor: '#clients'
      },
      {
        id: 5,
        title: 'КОНТАКТЫ',
        anchor: '#contacts'
      },
    ]
    const closeMenuHeandler = () => {
      context.emit("closeMenuEvent");
    };

    return {
      closeMenuHeandler,
      menuItems
    };
  },
};
</script>

<style>
</style>