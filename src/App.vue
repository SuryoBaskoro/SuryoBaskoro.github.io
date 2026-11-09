<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeBand from './components/MarqueeBand.vue'
import WorkIndex from './components/WorkIndex.vue'
import ServicesList from './components/ServicesList.vue'
import ProcessSteps from './components/ProcessSteps.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <MarqueeBand />
    <WorkIndex />
    <ServicesList />
    <ProcessSteps />
    <AboutSection />
  </main>
  <ContactSection />
</template>
