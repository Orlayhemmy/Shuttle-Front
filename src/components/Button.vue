<template>
  <button class="btn-primary btn" @click=click>{{ title }}</button>
</template>
<script>
export default {
  props: ['title', 'click'],
};
</script>
