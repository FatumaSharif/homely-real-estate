<template>
  <div class="about">
    <NavBar/>
    <div class="about-page">
      <nav class="breadcrumb has-arrow-separator is-centered" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
      About Us
    </div>
    <About />
    <Subscription />
    <Footer />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import About from '@/components/HomeAbout.vue';
import Subscription from '@/components/Subscription.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'about',
  components: {
    NavBar,
    About,
    Subscription,
    Footer,
  },
};
</script>
<style lang="stylus" scoped>
.about-page
  background-image linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://cdn.pixabay.com/photo/2019/08/11/18/17/house-4399573__340.jpg')
  background-size cover
  color: #ccc

.about-page
    padding: 7% 0
    font-size: 437%
    font-weight: 500
    text-align: center

.columns.about-content
    margin: 5%
    font-size: 120%
    line-height: 26px

h3.about-title
    font-weight: 500
    font-size: 160%
    padding-bottom: 4%

.abtitle
    padding-top: 8%
    padding-bottom: 2%

.image img
    height: 700px
</style>
