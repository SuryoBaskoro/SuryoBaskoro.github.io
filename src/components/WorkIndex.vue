<script setup>
import { ref } from 'vue'
import { projects, asset } from '../data/site'
import ProjectDrawer from './ProjectDrawer.vue'

const hover = ref(null)
const pos = ref({ x: 0, y: 0 })
const open = ref(null)
const move = (e) => { pos.value = { x: e.clientX, y: e.clientY } }
</script>

<template>
  <section id="karya" @mousemove="move">
    <div class="wrap">
      <div class="sec-head" v-reveal>
        <h2>Karya <em class="it sun">terpilih</em></h2>
        <p class="mono">({{ String(projects.length).padStart(2, '0') }})<br />klik untuk detail</p>
      </div>
      <ol class="list">
        <li v-for="(p, i) in projects" :key="p.id" v-reveal>
          <button class="row" @mouseenter="hover = p" @mouseleave="hover = null" @focus="hover = null" @click="open = p" :aria-label="`Lihat detail ${p.title}`">
            <span class="no mono">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="t">
              <span class="name">{{ p.title }}</span>
              <span class="line">{{ p.line }}</span>
            </span>
            <span class="meta mono">{{ p.kind }}<template v-if="p.video"> · ▶ video</template></span>
            <span class="thumb"><img :src="asset('assets/img/' + p.img)" :alt="''" loading="lazy" width="1200" height="750" /></span>
            <span class="arrow" aria-hidden="true">↗</span>
          </button>
        </li>
      </ol>
    </div>
    <div class="float" :class="{ on: hover }" :style="{ transform: `translate(${pos.x + 24}px, ${pos.y - 120}px) rotate(${hover ? -3 : 0}deg)` }" aria-hidden="true">
      <img v-for="p in projects" :key="p.id" :src="asset('assets/img/' + p.img)" alt="" :class="{ show: hover?.id === p.id }" />
    </div>
    <ProjectDrawer :project="open" @close="open = null" />
  </section>
</template>

<style scoped>
.list { list-style: none }
.row { width: 100%; display: grid; grid-template-columns: 64px 1fr auto 40px; align-items: center; gap: 24px; padding: 30px 0; border-bottom: 1.5px solid var(--line); text-align: left; transition: padding .35s cubic-bezier(.2, .7, .2, 1), color .2s }
.no { color: var(--mute) }
.name { display: block; font-size: clamp(30px, 4.6vw, 64px); line-height: 1; font-weight: 700; letter-spacing: -.03em; font-variation-settings: 'wdth' 90 }
.line { display: block; color: var(--ink-2); margin-top: 8px; font-size: 16px }
.meta { color: var(--mute); text-align: right; white-space: nowrap }
.arrow { font-size: 30px; transition: transform .3s, color .2s }
.thumb { display: none }
.row:hover { padding-left: 18px }
.row:hover .name { color: var(--sun) }
.row:hover .arrow { transform: rotate(45deg); color: var(--sun) }

.float { position: fixed; left: 0; top: 0; width: 360px; aspect-ratio: 16 / 10; pointer-events: none; z-index: 40; opacity: 0; transition: opacity .25s, transform .12s linear; border-radius: 14px; overflow: hidden; box-shadow: 0 30px 60px rgba(22, 19, 17, .25); border: 2px solid var(--ink) }
.float.on { opacity: 1 }
.float img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0 }
.float img.show { opacity: 1 }
@media (hover: none), (max-width: 860px) {
  .float { display: none }
  .row { grid-template-columns: 40px 1fr 28px; gap: 14px; padding: 24px 0 }
  .meta { display: none }
  .thumb { display: block; grid-column: 2 / 3; grid-row: 2; border-radius: 12px; overflow: hidden; border: 1.5px solid var(--ink); aspect-ratio: 16 / 10 }
  .thumb img { width: 100%; height: 100%; object-fit: cover }
  .arrow { grid-column: 3; grid-row: 1 }
  .row:hover { padding-left: 0 }
}
</style>
