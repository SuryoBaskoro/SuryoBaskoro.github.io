<script setup>
import { jobs, stack, asset } from '../data/site'
</script>

<template>
  <section id="tentang" class="about">
    <div class="wrap">
      <div class="sec-head" v-reveal>
        <h2>Sedikit<br /><em class="it sun">tentang saya</em></h2>
        <a class="btn btn-ink" :href="asset('cv/CV-Suryo-Baskoro.pdf')" target="_blank" rel="noopener">Unduh CV (PDF) ↓</a>
      </div>
      <div class="cols">
        <div class="intro" v-reveal>
          <p class="big">Saya lahir dan besar di Surabaya. Di umur dua puluh, saya sudah dipercaya jadi <em class="it">kepala programmer</em>.</p>
          <p>Sehari-hari saya mengurus IT di SMK Negeri 3 Surabaya — jaringan, komputer, printer, sampai website dan aplikasi ujian sekolah. Di luar itu, saya membangun aplikasi untuk klien dan produk saya sendiri.</p>
          <p>Kombinasi itu membuat saya terbiasa dengan dua sisi: menulis kode yang rapi, dan memastikan aplikasinya benar-benar jalan di lapangan — di HP murah, sinyal lemah, dan pengguna yang bukan orang IT.</p>
          <div class="facts mono">
            <div><b>S.Kom</b>S1 Teknik Informatika · 2018 — 2022</div>
            <div><b>2018</b>Lulus SMA Muh. 3 Surabaya</div>
          </div>
        </div>
        <div>
          <h3 class="mono lbl">Pengalaman</h3>
          <ol class="jobs">
            <li v-for="(j, i) in jobs" :key="j.role" v-reveal="i * 70">
              <span class="mono y">{{ j.years }}</span>
              <div><h4>{{ j.role }}</h4><p class="at">{{ j.at }}</p><p>{{ j.body }}</p></div>
            </li>
          </ol>
          <h3 class="mono lbl">Alat sehari-hari</h3>
          <p class="stack" v-reveal><span v-for="(s, i) in stack" :key="s">{{ s }}<i v-if="i < stack.length - 1"> / </i></span></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about { background: var(--ink); color: var(--paper) }
.about .sec-head { border-color: var(--paper) }
.about .btn-ink { background: var(--sun); color: #fff }
.about .btn-ink:hover { background: var(--paper); color: var(--ink) }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(32px, 6vw, 96px); margin-top: 48px }
.intro p { color: #CFC5B4; margin-bottom: 18px; max-width: 560px }
.intro .big { font-size: clamp(24px, 2.6vw, 34px); line-height: 1.2; color: var(--paper); letter-spacing: -.02em; font-weight: 500 }
.intro .big em { color: var(--sun) }
.facts { display: grid; gap: 0; margin-top: 30px; border-top: 1px solid rgba(242, 236, 224, .2) }
.facts div { display: grid; grid-template-columns: 130px 1fr; padding: 12px 0; border-bottom: 1px solid rgba(242, 236, 224, .2); color: #CFC5B4; text-transform: none; font-size: 13px }
.facts b { color: var(--sun-2); font-weight: 600; text-transform: uppercase }
.lbl { color: var(--sun-2); font-weight: 400; margin-bottom: 8px }
.jobs { list-style: none; margin-bottom: 40px }
.jobs li { display: grid; grid-template-columns: 120px 1fr; gap: 16px; padding: 20px 0; border-bottom: 1px solid rgba(242, 236, 224, .2) }
.y { color: #A99D8B; padding-top: 4px }
h4 { font-size: 22px; font-weight: 700; letter-spacing: -.02em; line-height: 1.15 }
.at { color: var(--sun); font-weight: 600; margin: 2px 0 6px }
.jobs p:not(.at) { color: #CFC5B4; font-size: 15.5px }
.stack { font-size: clamp(20px, 2vw, 26px); line-height: 1.45; letter-spacing: -.01em }
.stack i { color: var(--sun); font-style: normal }
@media (max-width: 900px) { .cols { grid-template-columns: 1fr } .jobs li { grid-template-columns: 1fr; gap: 4px } .facts div { grid-template-columns: 100px 1fr } }
@media (max-width: 560px) { .about .sec-head { grid-template-columns: 1fr } }
</style>
