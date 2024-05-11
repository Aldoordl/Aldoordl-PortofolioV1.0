import './assets/css/main.css'
import './assets/css/style-switcher.css'
// import './assets/css/skins/color-1.css'
// import './assets/css/skins/color-2.css'
// import './assets/css/skins/color-3.css'
import './assets/css/skins/color-4.css'
// import './assets/css/skins/color-5.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
