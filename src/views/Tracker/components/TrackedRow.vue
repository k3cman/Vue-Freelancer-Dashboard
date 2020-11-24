<template>
  <div class="tracked-row">
    <div class="name">
      {{ value.name }}
    </div>
    <div class="project">
      PROJECT NAME
    </div>
    <div class="start-time">
      {{ startTime }}
    </div>
    <div class="end-time">
      {{ endTime }}
    </div>
  </div>
</template>

<script>
import { format, addHours } from "date-fns";

export default {
  name: "TrackedRow",
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  computed: {
    startTime() {
      return format(new Date(), "HH:MM");
    },
    endTime() {
      return format(addHours(new Date(), 2), "HH:MM");
    },
  },
};
</script>

<style lang="scss" scoped>
.tracked-row {
  background: white;
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
  margin: 10px 0;
  padding: 0 20px;
  justify-content: space-between;
  .name {
    width: 40%;
  }
  .project {
    width: 10%;
  }
  .start-time {
    width: 10%;
  }
  .end-time {
    width: 10%;
  }
}
</style>
