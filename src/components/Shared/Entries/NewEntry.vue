<template>
  <div class="new-tracker">
    <div class="cell name">
      <input />
    </div>
    <div class="cell project">
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
    <div class="start-time">
      <input type="date" />
    </div>
    <div class="end-time">
      <input type="date" />
    </div>
    <div class="add">
      <button>ADD</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.new-tracker {
  display: flex;
  width: 100%;
  height: 50px;
  background: white;
  align-items: center;
  padding: 0 10px;
  .cell {
    padding: 0 10px;
  }

  .time {
    width: 100px;
  }

  .start-time,
  .end-time {
    width: 200px;
  }

  .project {
    width: 200px;
  }
  .name {
    width: 50%;
  }
}
</style>
