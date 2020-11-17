<template>
  <div>
    <div class="badge">
      <img src="https://kecman.dev/images/photo.jpg" alt="User Badge" />
      <span>Nemanja Kecman</span>
      <icon-base :width="16" :height="16">
        <icon-chevron-down />
      </icon-base>
    </div>
  </div>
</template>

<script>
import IconBase from "../../Shared/Icons/IconBase";
import IconChevronDown from "../../Shared/Icons/IconChevronDown";

export default {
  name: "HeaderBadge",
  components: {
    IconBase,
    IconChevronDown,
  },
};
</script>

<style lang="scss">
.badge {
  cursor: pointer;
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    width: 45px;
    height: 45px;
  }
  span {
    margin-left: 10px;
    font-size: 12px;
    font-weight: 400;
    color: #c2cfe0;
  }

  svg {
    height: 12px;
    width: 12px;
    margin-top: 4px;
    margin-left: 8px;
    g {
      fill: #c2cfe0;
    }
  }

  &:hover {
    span {
      color: #109cf1;
    }
    svg {
      g {
        fill: #109cf1;
      }
    }
  }
}
</style>
