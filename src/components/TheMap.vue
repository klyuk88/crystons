<template lang="">
    <!-- Map list begin  -->
        <div class="objects__content" :class="{'objects__content--active': active}">
          <h2>Карта</h2>
          <div id="map"></div>
        </div>
        <!-- Map list end  -->
</template>
<script>
export default {
  props: {
    active: Boolean,
  }
    
}
</script>
<style lang="">
    
</style>