<script setup>
import { asset, waLink } from '../data/site'
const ring = 'SURYO BASKORO · S.KOM · WEB & APP DEVELOPER · SURABAYA · '
</script>

<template>
  <section class="hero" id="top">
    <div class="wrap grid">
      <div class="copy">
        <p class="mono kicker"><span class="pill">Surabaya, Indonesia</span> Lagi buka slot project baru</p>
        <h1>
          <span class="l">Saya bikin website</span>
          <span class="l">&amp; aplikasi yang</span>
          <span class="l"><em class="it sun">dipakai,</em> bukan</span>
          <span class="l">cuma <em class="it">dipajang.</em></span>
        </h1>
        <p class="sub">Halo, saya <b>Suryo Baskoro, S.Kom</b>. Enam tahun terakhir saya membangun website, aplikasi Android &amp; iOS, dan sistem kantor untuk perusahaan, rumah sakit, dan sekolah. Dari obrolan pertama sampai aplikasinya online, Anda bicara dengan orang yang sama.</p>
        <div class="cta">
          <a class="btn btn-sun" :href="waLink()" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z"/></svg>
            Chat di WhatsApp
          </a>
          <a class="btn btn-out" href="#karya">Lihat karya <span aria-hidden="true">↓</span></a>
        </div>
      </div>

      <div class="portrait">
        <svg class="ring" viewBox="0 0 400 400" aria-hidden="true">
          <defs><path id="circ" d="M200,200 m-176,0 a176,176 0 1,1 352,0 a176,176 0 1,1 -352,0" /></defs>
          <text><textPath href="#circ" textLength="1100" lengthAdjust="spacing">{{ ring }}</textPath></text>
        </svg>
        <div class="disc">
          <img :src="asset('assets/img/suryo.jpg')" alt="Suryo Baskoro" width="800" height="1000" />
        </div>
        <div class="tag mono">✺ 8 project live</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { padding-block: clamp(28px, 5vw, 64px) clamp(56px, 8vw, 110px) }
.grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: clamp(32px, 5vw, 72px); align-items: center }
.kicker { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; color: var(--mute) }
.pill { background: var(--ink); color: var(--paper); padding: 6px 12px; border-radius: 999px }
h1 { font-size: clamp(44px, 7vw, 106px); line-height: .92; font-weight: 720; letter-spacing: -.035em; margin: 28px 0 30px; font-variation-settings: 'wdth' 88 }
h1 .l { display: block; animation: rise .9s cubic-bezier(.2, .7, .2, 1) both }
h1 .l:nth-child(2) { animation-delay: .08s } h1 .l:nth-child(3) { animation-delay: .16s } h1 .l:nth-child(4) { animation-delay: .24s }
h1 em { font-size: 1.12em; letter-spacing: -.03em; padding-right: .04em }
@keyframes rise { from { opacity: 0; transform: translateY(40%) } }
.sub { font-size: clamp(17px, 1.5vw, 20px); max-width: 600px; color: var(--ink-2) }
.sub b { color: var(--ink); font-weight: 700 }
.cta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 36px }

.portrait { position: relative; aspect-ratio: 1; width: min(100%, 500px); justify-self: center }
.ring { position: absolute; inset: 0; width: 100%; height: 100%; animation: spin 40s linear infinite }
.ring text { font: 600 15.5px var(--mono); letter-spacing: 3.1px; fill: var(--ink) }
@keyframes spin { to { transform: rotate(360deg) } }
.disc { position: absolute; inset: 12%; border-radius: 50%; overflow: hidden; box-shadow: 0 0 0 8px var(--sun), 0 0 0 10px var(--ink) }
.disc img { width: 100%; height: 100%; object-fit: cover; object-position: center 22% }
.tag { position: absolute; right: 2%; bottom: 10%; background: var(--paper); border: 1.5px solid var(--ink); padding: 10px 14px; border-radius: 999px; transform: rotate(-6deg); box-shadow: 4px 4px 0 var(--ink) }
@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr }
  .portrait { width: min(88%, 420px); order: -1 }
}
</style>
