import {
    createApp
} from 'vue'
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import Maska from 'maska'
import './assets/css/styles.css'

const app = createApp(App)
app
.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDaO1x0MYYbW4t0wgmru-JwsH8h2MJEJrM',
    },
})
.use(Maska)
.mount('#app')



