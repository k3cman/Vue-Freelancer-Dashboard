<template>
  <button>
    <slot name="icon"> </slot>
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "BorderLessBtn",
};
</script>

<style lang="scss">
button {
  cursor: pointer;
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;
  background: none;
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
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
  // Label
  span {
    margin-left: 10px;
    color: #334d6e;
  }

  // Icon
  svg {
    g {
      fill: #c2cfe0;
    }
  }
}
</style>
