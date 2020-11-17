<template>
  <div class="app-wrapper">
    <Navigation></Navigation>
    <div class="app-content">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import Header from "./Header/Header.vue";
export default {
  name: "Layout",
  components: {
    Navigation,
    Header,
  },
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  nav {
    width: 256px;
    height: 100%;
    box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  }
  .app-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    header {
      height: 60px;
      border-bottom: 1px solid #ebeff2;
    }
  }
}
</style>
