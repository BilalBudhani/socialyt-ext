<template>
  <div v-if="show" ref="profile" class="container" @mouseenter="cancelClose" @mouseleave="onMouseLeave">
    <section v-if="loading">
      <strong>loading...</strong>
    </section>
    <component v-bind:is="profileComponent" v-else :data="data" />
  </div>
</template>
<script>
import TwitterProfile from "./components/TwitterProfile";
import GithubProfile from "./components/GithubProfile";
import { createPopup, fetchTwitterUser, fetchGithubRepo } from "./utils";
export default {
  components: {
    TwitterProfile,
    GithubProfile
  },
  data() {
    return {
      show: false,
      loading: false,
      data: {},
      type: ""
    }
  },
  computed: {
    profileComponent() {
      return this.type === "twitter" ? "TwitterProfile" : "GithubProfile";
    }
  },
  methods: {
    fetchUser(targetEl) {
      this.loading = true;
      this.type = "twitter";
      const url = new URL(targetEl.href);
      fetchTwitterUser(url.pathname)
      .then(resp => this.data = resp.data)
      .finally(() => this.loading = false);
    },
    fetchRepo(targetEl) {
      this.loading = true;
      this.type = "github";
      const url = new URL(targetEl.href);
      fetchGithubRepo(url.pathname)
      .then(resp => this.data = resp.data)
      .finally(() => this.loading = false);
    },
    cancelClose() {
      clearTimeout(this._timer);
    },
    onMouseLeave() {
      // this._timer = setTimeout(() => {
      //   this.show = false;
      //   this.data = {};
      //   this._popup && this._popup.destroy();
      // }, 800);
    },
    onMouseEnter(e) {
      this.cancelClose();
      if (e.target.href.indexOf('twitter') !== -1) {
        this.fetchUser(e.target);
      }

      if (e.target.href.indexOf('github') !== -1) {
        this.fetchRepo(e.target);
      }

      this.show = true;
      this.$nextTick(() => this._popup = createPopup(e.target, this.$refs.profile))
    }
  },
  mounted() {
    document.querySelectorAll('a[href^="https://twitter.com"]').forEach(el => {
      el.onmouseenter = this.onMouseEnter
      el.onmouseleave =  this.onMouseLeave;
    });

    document.querySelectorAll('a[href^="http://twitter.com"]').forEach(el => {
      el.onmouseenter = this.onMouseEnter
      el.onmouseleave =  this.onMouseLeave;
    });

    document.querySelectorAll('a[href^="https://github.com"]').forEach(el => {
      el.onmouseenter = this.onMouseEnter
      el.onmouseleave =  this.onMouseLeave;
    });
  }
}
</script>
<style scoped lang="scss">
.container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  background: #fff;
  border: 1px solid #a0aec0;
  color: #333;
  padding: 8px;
  z-index: 9999;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-width: 300px;
  border-radius: 4px;
  font-size: 16px;
  position: absolute;
  min-height: 100px;
  top: 0;
  left: 0;
}
</style>