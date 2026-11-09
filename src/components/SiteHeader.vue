<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SunMark from './SunMark.vue'
import { waLink } from '../data/site'

const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 24 }
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header :class="{ scrolled }">
    <div class="wrap bar">
      <a href="#top" class="brand"><SunMark :size="38" spin /><span>Suryo Baskoro<small>web &amp; app developer</small></span></a>
      <nav class="mono" aria-label="Navigasi">
        <a href="#karya">Karya</a><a href="#layanan">Layanan</a><a href="#tentang">Tentang</a><a href="#kontak">Kontak</a>
      </nav>
      <a class="btn btn-ink talk" :href="waLink()" target="_blank" rel="noopener">Ngobrol<span class="dot" /></a>
    </div>
  </header>
</template>

<style scoped>
header { position: sticky; top: 0; z-index: 50; padding-top: env(safe-area-inset-top, 0px); transition: background .3s, box-shadow .3s }
header.scrolled { background: rgba(242, 236, 224, .86); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); box-shadow: 0 1px 0 var(--line) }
.bar { display: flex; align-items: center; justify-content: space-between; gap: 20px; height: 72px }
.brand { display: flex; align-items: center; gap: 12px; font-weight: 750; font-size: 17px; letter-spacing: -.02em; line-height: 1.1 }
.brand small { display: block; font-family: var(--mono); font-weight: 400; font-size: 11px; letter-spacing: .04em; color: var(--mute); text-transform: uppercase; margin-top: 3px }
nav { display: flex; gap: 30px }
nav a { position: relative }
nav a::after { content: ''; position: absolute; left: 0; right: 100%; bottom: -4px; height: 1.5px; background: var(--sun); transition: right .25s }
nav a:hover::after { right: 0 }
.talk { padding: 11px 18px; font-size: 15px }
.dot { width: 8px; height: 8px; border-radius: 50%; background: #3BD16F; box-shadow: 0 0 0 0 rgba(59, 209, 111, .6); animation: ping 2s infinite }
@keyframes ping { 70% { box-shadow: 0 0 0 8px rgba(59, 209, 111, 0) } 100% { box-shadow: 0 0 0 0 rgba(59, 209, 111, 0) } }
@media (max-width: 860px) { nav { display: none } }
@media (max-width: 400px) { .brand small { display: none } }
</style>
