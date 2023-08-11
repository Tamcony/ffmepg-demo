import { createApp } from "vue"
import '@unocss/reset/tailwind.css'
import "./style.css"
import App from "./App.vue"
import 'virtual:uno.css'
import { setupRouter } from "./routes"
import { setupStore } from "./stores"

const app = createApp(App)

const setupPlugin = () => {}

const setupApp = async() => {
  setupStore(app)
  await setupRouter(app)
}

setupPlugin()
setupApp()

app.mount("#app")