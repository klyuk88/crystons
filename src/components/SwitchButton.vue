<template lang="">
     <span
        class="objects-switch__link"
        :class="{'objects-switch__link--selected': active}"
        @click="switchHeandler"
        >{{name}}</span
    >
</template>
<script>
export default {
    props: {
        name: String,
    },
    emits: ['active'],
    setup(context) {
        const active = ref(false)
        const switchHeandler = () => {
            active.value = !active.value
            

        }

    }
};
</script>
<style lang="">
</style>