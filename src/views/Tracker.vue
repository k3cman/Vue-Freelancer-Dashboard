<template>
  <track-items-wrapper :datasets="datasets"></track-items-wrapper>
</template>

<script>
import moment from "moment";
import TrackItemsWrapper from "../components/Shared/TrackItems/TrackItemsWrapper.vue";
export default {
  components: {
    TrackItemsWrapper,
  },
  data() {
    return {
      datasets: [
        {
          timestamp: moment()
            .subtract(1, "day")
            .format("DD/MM/YYYY"),
          events: [
            {
              id: 1,
              name: "Simple task 1",
              startTime: moment()
                .subtract(1, "day")
                .subtract(3, "hours")
                .toDate(),
              endTime: moment()
                .subtract(1, "day")
                .subtract(1, "hour")
                .toDate(),
              time: 2,
              project: "estateOs",
              billable: true,
            },
            {
              id: 2,
              name: "Simple task 2",
              startTime: moment()
                .subtract(1, "day")
                .subtract(6, "hours")
                .toDate(),
              endTime: moment()
                .subtract(1, "day")
                .subtract(4, "hour")
                .toDate(),
              time: 2,
              project: "estateOs",
              billable: true,
            },
          ],
        },
        {
          timestamp: moment()
            .subtract(2, "days")
            .format("DD/MM/YYYY"),
          events: [
            {
              id: 1,
              name: "Simple task 1",
              startTime: moment()
                .subtract(2, "days")
                .subtract(3, "hours")
                .toDate(),
              endTime: moment()
                .subtract(2, "days")
                .subtract(1, "hour")
                .toDate(),
              time: 2,
              project: "estateOs",
              billable: true,
            },
            {
              id: 2,
              name: "Simple task 2",
              startTime: moment()
                .subtract(2, "days")
                .subtract(6, "hours")
                .toDate(),
              endTime: moment()
                .subtract(2, "days")
                .subtract(4, "hour")
                .toDate(),
              time: 2,
              project: "estateOs",
              billable: true,
            },
          ],
        },
      ],
    };
  },
};
</script>
