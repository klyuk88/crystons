<template>
        <header class="header">
        <div class="container">
          <div class="header__row row">
            <div class="header__col">
              <div class="header-year header-txt">2022</div>
              <ul class="menu">
                <menu-item title="О компании" anchor="#about"></menu-item>
                <menu-item title="Объекты" anchor="#objects"></menu-item>
                <menu-item title="Услуги" anchor="#services"></menu-item>
              </ul>
            </div>
            <div class="header__col"> <img class="logo" src="../../assets/images/svg/logo.svg" width="58" height="auto"
                alt="logo"></div>
            <div class="header__col">
              <span class="open-menu header-txt"
              @click="openMenuHeandler"
              >Меню</span>
              <ul class="menu">
                <menu-item title="Клиентам" anchor="#clients"></menu-item>
                <menu-item title="Владельцам" anchor="#owners"></menu-item>
                <menu-item title="Контакты" anchor="#contacts"></menu-item>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <the-mobile-panel
        :open-panel="openPanel"
        @closeMenuEvent="closePanel"
      ></the-mobile-panel>
</template>

<script>
import {onMounted, computed, ref} from 'vue'
import TheMobilePanel from './TheMobilePanel.vue'
import MenuItem from './MenuItem.vue'

export default {
  components: {TheMobilePanel ,MenuItem},
  setup() {
    const openPanel = ref(false)
    const openMenuHeandler = () => {
      openPanel.value = true
    }
    const closePanel = () => {
      openPanel.value = false
    }
  
    return {
      openMenuHeandler,
      openPanel,
      closePanel
    }
  }

}
</script>

<style>


</style>