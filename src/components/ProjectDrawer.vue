<script setup>
import { watch, ref, nextTick } from 'vue'
import { asset, waLink } from '../data/site'

const props = defineProps({ project: Object })
const emit = defineEmits(['close'])
const dlg = ref(null)

watch(() => props.project, async (p) => {
  await nextTick()
  if (p && !dlg.value.open) dlg.value.showModal()
  if (!p && dlg.value?.open) dlg.value.close()
})
const close = () => emit('close')
const onBackdrop = (e) => { if (e.target === dlg.value) close() }
</script>

<template>
  <dialog ref="dlg" @close="close" @click="onBackdrop" aria-labelledby="pd-title">
    <article v-if="project" class="panel">
      <header class="top">
        <span class="mono">{{ project.client }} · {{ project.kind }}</span>
        <button class="x" @click="close" aria-label="Tutup">✕</button>
      </header>
      <h3 id="pd-title">{{ project.title }}</h3>
      <p class="line it">{{ project.line }}</p>
      <div class="media" :class="{ vert: project.video && project.video !== 'rabnesia' }">
        <video v-if="project.video" controls playsinline preload="metadata" :poster="asset(`assets/video/${project.video}-poster.jpg`)" :src="asset(`assets/video/${project.video}.mp4`)" />
        <img v-else :src="asset('assets/img/' + project.img)" :alt="`Tampilan ${project.title}`" />
      </div>
      <p class="story">{{ project.story }}</p>
      <h4 class="mono">Yang dikerjakan</h4>
      <ul><li v-for="f in project.feat" :key="f">{{ f }}</li></ul>
      <h4 class="mono">Dibangun dengan</h4>
      <p class="stack">{{ project.stack.join(' / ') }}</p>
      <div class="acts">
        <a v-if="project.link" class="btn btn-out" :href="project.link" target="_blank" rel="noopener">{{ project.link.replace('https://', '') }} ↗</a>
        <a class="btn btn-sun" :href="waLink(`Halo Mas Suryo, saya lihat project ${project.title} dan mau dibuatkan yang serupa. Bisa ngobrol?`)" target="_blank" rel="noopener">Mau yang seperti ini</a>
      </div>
    </article>
  </dialog>
</template>

<style scoped>
dialog { margin: 0 0 0 auto; height: 100dvh; max-height: 100dvh; width: min(640px, 100%); max-width: 100%; border: 0; background: var(--paper); color: var(--ink); border-left: 2px solid var(--ink); overflow-y: auto; overscroll-behavior: contain }
dialog[open] { animation: slidein .45s cubic-bezier(.2, .7, .2, 1) }
dialog::backdrop { background: rgba(22, 19, 17, .55); backdrop-filter: blur(3px) }
@keyframes slidein { from { transform: translateX(100%) } }
.panel { padding: calc(20px + env(safe-area-inset-top, 0px)) clamp(20px, 4vw, 40px) calc(40px + env(safe-area-inset-bottom, 0px)) }
.top { display: flex; justify-content: space-between; align-items: center; gap: 16px; color: var(--mute); position: sticky; top: 0; background: var(--paper); padding-block: 8px; z-index: 2 }
.x { width: 44px; height: 44px; border-radius: 50%; border: 1.5px solid var(--ink); font-size: 16px; flex: none; transition: background .2s, color .2s }
.x:hover { background: var(--ink); color: var(--paper) }
h3 { font-size: clamp(38px, 6vw, 60px); line-height: .95; letter-spacing: -.035em; font-weight: 720; margin-top: 18px; font-variation-settings: 'wdth' 85 }
.line { font-size: 24px; color: var(--sun); margin-top: 8px; line-height: 1.2 }
.media { margin: 26px 0; background: var(--ink); border-radius: 16px; overflow: hidden; display: grid; place-items: center }
.media img, .media video { width: 100%; max-height: 70dvh; object-fit: contain }
.media.vert { padding: 16px }
.media.vert video { width: auto; max-width: 100%; max-height: 64dvh; border-radius: 10px }
.story { font-size: 18px; color: var(--ink-2) }
h4 { color: var(--mute); margin: 30px 0 12px; font-weight: 400 }
ul { list-style: none; border-top: 1.5px solid var(--line) }
li { padding: 12px 0 12px 28px; border-bottom: 1.5px solid var(--line); position: relative }
li::before { content: '✺'; position: absolute; left: 0; color: var(--sun) }
.stack { font-family: var(--mono); font-size: 15px }
.acts { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 32px }
</style>
