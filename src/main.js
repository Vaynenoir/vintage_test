import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from 'vue2-google-maps';
Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAC22Eoi4ElABoka8LYnTv7I1ELQkEZgjY',
        v: '3.31',
        libraries: 'places',
    },

    //// If you intend to programmatically custom event listener code
    //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
    //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
    //// you might need to turn this on.
    // autobindAllEvents: false,

    //// If you want to manually install components, e.g.
    //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
    //// Vue.component('GmapMarker', GmapMarker)
    //// then disable the following:
    // installComponents: true,
});



new Vue({
  render: h => h(App)
}).$mount("#app");
