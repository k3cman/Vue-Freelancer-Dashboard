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
  <button @click="test()">TEST</button>
  <div class="span" v-for="track in allTracks" :key="track.id">
    {{track.name}}
    {{track.startTime}}
  </div>
<!--  <div v-if="trackState.length">-->
<!--    <span v-for="track1 in trackState" :key="track1.id">-->
<!--      {{track1.name}}-->
<!--    </span>-->
<!--  </div>-->
</template>

<script>
import moment from "moment";
import EntryRow from "@/components/Shared/Entries/EntryRow";
import EntryGroupHeader from "@/components/Shared/Entries/EntryGroupHeader";
import NewEntry from '@/components/Shared/Entries/NewEntry'
import { store} from '../../store'
import { mapGetters, mapState } from 'vuex';
import { TimeStamp } from '@/services/db';

export default {
  components: {
    EntryGroupHeader,
    EntryRow,
    NewEntry
  },
  created() {
    store.dispatch('bindTracks');
  },
  computed: {
    ...mapState({
      tracks: state => state.track
    }),
    ...mapGetters({
      allTracks: 'allTracks'
        }
    )
  },
  methods: {
    test(){
      const time = this.allTracks[0].startTime;
      // const date = TimeStamp(time).toDate();
      console.log(time.toDate());
    }
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
