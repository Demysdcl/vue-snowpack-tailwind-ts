<script lang="ts">
import Vue, { computed, defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  setup() {
    const state = reactive({
      title: "Bar",
    });
    return {
      ...toRefs(state),
      titleComp: computed(() => state.title + "*"),
    };
  },
});
</script>

<template>
  <h1 @click="() => (title = title === 'Bar' ? 'Bar 2' : 'Bar')">
    {{ title }} - {{ titleComp }}
  </h1>
</template>

<style lang="css">
/* unsupport scoped css in vue with tsx, jsx*/
.bar-jsx-vue {
  color: red;
}
</style>
