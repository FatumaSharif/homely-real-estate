import Vue from 'vue';
import './registerServiceWorker';
import '../node_modules/bulma/css/bulma.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFontAwesome, faTwitter, faInstagram, faFacebookF, faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import {
  faUserSecret, faMapMarkerAlt, faBed, faBath,
  faBorderAll, faPhoneAlt, faMobileAlt, faFax, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './store';
import router from './router';
import App from './App.vue';

library.add(faFontAwesome, faUserSecret, faMapMarkerAlt, faBed, faBath, faBorderAll, faPhoneAlt);
library.add(faTwitter, faInstagram, faFacebookF, faPinterestP, faMobileAlt, faFax, faEnvelope);

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
