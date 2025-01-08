<template>
  <Layout_Page />
  <span class="flex flex-row justify-end bg-black">
    <div class="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-56 md:left-96" ref="welcomeText">
      <p class="gradient-text text-3xl md:text-5xl font-bold mb-2 font-serif">Welcome To Anime World</p>
      <a href="#footer"><p class="text-base md:text-lg text-slate-400 hover:scale-105">Let's Enter into a New World ➤</p></a>
    </div>
    <img alt="Kakashi Anime" src="./assets/12-removebg-preview.png" class="w-full md:w-auto" ref="animeImage">
  </span>
  <span id="footer"><Home /> </span>
  <span id="test"><DivContainer text="Explore More ➤" :details="details" :getHeading="getDetails" /></span> 
  <Carousel_Page />
  <War_Page />
  <Footer_Page />
</template>

<script>
import { gsap } from 'gsap';
import Home from './components/Home.vue';
import Layout_Page from './components/Layout/Layout.vue';
import Footer_Page from './components/Layout/Footer.vue';
import DivContainer from './components/Containers/DivContainer.vue';
import Carousel_Page from './components/Containers/carousel.vue';
import War_Page from './components/Containers/War.vue';

export default {
  name: 'App',
  components: {
    Home,
    Layout_Page,
    Footer_Page,
    DivContainer,
    Carousel_Page,
    War_Page,
  },
  data() {
    return {
      details: {
        name: 'Anime World',
        Task: 'Learn Vue 3',
      },
    };
  },
  methods: {
    getDetails() {
      return this.name + ' ' + this.Task;
    },
  },
  mounted() {
    gsap.from(this.$refs.welcomeText, { opacity: 0, y: -50, duration: 1 });
    gsap.from(this.$refs.animeImage, { opacity: 0, x: 100, duration: 1 });
  },
};
</script>

<style>
.gradient-text {
  background: linear-gradient(to right, #00ff00, #0000ff);
  -webkit-background-clip: text;
  color: transparent;
}
</style>