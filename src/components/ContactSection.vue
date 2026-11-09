<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { contact, waLink } from '../data/site'
import SunMark from './SunMark.vue'

const time = ref('')
let t
const tick = () => {
  time.value = new Intl.DateTimeFormat('id-ID', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date())
}
onMounted(() => { tick(); t = setInterval(tick, 15000) })
onBeforeUnmount(() => clearInterval(t))
const year = new Date().getFullYear()
</script>

<template>
  <section id="kontak" class="contact">
    <div class="wrap">
      <p class="mono clock" v-reveal>Di Surabaya sekarang <b>{{ time }} WIB</b> — biasanya saya balas di hari yang sama.</p>
      <h2 v-reveal>Ngobrol dulu,<br /><em class="it">gratis.</em></h2>
      <div class="links" v-reveal>
        <a class="big" :href="waLink()" target="_blank" rel="noopener"><span class="mono">WhatsApp</span>{{ contact.waLabel }}<i>↗</i></a>
        <a class="big" :href="`mailto:${contact.email}`"><span class="mono">Email</span>{{ contact.email }}<i>↗</i></a>
      </div>
    </div>
    <footer class="wrap foot">
      <div class="word" aria-hidden="true"><SunMark :size="96" spin ink="var(--ink)" /><span>Suryo Baskoro</span></div>
      <div class="mono legal"><span>© {{ year }} Suryo Baskoro, S.Kom</span><span>Jasa pembuatan aplikasi &amp; website · Surabaya</span><a href="#top">Kembali ke atas ↑</a></div>
    </footer>
  </section>
</template>

<style scoped>
.contact { background: var(--sun); color: var(--ink); padding-bottom: 0 }
.clock b { font-weight: 600; background: var(--ink); color: var(--sun-2); padding: 3px 8px; border-radius: 6px }
h2 { font-size: clamp(64px, 14vw, 200px); line-height: .85; letter-spacing: -.04em; font-weight: 720; margin: 28px 0 48px; font-variation-settings: 'wdth' 86 }
h2 em { color: var(--paper); font-size: 1.08em }
.links { display: grid; border-top: 2px solid var(--ink) }
.big { display: grid; grid-template-columns: 140px 1fr auto; align-items: center; gap: 16px; padding: 22px 0; border-bottom: 2px solid var(--ink); font-size: clamp(22px, 3.6vw, 46px); font-weight: 700; letter-spacing: -.03em; overflow-wrap: anywhere; transition: padding .3s, background .3s }
.big i { font-style: normal; transition: transform .3s }
.big:hover { padding-left: 16px; background: rgba(22, 19, 17, .06) }
.big:hover i { transform: rotate(45deg) }
.foot { padding-block: clamp(56px, 8vw, 100px) calc(28px + env(safe-area-inset-bottom, 0px)) }
.word { display: flex; align-items: center; gap: clamp(10px, 2vw, 24px); font-size: clamp(40px, 9.6vw, 150px); font-weight: 720; letter-spacing: -.04em; line-height: .9; font-variation-settings: 'wdth' 84; white-space: nowrap }
.word :deep(svg) { width: .8em; height: .8em }
.word :deep(svg rect), .word :deep(svg circle) { fill: var(--ink) }
.word :deep(svg text) { fill: var(--sun) }
.legal { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px 24px; margin-top: 36px; padding-top: 18px; border-top: 2px solid var(--ink) }
@media (max-width: 640px) { .big { grid-template-columns: 1fr auto } .big .mono { grid-column: 1 / -1 } }
</style>
