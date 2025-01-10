<template>
    <div class="w-full h-fit bg-black">
        <span class="flex justify-around items-center p-20">
            <div class="flip-container">
                <div class="flipper">
                    <img ref="animeImage1" alt="Anime" src="../../assets/goku-removebg-preview.png" class="w-80 h-fit pr-10 border-r-2 border-b-2 border-blue-500 overflow-x-auto shadow-2xl shadow-blue-500">
                    <div class="back">
                        <p class="name gradient-text">GOKU</p>
                    </div>
                </div>
            </div>
            <router-link to="/">
                <span class="flex flex-col justify-center gap-10 items-center font-serif font-semibold text-5xl gradient-text hover:scale-110" @mouseover="Text" @mouseout="changeText">
                    <p>{{ text1 }}</p>
                    <p>{{ text2 }}</p>
                    <p>{{ text3 }}</p>
                </span>
            </router-link>
            <div class="flip-container">
                <div class="flipper">
                    <img ref="animeImage2" alt="Anime" src="../../assets/jiren-removebg-preview.png" class="w-72 h-fit pl-10 border-l-2 border-b-2 border-red-500 overflow-x-auto shadow-2xl shadow-red-500">
                    <div class="back">
                        <p class="name gradient-text">JIREN</p>
                    </div>
                </div>
            </div>
        </span>
    </div>
</template>

<script>
import { gsap } from "gsap";

export default {
    name: 'War_Page',
    data(){
        return{
            text1:'TOURNAMENT',
            text2:'OF',
            text3:'POWER',
        }
    },
    methods:{
        Text(){
            this.text1='THIS BATTLE',
            this.text2='WILL BE',
            this.text3='LEGENDARY'
        },
        changeText(){
            this.text1='TOURNAMENT',
            this.text2='OF',
            this.text3='POWER'
        }
    },
    mounted() {
        gsap.from(this.$refs.animeImage1, { duration: 1, x: -200, opacity: 0 });
        gsap.from(this.$refs.animeImage2, { duration: 1, x: 200, opacity: 0 });
    }
}
</script>

<style scoped>
.flip-container {
    perspective: 1000px;
}

.flipper {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.flip-container:hover .flipper {
    transform: rotateY(180deg);
}

.back {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 1); /* Background color for the back */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    transform: rotateY(180deg);
}

.name {
    font-size: 3rem; /* Adjust font size as needed */
}

.gradient-text {
    background: linear-gradient(to right, blue, red);
    -webkit-background-clip: text;
    color: transparent;
}
</style>
