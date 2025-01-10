<template>
    <div class="w-full h-full flex flex-col md:flex-row items-center justify-center bg-black md:gap-56">
        <img ref="animeImage" alt="Anime" src="../assets/a2.png" class="w-48 md:w-96 mb-4 md:mb-0 md:mr-4">
        <div ref="textContainer" class="text-center md:text-left">
            <p class="gradient-text text-3xl md:text-5xl font-semibold font-serif mb-6">Do You Know Who I Am?</p>
            <p class="text-base md:text-xl font-serif mt-2 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p class="text-base md:text-xl font-serif mt-2 text-slate-400">Similique maiores architecto eum recusandae reiciendis ea ullam.</p>
            <p class="text-base md:text-xl font-serif mt-2 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap";

export default {
    name: 'Home_Page',
    mounted() {
        gsap.from(this.$refs.animeImage, { duration: 1, opacity: 0, x: -100 });
        gsap.from(this.$refs.textContainer, { duration: 1, opacity: 0, y: 100, delay: 0.5 });
    }
}
</script>

<style scoped>
.gradient-text {
    background: linear-gradient(to right,#0000ff , #00ff00);
    -webkit-background-clip: text;
    color: transparent;
}
</style>
