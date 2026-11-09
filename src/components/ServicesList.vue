<script setup>
import { services } from '../data/site'
</script>

<template>
  <section id="layanan" class="svc">
    <div class="wrap">
      <div class="sec-head" v-reveal>
        <h2>Yang biasa<br /><em class="it sun">saya kerjakan</em></h2>
        <p class="mono">dari ide<br />sampai online</p>
      </div>
      <div class="rows">
        <article v-for="(s, i) in services" :key="s.no" class="r" v-reveal="(i % 2) * 80">
          <span class="no">{{ s.no }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.body }}</p>
          <ul class="mono"><li v-for="t in s.tags" :key="t">{{ t }}</li></ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.svc { background: var(--paper-2) }
.rows { display: grid; grid-template-columns: 1fr 1fr; column-gap: clamp(24px, 5vw, 72px) }
.r { display: grid; grid-template-columns: 70px 1fr; column-gap: 12px; padding: 34px 0; border-bottom: 1.5px solid var(--line) }
.no { grid-row: span 3; font-family: var(--serif); font-style: italic; font-size: 46px; line-height: .9; color: var(--sun) }
h3 { font-size: clamp(24px, 2.4vw, 32px); font-weight: 700; letter-spacing: -.03em; line-height: 1.1 }
p { color: var(--ink-2); margin-top: 10px; max-width: 480px }
ul { list-style: none; display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px }
li { border: 1.5px solid var(--ink); border-radius: 999px; padding: 4px 11px; font-size: 11.5px }
@media (max-width: 860px) { .rows { grid-template-columns: 1fr } .r { grid-template-columns: 54px 1fr } .no { font-size: 38px } }
</style>
