<template>
  <div class="new">
    <new-entry></new-entry>
  </div>
  <div class="track-items-wrapper">
    <div class="history" v-for="(dataset, index) in datasets" :key="index">
      <entry-group-header :timestamp="dataset.timestamp"></entry-group-header>
      <div class="table">
        <entry-row
            v-for="event in dataset.events"
            :key="event.id"
            :data="event"
        ></entry-row>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import EntryRow from "@/components/Shared/Entries/EntryRow";
import EntryGroupHeader from "@/components/Shared/Entries/EntryGroupHeader";
import NewEntry from '@/components/Shared/Entries/NewEntry'

export default {
  components: {
    EntryGroupHeader,
    EntryRow,
    NewEntry
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
