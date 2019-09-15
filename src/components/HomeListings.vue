<template>
  <div class="container">
    <h2 class="home-listing-title">Recent Listings</h2>
    <p class="sub-content">
     Accusantium magnam excepturi obcaecati at doloribus saepe natus, ducimus quo suscipit
    </p>
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <div class="listing-image">
                <img src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Property Listing">
              </div>
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <div class="listing-description">
              <p class="price">
                <span>KES 90,000</span>
              </p>
              <p class="location">
                <font-awesome-icon icon="map-marker-alt" />
                <span>Ngong Road, Kajiado North</span>
              </p>
            </div>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item bedroom">
              <font-awesome-icon icon="bed" />
              <span>3</span>
            </p>
            <p class="card-footer-item bathrooms">
              <font-awesome-icon icon="bath" />
              <span>4</span>
            </p>
            <p class="card-footer-item bathrooms">
              <font-awesome-icon icon="border-all" />
              <span>420 SQ FT</span>
            </p>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <div class="listing-image">
                <img src="https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Property Listing">
              </div>
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <div class="listing-description">
              <p class="price">
                <span>KES 90,000</span>
              </p>
              <p class="location">
                <font-awesome-icon icon="map-marker-alt" />
                <span>Ngong Road, Kajiado North</span>
              </p>
            </div>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item bedroom">
              <font-awesome-icon icon="bed" />
              <span>3</span>
            </p>
            <p class="card-footer-item bathrooms">
              <font-awesome-icon icon="bath" />
              <span>4</span>
            </p>
            <p class="card-footer-item bathrooms">
              <font-awesome-icon icon="border-all" />
              <span>420 SQ FT</span>
            </p>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <div class="listing-image">
                <img src="https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?cs=srgb&dl=apartment-architecture-balcony-347141.jpg&fm=jpg" alt="Property Listing">
              </div>
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <div class="listing-description">
              <p class="price">
                <span>KES 90,000</span>
              </p>
              <p class="location">
                <font-awesome-icon icon="map-marker-alt" />
                <span>Ngong Road, Kajiado North</span>
              </p>
            </div>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item bedroom">
              <font-awesome-icon icon="bed" />
              <span>3</span>
            </p>
            <p class="card-footer-item bathrooms">
              <font-awesome-icon icon="bath" />
              <span>4</span>
            </p>
            <p class="card-footer-item bathrooms">
              <font-awesome-icon icon="border-all" />
              <span>420 SQ FT</span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeListings',
};
</script>

<style lang="stylus" scoped>
h2.home-listing-title
    font-size 250%
    font-weight 500
    text-align center
    margin-top 5%

p.sub-content
    font-size 120%
    margin-bottom 3%
    text-align center

figure.is-4by3
  position relative
  overflow hidden

.card:hover .card-image .image .listing-image img
    -webkit-transform scale(1.25)
    -moz-transform scale(1.25)
    -ms-transform scale(1.2)
    -o-transform scale(1.2)
     transform scale(1.2)

.listing-image img
    transition 0.6s ease
   -webkit-transition 0.6s ease

svg.svg-inline--fa
    font-size 125%
    margin-right 20%

svg.svg-inline--fa.fa-map-marker-alt.fa-w-12
    font-size 150%
    margin-right 5%

svg.svg-inline--fa
    margin-right 10%

.price span
  background-color #2c3e50
  padding 2%
  color #fff
  font-size 120%
  font-weight 500

.card-content
  padding 1.3rem

.card-footer-item:not(:last-child)
    padding 0

.location
  margin-top 7%
  margin-left 2px

</style>
