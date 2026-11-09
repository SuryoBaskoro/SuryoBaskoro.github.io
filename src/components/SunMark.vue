<script setup>
// Logo: matahari (Suryo & Baskoro sama-sama berarti matahari) dengan inisial SB.
defineProps({ size: { type: Number, default: 40 }, spin: Boolean, ink: { type: String, default: 'var(--ink)' } })
const rays = Array.from({ length: 12 }, (_, i) => i * 30)
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 100 100" class="sunmark" aria-hidden="true">
    <g :class="{ spin }" style="transform-origin: 50px 50px">
      <rect v-for="r in rays" :key="r" x="47" y="2" width="6" height="16" rx="3" fill="var(--sun)" :transform="`rotate(${r} 50 50)`" />
    </g>
    <circle cx="50" cy="50" r="29" fill="var(--sun)" />
    <text x="50" y="50" text-anchor="middle" dominant-baseline="central" :fill="ink"
      style="font: 800 25px var(--display); letter-spacing: -1.5px; font-variation-settings: 'wdth' 80">SB</text>
  </svg>
</template>

<style scoped>
.sunmark { display: block; flex: none }
.spin { animation: spin 24s linear infinite }
@keyframes spin { to { transform: rotate(360deg) } }
</style>
