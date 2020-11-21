<template>
  <nav>
    <div class="top-side">
      <div class="logo">
        <Logo />
      </div>
      <div class="navigation">
        <border-less-btn :route="'tracker'">
          <template v-slot:icon>
            <icon-base>
              <icon-clock />
            </icon-base>
          </template>
          Time Tracking
        </border-less-btn>
        <border-less-btn>
          <template v-slot:icon>
            <icon-base>
              <icon-dashboard />
            </icon-base>
          </template>
          Dashboard
        </border-less-btn>
        <border-less-btn :route="'todo'">
          <template v-slot:icon>
            <icon-base>
              <icon-task />
            </icon-base>
          </template>
          Todo
        </border-less-btn>
        <div class="divider"></div>
        <border-less-btn :route="'clients'">
          <template v-slot:icon>
            <icon-base>
              <icon-client />
            </icon-base>
          </template>
          Clients
        </border-less-btn>
        <border-less-btn :route="'projects'">
          <template v-slot:icon>
            <icon-base>
              <icon-projects />
            </icon-base>
          </template>
          Projects
        </border-less-btn>
        <border-less-btn :route="'invoices'">
          <template v-slot:icon>
            <icon-base>
              <icon-dollar />
            </icon-base>
          </template>
          Invoices
        </border-less-btn>
        <div class="divider"></div>
        <border-less-btn :route="'settings'">
          <template v-slot:icon>
            <icon-base>
              <icon-gear />
            </icon-base>
          </template>
          Settings
        </border-less-btn>
      </div>
    </div>
    <div class="bottom-side">
      <border-less-btn>
        <template v-slot:icon>
          <icon-base>
            <icon-toggle />
          </icon-base>
        </template>
      </border-less-btn>
    </div>
  </nav>
</template>

<script>
import Logo from "./Logo.vue";
import IconBase from "../Shared/Icons/IconBase.vue";
import IconDashboard from "../Shared/Icons/IconDashboard.vue";
import IconClock from "../Shared/Icons/IconClock.vue";
import IconClient from "../Shared/Icons/IconClient.vue";
import IconProjects from "../Shared/Icons/IconProjects.vue";
import IconGear from "../Shared/Icons/IconGear.vue";
import IconDollar from "../Shared/Icons/IconDollar.vue";
import IconTask from "../Shared/Icons/IconTask.vue";
import IconToggle from "../Shared/Icons/IconToggle.vue";
import BorderLessBtn from "../Shared/Buttons/BorderLessBtn.vue";

export default {
  name: "Navigation",
  components: {
    Logo,
    IconBase,
    IconDashboard,
    IconClock,
    IconClient,
    IconProjects,
    IconDollar,
    IconGear,
    IconTask,
    IconToggle,
    BorderLessBtn,
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .logo {
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #ebeff2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navigation {
    padding: 25px 0;
    button {
      padding: 10px 25px;
    }
    .divider {
      width: 100%;
      height: 1px;
      background-color: #ebeff2;
      margin: 5px 0;
    }
  }

  .bottom-side {
    padding: 0 25px 25px 25px;
  }
}
</style>
