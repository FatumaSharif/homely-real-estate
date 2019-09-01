<template>
<div class="container popular-locations">
  <h2 class="locations-title">Popular Locations</h2>
  <p class="sub-content">
     Accusantium magnam excepturi obcaecati at doloribus saepe natus, ducimus quo suscipit
  </p>
  <div class="columns is-vcentered has-text-centered">
    <div class="column">
      <div class="img1">
        <div class="info">
          <p class="info-title1">Nairobi</p>
          <p class="info">28 Properties</p>
        </div>
      </div>
      <div class="columns is-mobile has-text-centered is-vcentered">
        <div class="column">
          <div class="img2">
            <div class="info">
              <p class="info-title">Kiambu</p>
              <p class="info">18 Properties</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="img3">
            <div class="info">
              <p class="info-title">Eldoret</p>
              <p class="info">15 Properties</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="img4">
        <div class="info">
          <p class="info-title">Mombasa</p>
          <p class="info">22 Properties</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'PopularListing',
};
</script>
<style lang="stylus" scoped>
.popular-locations
  margin-top 8%
  margin-bottom 5%

h2.locations-title
    font-size 250%
    font-weight 500
    text-align center

p.sub-content
    font-size 120%
    margin-bottom 4%
    text-align center

.img1
  background-image linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.pixabay.com/photo/2018/01/11/19/02/architecture-3076685__340.jpg')
  height 280px
  margin-bottom 5%

.img2
  background-image linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.pixabay.com/photo/2017/10/27/10/27/architecture-2893844__340.jpg')
  height 280px

.img3
  background-image linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.pixabay.com/photo/2019/04/17/18/36/cologne-4135004__340.jpg')
  height 280px

.img4
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://cdn.pixabay.com/photo/2016/11/23/00/39/bicycle-1851497_960_720.jpg);
  background-size cover
  height 580px
  max-width 100%

.img1:hover
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(44,62,80, 0.9)), url(https://cdn.pixabay.com/photo/2018/01/11/19/02/architecture-3076685__340.jpg);

.img2:hover
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(44,62,80, 0.9)), url(https://cdn.pixabay.com/photo/2017/10/27/10/27/architecture-2893844__340.jpg);

.img3:hover
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(44,62,80, 0.9)), url(https://cdn.pixabay.com/photo/2019/04/17/18/36/cologne-4135004__340.jpg);

.img4:hover
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(44,62,80, 0.9)), url(https://cdn.pixabay.com/photo/2016/11/23/00/39/bicycle-1851497_960_720.jpg);

.info
  color #fff
  font-weight 500
  font-size 130%


.info-title
  font-size 130%
  padding-top: 50%;

.info-title1
  font-size 130%
  padding-top: 20%;
</style>
