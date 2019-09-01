<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <NavBar />
    <Hero />
    <HomeListings />
    <PopularListing />
    <About />
    <Feedback/>
    <Subscription />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue';
import NavBar from '@/components/NavBar.vue';
import HomeListings from '@/components/HomeListings.vue';
import PopularListing from '@/components/PopularListing.vue';
import About from '@/components/HomeAbout.vue';
import Feedback from '@/components/Feedback.vue';
import Subscription from '@/components/Subscription.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Hero,
    NavBar,
    HomeListings,
    PopularListing,
    About,
    Feedback,
    Subscription,
    Footer,
  },
};
</script>
<style lang="stylus"></style>
