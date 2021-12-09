<template lang="">
     <label
        class="select-dropdown__label" >
        <input
            class="select-dropdown__label-input"
            type="radio"
            name="Тип недвижимости"
            value="gorodskaya"
        /><span class="select-dropdown__label-txt">{{label}}</span>
        </label>
</template>
<script>
export default {
    props: {
        label: String
    },
    setup(props, context) {
       
    }
    
}
</script>