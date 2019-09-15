<template>
  <div class="navbar-sections">
    <div class="pre-nav level-right">
      <span class="nav-phone">+254 722 147 031 </span>
      <span class="navbar-bar">|</span>
      <span class="nav-sell">SELL / RENT PROPERTY </span>
    </div>
  <nav class="navbar navbar-section" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <img src="./../../public/img/logo3.svg" width="50" height="28">
      <span class="logo-name">HOMELY</span>
    </router-link>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
    @click="showNav = !showNav"
    v-bind:class="{ 'is-active': showNav }"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu"
  v-bind:class="{ 'is-active': showNav }"
  >
    <div class="navbar-end">
      <a class="navbar-item">
        <router-link class="navbar-item" to="/">Home</router-link>
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
          <router-link class="navbar-item" to="/property">Properties</router-link>

        <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/property">Buy</router-link>
          <router-link class="navbar-item" to="/property">Rent</router-link>
        </div>

      </div>
      <a class="navbar-item">
        <router-link class="navbar-item" to="/about">About</router-link>
      </a>
      <a class="navbar-item">
        <router-link class="navbar-item" to="/blog">Blog</router-link>
      </a>
      <a class="navbar-item">
        <router-link class="navbar-item" to="/contact">Contact</router-link>
      </a>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      showNav: false,
    };
  },
};
</script>

<style lang="stylus" scoped>
.logo-name
  font-weight 600
  color #000
  font-size 150%

.navbar-item
  text-transform uppercase
  font-size 110%

.pre-nav
  background-color #fafafa
  padding: 0% 8% 0 0;

.pre-nav span
  font-weight 600
  font-size 120%
  margin-top 1%
  margin-bottom 1%

.navbar-section
  margin 1.5% 7% 1% 7%

.navbar-bar
  padding-left 2%
  padding-right 2%
</style>
