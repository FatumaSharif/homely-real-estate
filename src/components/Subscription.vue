<template>
  <div class="subscription">
    <h3 class="sub-title">Stay up to date</h3>
    <p class="sub-content">
      Receive our latest property news and advice in your mailbox
    </p>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Enter your email here">
        <span class="icon is-small is-left">
          <font-awesome-icon icon="envelope" class="icon" />
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <div class="control has-text-centered">
        <a class="button is-primary is-outlined">Subscribe</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Subscription',
};
</script>
<style lang="stylus" scoped>
.subscription
  padding 5% 10%
  background-color #fafafa
  margin-top 5%

h3.sub-title
    font-size 160%
    margin-bottom 1%
    text-align center
    font-weight 500

p.sub-content
    font-size 120%
    margin-bottom 2%
    text-align center

.button.is-primary.is-outlined
    border-color #2c3e50
    color #2c3e50
    font-weight 500

.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused
    background-color: #2c3e50;
    border-color: #2c3e50;
    color: #fff;

.icon
  font-size 70%
  margin 4.5px 0 0 3px
  padding 1%;

</style>
