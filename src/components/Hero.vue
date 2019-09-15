<template>
  <div class="hero">
    <div class="hero-content">
      <div class="hero-title-section">
        <h1 class="hero-title">
          The best way to find your new home
        </h1>
      </div>
      <SearchProperty />
    </div>
  </div>
</template>

<script>
import SearchProperty from '@/components/SearchProperty.vue';

export default {
  name: 'Hero',
  components: {
    SearchProperty,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.hero
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?cs=srgb&dl=coconut-trees-contemporary-daylight-1643389.jpg&fm=jpg');
  background-size cover

.hero-title
    font-size 320%
    font-weight 600
    color #eee
    margin 5% 20%
    letter-spacing 1px
    word-spacing 1px
    text-align center
    line-height 60px
</style>
