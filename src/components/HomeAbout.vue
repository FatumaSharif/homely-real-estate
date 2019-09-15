<template>
  <div class="">
    <div class="columns about-content">
      <div class="column">
        <h3 class="about-title">Our Company</h3>
        <p>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </p>
        <h3 class="about-title abtitle">Why Choose Us</h3>
        <p>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Property.
        </p>
        <h3 class="about-title abtitle">Our Mission</h3>
        <p>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </p>
      </div>
      <div class="column">
        <div class="image">
          <img src="https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
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
    padding: 5%
    font-size: 120%
    line-height: 26px
    background-color #fafafa

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
