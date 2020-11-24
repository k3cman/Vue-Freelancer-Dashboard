<template>
  <view-wrapper>
    <new-tracker-item></new-tracker-item>
    <tracked-row
      v-for="d in trackerData"
      :key="d.name"
      :value="d"
    ></tracked-row>
  </view-wrapper>
</template>

<script>
import ViewWrapper from "../../components/Layout/ViewWrapper/ViewWrapper.vue";
import TrackedRow from "./components/TrackedRow.vue";
import NewTrackerItem from "./components/NewTrackerItem.vue";
export default {
  name: "Tracker",
  components: {
    ViewWrapper,
    TrackedRow,
    NewTrackerItem,
  },
  data: () => ({
    trackerData: [
      {
        name: "Add new shit",
        projectId: 2,
        startDate: new Date(),
        endDate: new Date().setHours(new Date().getHours() + 2),
      },
      {
        name: "New shit",
        projectId: 3,
        startDate: new Date(),
        endDate: new Date().setHours(new Date().getHours() + 2),
      },
      {
        name: "New shit 3",
        projectId: 3,
        startDate: new Date(),
        endDate: new Date().setHours(new Date().getHours() + 2),
      },
    ],
  }),
};
</script>
