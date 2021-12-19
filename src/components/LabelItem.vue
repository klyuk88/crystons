<template lang="">
     <label
        class="select-dropdown__label"
        v-for="(item, index) in terms" :key="index"
        >
        <input
            class="select-dropdown__label-input"
            type="checkbox"
            :name="parentName"
            :value="item.rest_base"
        /><span class="select-dropdown__label-txt">{{item.name}}</span>
        </label>
</template>
<script>
import { ref, onMounted, watch, computed} from "vue";
export default {
  props: {
    parentName: String,
    parentSlug: String,
  },
  setup(props, context) {
    const terms = ref([])
    const getTerms = async () => {
      let res = await fetch(
        `https://staging.getcode.tech/wp-json/wp/v2/${props.parentSlug}?hide_empty=true`
      );
      let resData = await res.json();
      terms.value = resData;
    }


    onMounted(getTerms)

    return {
      terms
    }
  },
};
</script>