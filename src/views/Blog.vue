<template>
  <div class="blog">
    <NavBar/>
    <div class="about-page">
      <nav class="breadcrumb has-arrow-separator is-centered" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">News</a></li>
        </ul>
      </nav>
      News & Advice
    </div>
    <div class="container">
      <div class="home-blog">
        <h2 class="blog-title">News</h2>
        <p class="sub-content">
          Accusantium magnam excepturi obcaecati at doloribus saepe natus, ducimus quo suscipit
        </p>
        <div class="columns">
          <div class="column">
            <div class="card is-shadowless">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="blog-title">Profitable Real Estate Investments</p>
                  </div>
                </div>

                <div class="content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui culpa praesentium ullam deleniti, optio esse veniam aliquam tempora, minus molestias
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui culpa praesentium ullam deleniti, optio esse veniam aliquam tempora, minus molestias ea! Eaque reiciendis quibusdam asperiores illo quod, facere iste quia.
                  </p>
                  <time datetime="2019-1-1">1st January, 2019</time>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card is-shadowless">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="blog-title">Luxury Home Prices Soften Further</p>
                  </div>
                </div>

                <div class="content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui culpa praesentium ullam deleniti, optio esse veniam aliquam tempora, minus molestias
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui culpa praesentium ullam deleniti, optio esse veniam aliquam tempora, minus molestias ea! Eaque reiciendis quibusdam asperiores illo quod, facere iste quia.
                  </p>
                  <time datetime="2019-1-1">1st January, 2019</time>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card is-shadowless">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="blog-title">Promoting Affordable Housing</p>
                  </div>
                </div>

                <div class="content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui culpa praesentium ullam deleniti, optio esse veniam aliquam tempora, minus molestias
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui culpa praesentium ullam deleniti, optio esse veniam aliquam tempora, minus molestias ea! Eaque reiciendis quibusdam asperiores illo quod, facere iste quia.
                  </p>
                  <time datetime="2019-1-1">1st January, 2019</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Subscription />
    <Footer />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import Subscription from '@/components/Subscription.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'blog',
  components: {
    NavBar,
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

h2.blog-title
    font-size 250%
    font-weight 500
    text-align center

p.sub-content
    font-size 120%
    margin-bottom 4%
    text-align center

.columns.about-content
    margin: 5%
    font-size: 120%
    line-height: 26px

h3.about-title
    font-weight: 500
    font-size: 160%
    padding-bottom: 4%

.image img
  margin-top: 12%

.home-blog
  margin 5% 0

h2.blog-title
    font-size 250%
    font-weight 500
    text-align center

p.sub-content
    font-size 120%
    margin-bottom 0
    text-align center

.card-content
  padding-left 0
  padding-top 17%
  background-color #fafafa
  padding-left 5%

figure.is-2by1
  position relative
  overflow hidden

.card:hover .card-image .image img
    -webkit-transform scale(1.25)
    -moz-transform scale(1.25)
    transform scale(1.2)

.image img
    transition 0.6s ease
   -webkit-transition 0.6s ease

.blog-title
  font-size 140%
  font-weight 500
</style>
