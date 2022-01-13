<template v-cloak>
<div class="viewport">
   <div class="wrapper" id="scroll-container">
     
     <the-header></the-header>
     <the-intro-section></the-intro-section>
     <the-about></the-about>
     <the-objects></the-objects>
     <the-services></the-services>
     <the-clients></the-clients>
     <the-owners></the-owners>
     <the-location></the-location>
     <the-contacts></the-contacts>
     <the-footer></the-footer>
     <!-- <the-popup></the-popup> -->

   </div>
</div>

</template>


<script>
import TheAbout from './components/TheAbout.vue'
import TheHeader from './components/Header/TheHeader.vue'
import TheIntroSection from './components/TheIntroSection.vue'
import TheObjects from './components/TheObjects.vue'
import TheServices from './components/Services/TheServices.vue'
import TheClients from './components/TheClients.vue'
import TheOwners from './components/TheOwners.vue'
import TheLocation from './components/TheLocation.vue'
import TheContacts from './components/TheContacts.vue'
import TheFooter from './components/TheFooter.vue'
// import PopUP from './components/PopUP.vue'

export default {
  components: {
    TheHeader,
    TheIntroSection,
    TheAbout,
    TheObjects,
    TheServices,
    TheClients,
    TheOwners,
    TheLocation,
    TheContacts,
    TheFooter,
    // PopUP
    }
}

</script>


<style lang="css">
[v-cloak]{
	display: none;
}

  
</style>
