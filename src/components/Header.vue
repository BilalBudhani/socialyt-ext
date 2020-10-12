<template>
  <div class="container">
    <img :src="user.profile_image_url_https" />
    <div class="name-container">
      <strong>{{user.name}}</strong>
      <span class="screen-name">@{{user.screen_name}}</span>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
