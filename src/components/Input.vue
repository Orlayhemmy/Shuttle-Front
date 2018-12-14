<template>
  <input type=inputProp.type v.bind:class="classname" placeholder=name v-model=inputProp.name />
</template>
<script>
export default {
  props: {
    inputProp: {
      type: Object,
      required: true,
      default: {
        type: "text",
        class: '',
        placeholder: '',
        name:'',
      }
    },
    classname: {
      type: String
    }
  }
}
</script>