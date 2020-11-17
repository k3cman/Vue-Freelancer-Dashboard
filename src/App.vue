<template>
  <router-view />
  <Layout />
</template>

<script>
import Layout from "./components/Layout/Layout.vue";
export default {
  components: {
    Layout,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,600&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins";
}
</style>
