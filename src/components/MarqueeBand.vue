<script setup>
const items = ['Website profil', 'Aplikasi Android', 'Aplikasi iOS', 'Sistem kantor', 'Dashboard admin', 'Integrasi WhatsApp', 'Produk SaaS', 'Server & jaringan']
</script>

<template>
  <div class="clipper"><div class="band" aria-hidden="true">
    <div class="track">
      <template v-for="n in 2" :key="n">
        <span v-for="it in items" :key="it + n">{{ it }}<i>✺</i></span>
      </template>
    </div>
  </div></div>
</template>

<style scoped>
.clipper { overflow: hidden; padding-block: 24px; margin-block: -24px }
.band { background: var(--ink); color: var(--paper); overflow: hidden; transform: rotate(-1.5deg); margin: 0 -20px; padding-block: 18px; border-block: 2px solid var(--sun) }
.track { display: flex; width: max-content; animation: slide 38s linear infinite }
span { display: inline-flex; align-items: center; gap: 28px; padding-right: 28px; font-size: clamp(28px, 4vw, 52px); font-weight: 700; letter-spacing: -.02em; font-variation-settings: 'wdth' 88; white-space: nowrap }
span:nth-child(even) { font-family: var(--serif); font-style: italic; font-weight: 400 }
i { font-style: normal; color: var(--sun); font-size: .7em }
@keyframes slide { to { transform: translateX(-50%) } }
</style>
