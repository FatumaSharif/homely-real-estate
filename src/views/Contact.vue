<template>
  <div class="contact-page">
    <NavBar/>
    <div class="contact-bar">
      <nav class="breadcrumb has-arrow-separator is-centered" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      Contact
    </div>
    <div class="container">
      <!-- News
      <p class="sub-content">
        Receive our latest property news and advice in your mailbox
      </p> -->
      <div class="contact">
        <div class="columns">
          <div class="column">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Your Name">
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="Your Email">
              </div>
            </div>

            <div class="field">
              <label class="label">Phone</label>
              <div class="control">
                <input class="input" type="text" placeholder="Your Phone">
              </div>
            </div>

            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea class="textarea" placeholder="Message"></textarea>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <a class="button is-primary is-outlined is-fullwidth">Submit</a>
              </div>

            </div>
          </div>
          <div class="column contact-details">
            <div class="columns">
              <font-awesome-icon icon="phone-alt" class="icon" />
              <div class="column is-11 label">
                <p class="label-title">Phone</p>
                <p class="label-info">+123-456-798</p>
              </div>
            </div>
            <div class="columns">
              <font-awesome-icon icon="mobile-alt" class="icon" />
              <div class="column is-11 label">
                <p class="label-title">Mobile</p>
                <p class="label-info">+123-456-789</p>
              </div>
            </div>
            <div class="columns">
              <font-awesome-icon icon="fax" class="icon" />
              <div class="column is-11 label">
                <p class="label-title">Fax</p>
                <p class="label-info">+122-456-788</p>
              </div>
            </div>
            <div class="columns">
              <font-awesome-icon icon="envelope" class="icon" />
              <div class="column is-11 label">
                <p class="label-title">Email</p>
                <p class="label-info">homely@realestate.com</p>
              </div>
            </div>
            <div class="columns">
              <font-awesome-icon icon="map-marker-alt" class="icon" />
              <div class="column is-11 label">
                <p class="label-title">Address</p>
                <p class="label-info">315 Grand Arcade, Ngong Lane, Nairobi</p>
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
  name: 'contact',
  components: {
    NavBar,
    Subscription,
    Footer,
  },
};
</script>
<style lang="stylus" scoped>
.contact-bar
    background-image linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://cdn.pixabay.com/photo/2019/08/11/18/17/house-4399573__340.jpg')
    background-size cover
    color: #ccc
    padding: 7% 0
    font-size: 437%
    font-weight: 500
    text-align: center

.contact-page
  background-color #fafafa

.contact
  background-color #fff
  margin 4%
  padding 5%

.label
  font-weight 400

.column.contact-details
    margin: 2% 5%

.column.is-11.label
  padding-top 0
  margin-bottom: 1%

.button.is-primary.is-outlined
    border-color #2c3e50
    color #2c3e50
    font-weight 500

.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused
    background-color: #2c3e50;
    border-color: #2c3e50;
    color: #fff;

.icon
  font-size: 150%
  font-weight: 100
  color: #888

.label-info
  color #777
  padding-top 1px
</style>
