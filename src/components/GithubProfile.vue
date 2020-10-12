<template>
  <section class="repo-container">
    <div class="upper-container">
      <img :src="data.owner.avatar_url" />
      <strong>{{data.full_name}}</strong>
    </div>
    <p>
      {{data.description}}
    </p>
    <div class="bottom-container">
      <div class="info">
        <strong>{{data.stargazers_count}}</strong>
        <StarIcon />
      </div>
    </div>
  </section>
</template>

<script>
import StarIcon from "./StarIcon"
export default {
  props: ['data'],
  components: {
    StarIcon
  }
}
</script>
<style scoped lang="scss">

.repo-container {
  margin: 0;
  display: flex;
  flex-direction: column;

  p {
    padding: 8px 0;
    margin: 0;
    line-height: 1.375;
  }
}

.upper-container {
  display: flex;
  align-items: center;

  strong {
    font-size: 1.1em;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 4px;
  }
}

.bottom-container {
  display: flex;

  .info {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
}

</style>