<template>
  <div class="item-row">
    <div class="cell name">
      {{ data.name }}
    </div>
    <div class="cell project">
      {{ data.project }}
    </div>
    <div class="cell billable">
      {{ data.billable ? "B" : "N" }}
    </div>
    <div class="cell start-time">
      {{ startTime }}
    </div>
    <div class="cell end-time">
      {{ endTime }}
    </div>
    <div class="cell time">
      {{ data.time }}
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    startTime: function() {
      return this.data ? moment(this.data.startTime).format("DD/MM") : "";
    },
    endTime: function() {
      return this.data ? moment(this.data.endTime).format("DD/MM") : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.item-row {
  display: flex;
  width: 100%;
  height: 50px;
  background: white;
  border-bottom: 1px solid black;
  align-items: center;
  padding: 0 10px;
  .cell {
    padding: 0 10px;
  }

  .time {
    width: 50px;
  }

  .start-time,
  .end-time {
    width: 75px;
  }

  .project {
    width: 100px;
  }
  .name {
    width: 100%;
  }
}
</style>
