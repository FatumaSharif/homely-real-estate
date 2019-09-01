<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<style lang="stylus">
$family-sans-serif "Poppins", sans-serif

*
  margin 0
  padding 0
  box-sizing border-box

#app
  font-family 'Poppins', sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  font-size 12px

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983

.button.is-primary.is-outlined
    border-color #2d248a
    color #2d248a
    font-weight 500

.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered
    background-color: #2d248a;
    border-color: #2d248a;
    color: #fff;

.button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused
    background-color: #2d248a;
    border-color: #2d248a;
    color: #fff;

.button.is-primary.is-outlined
    border-color #2d248a
    color #2d248a
    font-weight 500

.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered
    background-color: #2d248a;
    border-color: #2d248a;
    color: #fff;

.button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused
    background-color: #2d248a;
    border-color: #2d248a;
    color: #fff;
</style>
