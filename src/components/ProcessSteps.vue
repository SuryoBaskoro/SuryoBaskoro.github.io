<script setup>
const steps = [
  { t: 'Ngobrol', b: 'Ceritakan masalahnya lewat WhatsApp atau ketemu langsung. Gratis, tanpa komitmen.' },
  { t: 'Penawaran', b: 'Saya kirim daftar fitur, jadwal, dan biaya tertulis. Tidak ada biaya kejutan di tengah jalan.' },
  { t: 'Dikerjakan', b: 'Tiap minggu ada versi yang bisa Anda coba langsung di HP. Masukan bisa masuk kapan saja.' },
  { t: 'Online', b: 'Uji bersama, dirapikan, lalu terbit di domain Anda atau Play Store.' },
  { t: 'Didampingi', b: 'Tim Anda saya ajari memakainya. Kalau ada kendala setelah online, saya tetap bisa dihubungi.' },
]
</script>

<template>
  <section class="proc">
    <div class="wrap">
      <div class="sec-head" v-reveal>
        <h2>Cara <em class="it sun">kerjanya</em></h2>
        <p class="mono">terbit → terbenam<br />tanpa drama</p>
      </div>
      <svg class="arc" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true"><path d="M10 115 Q500 -95 990 115" fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="4 8" vector-effect="non-scaling-stroke" /></svg>
      <ol class="steps">
        <li v-for="(s, i) in steps" :key="s.t" v-reveal="i * 90" :style="{ '--lift': `${[0, 46, 62, 46, 0][i]}px` }">
          <span class="sunpt" aria-hidden="true" />
          <span class="mono n">langkah {{ i + 1 }}</span>
          <h3>{{ s.t }}</h3>
          <p>{{ s.b }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.proc { overflow: hidden }
.arc { display: block; width: 100%; height: 110px; margin-top: 48px }
.steps { list-style: none; display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; margin-top: -54px }
li { transform: translateY(calc(var(--lift) * -1)) }
li.reveal:not(.in) { transform: translateY(calc(var(--lift) * -1 + 24px)) }
.sunpt { display: block; width: 22px; height: 22px; border-radius: 50%; background: var(--sun); box-shadow: 0 0 0 6px var(--paper), 0 0 0 7.5px var(--ink); margin-bottom: 22px }
.n { color: var(--mute) }
h3 { font-size: 28px; font-weight: 700; letter-spacing: -.03em; margin: 6px 0 8px }
p { color: var(--ink-2); font-size: 15.5px }
@media (max-width: 900px) {
  .arc { display: none }
  .steps { grid-template-columns: 1fr; margin-top: 36px; gap: 0; border-left: 1.5px dashed var(--ink); margin-left: 10px }
  li, li.reveal:not(.in) { transform: none; padding: 0 0 30px 28px; position: relative }
  .sunpt { position: absolute; left: -12px; top: 2px }
}
</style>
