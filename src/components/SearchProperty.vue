<template>
  <div class="search">
    <h2 class="search-title">Search Properties</h2>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Location</option>
                <option>Kilimani</option>
                <option>Roysambu</option>
                <option>Lavington</option>
                <option>Langata</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Listing Type</option>
                <option>Rent</option>
                <option>Buy</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Bedrooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Bathrooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                <strong>KES</strong>
              </a>
            </p>
            <p class="control is-expanded">
              <input class="input" type="tel" placeholder="Max Price">
            </p>
          </div>
        </div>
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                <strong>KES</strong>
              </a>
            </p>
            <p class="control is-expanded">
              <input class="input" type="tel" placeholder="Min Price">
            </p>
          </div>
        </div>
        <div class="field is-expanded">
          <div class="control">
            <a class="button is-primary is-outlined is-fullwidth">Search Properties</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchProperty',
};
</script>

<style lang="stylus" scoped>
.search
  background-color #fafafa
  padding  5%
  margin 0 5%

h2.search-title
  font-size 200%
  font-weight 500
  text-align center
  margin-bottom 3%

p.sub-content
    font-size 120%
    margin-bottom 3%
    text-align center

.select:not(.is-multiple):not(.is-loading)::after
  border-color #ccc

.button.is-primary.is-outlined
    border-color #2c3e50
    color #2c3e50
    font-weight 500

.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused
    background-color: #2c3e50;
    border-color: #2c3e50;
    color: #fff;

</style>
