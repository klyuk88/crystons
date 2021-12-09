<template lang="">
    <div
                  class="
                    objects-controls__district
                    parameters-filter
                    objects-controls-item
                  "
                >
                  <div class="select">
                    <div class="select-btn">
                      <div class="select-btn__txt filter-parametr-btn">
                        Район
                      </div>
                      <svg class="svg-sprite-icon icon-arrow">
                        <use
                          xlink:href="../assets/images/svg/symbol/sprite.svg#arrow"
                        ></use>
                      </svg>
                    </div>

                    <div class="select-dropdown">
                      <div class="select-dropdown__content">
                        <div class="select-dropdown__list render-list">
                          <label class="select-dropdown__label">
                            <input
                              class="select-dropdown__label-input"
                              type="checkbox"
                              name="type"
                              data-slug=""
                              data-id=""
                              value="gorodskaya"
                            /><span class="select-dropdown__label-txt"
                              >Городская</span
                            >
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
</template>
<script>
export default {
  setup() {

   
  }
    
}
</script>
<style lang="">
    
</style>