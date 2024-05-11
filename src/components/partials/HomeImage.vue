<template>
    <div class="home-img padd-15">
        <img :src="imageMain" alt="Profile Picture">
    </div>
</template>

<script>
import image from "@/assets/img/main.jpg"

export default {
    data() {
        return {
            imageMain: image
        }
    }
}
</script>