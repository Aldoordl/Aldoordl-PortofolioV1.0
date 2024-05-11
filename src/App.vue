<script setup>
import { ref, onMounted } from 'vue';

const activeTab = ref('home');
const navList = ref([]);
const allSection = ref([]);

onMounted(() => {
  navList.value = document.querySelectorAll(".nav li");
  allSection.value = document.querySelectorAll(".section");

  navList.value.forEach((item) => {
    const link = item.querySelector("a");
    link.addEventListener("click", () => {
      setActiveTab(link.getAttribute("href").substring(1));
      if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
      }
    });

    const dayNight = document.querySelector(".day-night");
    dayNight.addEventListener("click", toggleDayNight);

    window.addEventListener("load", () => {
      const dayNightIcon = dayNight.querySelector("i");
      if (document.body.classList.contains("dark")) {
        dayNightIcon.classList.add("fa-sun");
      } else {
        dayNightIcon.classList.add("fa-moon");
      }
    });
  });

  const hireMeButton = document.querySelector(".hire-me");
  if (hireMeButton) {
    hireMeButton.addEventListener("click", function () {
      showSection(this);
      updateNav(this);
    });
  }

  const navTogglerBtn = document.querySelector(".nav-toggler");
  navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
  });

  // const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
  // styleSwitcherToggle.addEventListener("click", () => {
  //   document.querySelector(".style-switcher").classList.toggle("open");
  // });

  // window.addEventListener("scroll", () => {
  //   if (document.querySelector(".style-switcher").classList.contains("open")) {
  //     document.querySelector(".style-switcher").classList.remove("open");
  //   }
  // });

  // window.setActiveStyle = function (color) {
  //   const alternateStyles = document.querySelectorAll(".alternate-style");
  //   alternateStyles.forEach((style) => {
  //     if (color === style.getAttribute("title")) {
  //       style.removeAttribute("disabled");
  //     } else {
  //       style.setAttribute("disabled", "true");
  //     }
  //   });
  // };
});

function setActiveTab(tab) {
  activeTab.value = tab;
  showSection(tab);
  updateNav(tab);
}

function showSection(target) {
  allSection.value.forEach((section) => {
    section.classList.remove("active");
    if (section.id === target) {
      section.classList.add("active");
    }
  });
}

function updateNav(target) {
  navList.value.forEach((item) => {
    const link = item.querySelector("a");
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === target) {
      link.classList.add("active");
    }
  });
}

function asideSectionTogglerBtn() {
  const aside = document.querySelector(".aside");
  const navTogglerBtn = document.querySelector(".nav-toggler");
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  allSection.value.forEach(section => {
    section.classList.toggle("open");
  });
}

function toggleDayNight() {
  const dayNightIcon = this.querySelector("i");
  document.body.classList.toggle("dark");
  dayNightIcon.classList.toggle("fa-sun");
  dayNightIcon.classList.toggle("fa-moon");
}
</script>

<template>
  <div class="aside">
    <div class="logo">
      <a href="/">Aldoo</a>
    </div>
    <div class="nav-toggler" @click="toggleNav">
      <span></span>
    </div>
    <ul class="nav">
      <li><a href="#home" :class="{ active: activeTab === 'home' }" @click="setActiveTab('home')"><i
            class="fa fa-home"></i> Home</a></li>
      <li><a href="#about" :class="{ active: activeTab === 'about' }" @click="setActiveTab('about')"><i
            class="fa fa-user"></i> About</a></li>
      <li><a href="#portfolio" :class="{ active: activeTab === 'portfolio' }" @click="setActiveTab('portfolio')"><i
            class="fa fa-briefcase"></i>Portfolio</a></li>
      <li><a href="#contact" :class="{ active: activeTab === 'contact' }" @click="setActiveTab('contact')"><i
            class="fa fa-comments"></i>Contact</a></li>
    </ul>
  </div>

  <div class="style-switcher">
    <!-- <div class="style-switcher-toggler s-icon">
      <i class="fas fa-cog fa-spin"></i>
    </div> -->
    <div class="day-night s-icon">
      <i class="fas "></i>
    </div>
    <!-- <h4>Theme Colors</h4>
    <div class="colors">
      <span class="color-1" onclick="setActiveStyle('color-1')"></span>
      <span class="color-2" onclick="setActiveStyle('color-2')"></span>
      <span class="color-3" onclick="setActiveStyle('color-3')"></span>
      <span class="color-4" onclick="setActiveStyle('color-4')"></span>
      <span class="color-5" onclick="setActiveStyle('color-5')"></span>
    </div> -->
  </div>

  <RouterView />
</template>

<style scoped></style>
