<script setup>
import SectionHome from '../components/SectionHome.vue'
import SectionAbout from '../components/SectionAbout.vue'
import SectionPortfolio from '../components/SectionPortfolio.vue'
import SectionContact from '../components/SectionContact.vue'
import { ref, onMounted } from 'vue';

const activeTab = ref('home');

onMounted(() => {
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      activeTab.value = link.getAttribute('href').substring(1);
    });
  });
});
</script>

<template>
  <div class="main-container">
    <div class="main-content">
      <section :class="{ 'home active section': activeTab === 'home' }" id="home">
        <section-home v-if="activeTab === 'home'"></section-home>
      </section>

      <section :class="{ 'about active section': activeTab === 'about' }" id="about">
        <section-about v-if="activeTab === 'about'"></section-about>
      </section>

      <section :class="{ 'portfolio active section': activeTab === 'portfolio' }" id="portfolio">
        <section-portfolio v-if="activeTab === 'portfolio'"></section-portfolio>
      </section>

      <section :class="{ 'contact active section': activeTab === 'contact' }" id="contact">
        <section-contact v-if="activeTab === 'contact'"></section-contact>
      </section>
    </div>
  </div>
</template>
