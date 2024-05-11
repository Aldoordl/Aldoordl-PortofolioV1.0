<template>
    <div class="container">
        <div class="row">
            <div class="home-info padd-15">
                <h3 class="hello">Helloo, I'm <span class="name">AldooRdl</span> 👋</h3>
                <h3 class="my-profession">I am a <span class="typing">Web Developer</span></h3>
                <p>I enjoy exploring new experiences and expanding my knowledge in programming. In addition to my core
                    skills, I also have some experience in mobile and backend development.</p>
                <a class="btn">Holaa 👋</a>
            </div>
            <home-image></home-image>
        </div>
    </div>
</template>

<script setup>
import HomeImage from '../components/partials/HomeImage.vue';
import { onMounted } from 'vue';
import Typed from 'typed.js';

onMounted(() => {
    // Initialize Typed.js after the component is mounted
    new Typed('.typing', {
        strings: ["", "Frontend Developer", "UI-UX Designer", "Student", "Gamer", "Creative Director", "Public Speaker"],
        typeSpeed: 100,
        BakSpeed: 60,
        loop: true
    });
});
</script>
