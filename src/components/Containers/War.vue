<template>
    <div class="w-full h-fit bg-black">
        <span class="flex justify-around items-center">
            <img ref="animeImage1" alt="Anime" src="../../assets/goku-removebg-preview.png" class="w-80 h-fit pr-10 border-r-2 border-green-500 overflow-x-auto shadow-2xl shadow-green-500">
            <span
                class="flex flex-col justify-center gap-10 items-center font-serif font-semibold text-5xl p-24 gradient-text hover:scale-110">
                <p>TOURNAMENT</p>
                <p>OF</p>
                <p>POWER</p>
            </span>

            <img ref="animeImage2" alt="Anime" src="../../assets/jiren-removebg-preview.png" class="w-72 h-fit pl-10 border-l-2 border-blue-500 overflow-x-auto shadow-2xl shadow-blue-500">
        </span>
    </div>
</template>

<script>
import { gsap } from "gsap";

export default {
    name: 'War_Page',
    mounted() {
        gsap.from(this.$refs.animeImage1, { duration: 1, x: -200, opacity: 0 });
        gsap.from(this.$refs.animeImage2, { duration: 1, x: 200, opacity: 0 });
    }
}
</script>