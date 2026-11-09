import { createApp } from 'vue'
import '@fontsource-variable/bricolage-grotesque/standard.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/600.css'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// v-reveal: elemen muncul halus saat masuk layar
const io = typeof IntersectionObserver !== 'undefined'
  ? new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.12 })
  : null
app.directive('reveal', {
  mounted(el, { value }) {
    el.classList.add('reveal')
    if (value) el.style.transitionDelay = `${value}ms`
    io ? io.observe(el) : el.classList.add('in')
  },
  unmounted(el) { io?.unobserve(el) },
})

app.mount('#app')
