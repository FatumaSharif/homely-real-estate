<template>
  <footer class="columns">
    <div class="column is-one-third">
      <h3 class="about-title footer-title">About Us</h3>
      <p class="about-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorum iste et quod ut quae pariatur. Iusto dolorum, obcaecati exercitationem incidunt inventore a ipsa maxime.
      </p>
    </div>
    <div class="column is-one-fifth">
      <h3 class="footer-title">Properties</h3>
      <p class="footer-link"><a href="">Properties for Sale</a></p>
      <p class="footer-link"><a href="">Properties for Rent</a></p>
      <p class="footer-link"><a href="">Properties for Lease</a></p>
    </div>
    <div class="column is-one-fifth">
      <h3 class="footer-title">Homely Homes</h3>
      <p class="footer-link"><a href="">About Us</a></p>
      <p class="footer-link"><a href="">Contact Us</a></p>
      <p class="footer-link"><a href="">Terms and Privacy</a></p>
    </div>
    <div class="column">
      <h3 class="footer-title">Socials</h3>
      <font-awesome-icon class="icon" :icon="['fab', 'facebook-f']" />
      <font-awesome-icon class="icon" :icon="['fab', 'twitter']" />
      <font-awesome-icon class="icon" :icon="['fab', 'instagram']" />
      <font-awesome-icon class="icon" :icon="['fab', 'pinterest-p']" />

        <!-- <font-awesome-icon icon="facebook-f" class="icon" />
        <font-awesome-icon icon="twitter" class="icon" />
        <font-awesome-icon icon="instagram" class="icon" />
        <font-awesome-icon icon="pinterest" class="icon" />   -->
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
};
</script>
<style lang="stylus" scoped>
footer.columns
    background-color #222222
    font-size 110%
    color #777777
    padding 5%

p.about-content
    width 85%

h3.footer-title
  font-weight 500
  font-size 115%
  margin-bottom 2%

.footer-link
  margin-bottom 1%

.footer-link a:hover
  color #ccc

.icon
  margin-right: 10%
  font-size: 120%
</style>
