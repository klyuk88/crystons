<template lang="">
     <label
        class="select-dropdown__label" >
        <input
            class="select-dropdown__label-input"
            type="checkbox"
            :name="parentName"
            :value="name"
        /><span class="select-dropdown__label-txt">{{name}}</span>
        </label>
</template>
<script>
import {ref, watch, reactive} from 'vue'
export default {
    props: {
        name: String,
        id: Number,
        parentName: String
    },
    setup(props, context) {
     
    }
    
}
</script>