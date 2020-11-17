<template>
  <header>
    <header-badge></header-badge>
  </header>
</template>
<script>
import HeaderBadge from "./HeaderBadge.vue";

export default {
  name: "Header",
  components: {
    HeaderBadge,
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 33px;
}
</style>
