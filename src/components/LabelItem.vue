<template lang="">
     <label
        class="select-dropdown__label" >
        <input
            class="select-dropdown__label-input"
            type="checkbox"
            name="type"
            value=""
            :id="id"
        /><span class="select-dropdown__label-txt">{{name}}</span>
        </label>
</template>
<script>
export default {
    props: {
        name: String,
        id: Number
    },
    setup(props, context) {
       
    }
    
}
</script>