<template>
  <div class="app-wrapper">
    <Navigation></Navigation>
    <div class="app-content">
      <Header />
      <div class="router-container">
        <router-view />
      </div>
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

    .router-container {
      width: 100%;
      height: calc(100vh - 60px);
      background: #e5e5e5;
      padding: 33px;
    }
  }
}
</style>
