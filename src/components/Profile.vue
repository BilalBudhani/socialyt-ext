<template>
  <section class="profile-section">
    <div class="user-info">
      <img :src="user.profile_image_url_https" />
      <div class="user-details">
        <strong>{{user.name}}</strong>
        <span class="screen-name">@{{user.screen_name}}</span>
      </div>
    </div>
    <p>
      {{user.description}}
    </p>
    <div class="meta-container">
      <Meta name="Following" :value="user.friends_count" />
      <Meta name="Followers" :value="user.followers_count" />
    </div>
  </section>
</template>

<script>
import Meta from "./Meta"
export default {
  props: ['user'],
  components: {
    Meta
  }
}
</script>

<style scoped lang="scss">
.profile-section {
  margin: 0;
  display: flex;
  flex-direction: column;

  .user-info {
    display: inline-flex;
    align-items: center;
    line-height: 1.2;
    padding: 8px 0;

    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      margin-right: 12px;
    }

    .user-details {
      display: inline-flex;
      flex-direction: column;
    }

    .screen-name {
      font-size: 0.9em;
      color: #718096;
    }
  }

  p {
    padding: 8px 0;
    margin: 0;
    line-height: 1.375;
  }

  .meta-container {
    display: flex;
    width: 100%;
  }
}
</style>