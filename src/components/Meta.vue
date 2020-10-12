<template>
  <div class="meta-info-container">
    <strong>{{valueHumanized}}</strong>
    <span>{{name}}</span>
  </div>
</template>

<script>
export default {
  props: ['value', 'name'],
  computed: {
    valueHumanized() {
      if (this.value > 999) {
        return Math.round(this.value / 1000) + "K"
      } else {
        return this.value
      }
    }
  }
}
</script>

<style scoped lang="scss">
.meta-info-container {
  display: flex;
  margin-right: 12px;

  strong {
    margin-right: 2px;
  }

  span {
    font-weight: 400;
  }
}
</style>