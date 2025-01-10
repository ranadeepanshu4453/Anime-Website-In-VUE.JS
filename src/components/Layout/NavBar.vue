<template>
    <nav class="flex flex-col md:flex-row justify-between bg-black p-3 text-lg text-white w-full">
        <ul class="flex flex-col md:flex-row gap-4 md:gap-16 justify-center items-center ">
            <router-link :to="{name:'login'}"> <p class="text-3xl w-fit rounded-md gradient-text font-mono font-semibold">THINK<sup class="gradient-text">♾️<sup class="gradient-text">♾️</sup></sup></p></router-link><li>
               
            </li>
            <li class="hover:scale-110"><a href="" class="text-green-500">Genre</a></li> 
            <li class="hover:scale-110"><a href="" class="text-blue-500">Popular</a></li> 
            <li class="hover:scale-110"><a href="" class="text-green-500">Events</a></li> 
            <li class="hover:scale-110"><a href="" class="text-blue-500">Shows</a></li> 
            <li class="hover:scale-110"><a href="" class="text-green-500">Character</a></li> 
            <li class="hover:scale-110"><a href="#test" class="text-blue-500">Testing</a></li> 
        </ul>
        <ul id="search" class="flex flex-col md:flex-row gap-4 md:gap-5 justify-between items-center bg-transparent p-2  w-full md:w-96 mt-4 md:mt-0 border-2 text-white">
            <li>
                <input type="search" placeholder="Search" class="bg-transparent border-b-2 border-black focus:outline-none transition duration-300 w-full md:w-auto">
            </li>
            <li class="hover:scale-110">
                <router-link :to="{name:'register'}"><p href="" class="bg-black text-green-100 m-2 hover:text-green-500 transition duration-300">JOIN NOW</p></router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import logo from '../../assets/logo.png';
export default {
    name: 'Nav_Bar',
    data() {
        return {
            logo: logo
        }
    }
}
</script>

<style scoped>
#search{
    border-image: linear-gradient(to right, green, blue) 1;
}
.gradient-text {
    background: linear-gradient(to right,#0000ff , #00ff00);
    -webkit-background-clip: text;
    color: transparent;
}
</style>