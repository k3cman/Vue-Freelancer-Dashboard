<template>
  <div class="new">
    <new-tracker></new-tracker>
  </div>
  <div class="track-items-wrapper">
    <div class="history" v-for="(dataset, index) in datasets" :key="index">
      <track-items-header :timestamp="dataset.timestamp"></track-items-header>
      <div class="table">
        <tracker-item-row
          v-for="event in dataset.events"
          :key="event.id"
          :data="event"
        ></tracker-item-row>
      </div>
    </div>
  </div>
</template>

<script>
import TrackItemsHeader from "./TrackItemsHeader.vue";
import TrackerItemRow from "./TrackerItemRow.vue";
import NewTracker from "./NewTracker.vue";
export default {
  components: {
    TrackItemsHeader,
    TrackerItemRow,
    NewTracker,
  },
  props: {
    datasets: {
      required: true,
    },
  },
};
</script>
