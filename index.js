import { createApp } from 'vue'
// import App from './pokemon/App.vue'
// import App from './composition/App.vue'
// import App from './App.vue'

// import App from './router/App.vue'
// import { router } from './router/router';

// import App from './vuex/App.vue'
// import { store } from './vuex/store'

import App from './photos/App.vue'
import { store } from './photos/store.js'
import { router } from './photos/router.js'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
