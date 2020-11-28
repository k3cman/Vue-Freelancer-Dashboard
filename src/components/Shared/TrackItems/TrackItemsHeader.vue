<template>
  <div class="track-item-header">
    {{ timestamp }}
  </div>
</template>

<script>
export default {
  props: {
    timestamp: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.track-item-header {
  margin-top: 30px;
  background: black;
  color: white;
  padding: 0 10px;
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
}
</style>
