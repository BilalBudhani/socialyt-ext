<template>
  <div v-if="show" ref="profile" class="container" @mouseenter="cancelClose" @mouseleave="onMouseLeave">
    <section v-if="loading">
      <strong>loading...</strong>
    </section>
    <Profile v-else :user="user" />
  </div>
</template>
<script>
import { createPopper } from '@popperjs/core';
import axios from "axios";
import Profile from "./components/Profile";
export default {
  components: {
    Profile
  },
  data() {
    return {
      show: false,
      loading: false,
      user: {}
    }
  },
  methods: {
    fetchUser(targetEl) {
      const url = new URL(targetEl.href);
      this.loading = true;
      axios.get(`https://socialyt.bilal.dev/api/twitter/user${url.pathname}`)
      .then(resp => this.user = resp.data)
      .finally(() => this.loading = false);
    },
    cancelClose() {
      clearTimeout(this._timer);
    },
    onMouseLeave() {
      this._timer = setTimeout(() => {
        this.show = false;
        this.user = {};
        this._popup && this._popup.destroy();
      }, 800);
    },
    onMouseEnter(e) {
      this.cancelClose();
      this.fetchUser(e.target);
      this.show = true;
      this.$nextTick(() => {
        this._popup = createPopper(e.target, this.$refs.profile, {
          placement: "top",
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 8]
              }
            }
          ]
        })
      })
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