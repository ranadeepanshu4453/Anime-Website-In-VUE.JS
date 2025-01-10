<template>
    <span class="absolute right-5 m-9">
        <svg class="w-8 h-8 hover:scale-110 cursor-pointer text-black" v-on:click="ChangeClass" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill="currentColor"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                fill="currentColor"></path>
        </svg>
    </span>
    <div class="h-screen flex flex-col justify-center items-center p-4 bg-slate-50" :class="{bright:changeClass}">
        <div class="bg-transparent flex flex-col md:flex-row h-auto md:h-96 rounded-lg w-full max-w-4xl">
            <div class="flex flex-col items-center justify-center gap-3 w-full md:w-1/2 p-4">
                <p class="text-3xl font-serif font-semibold text-center pt-4 md:pt-10">Register</p>
                <input type="text" placeholder="Enter Name"
                    class="bg-transparent border-b-2 border-black p-2 m-2 w-full md:w-96 focus:outline-none"
                    v-model="email" />
                    <input type="email" placeholder="Enter Email"
                    class="bg-transparent border-b-2 border-black p-2 m-2 w-full md:w-96 focus:outline-none"
                    v-model="email" />
                    <span class="flex justify-between">
                         <input type="password" placeholder="Enter Password"
                    class="bg-transparent border-b-2 border-black p-2 m-2 focus:outline-none"
                    v-model="password" />
                    <input type="password" placeholder="Confirm Password"
                    class="bg-transparent border-b-2 border-black p-2 m-2 focus:outline-none"
                    v-model="password" />
                    </span>
               
                <button class="p-3 bg-black text-white hover:scale-95 w-36" v-on:click="Credentials()">Register</button>
                <p>Already have an account? <router-link :to="{ name: 'login' }" class="text-blue-500 no-underline">Log In</router-link></p>
                <div class="flex gap-6 justify-center items-center mt-4">
                    <svg class="w-6 h-6 hover:scale-110 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16"
                        height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951">
                        </path>
                    </svg>
                    <svg class="w-7 h-7 hover:scale-110 cursor-pointer" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <g fill="none">
                            <path fill="currentColor" fill-opacity=".25" fill-rule="evenodd"
                                d="M4.172 4.172C3 5.343 3 7.229 3 11v2c0 3.771 0 5.657 1.172 6.828C5.343 21 7.229 21 11 21h2c3.771 0 5.657 0 6.828-1.172C21 18.657 21 16.771 21 13v-2c0-3.771 0-5.657-1.172-6.828C18.657 3 16.771 3 13 3h-2C7.229 3 5.343 3 4.172 4.172M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                                clip-rule="evenodd"></path>
                            <path stroke="currentColor" stroke-width="1.2"
                                d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13z">
                            </path>
                            <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"></circle>
                            <circle cx="12" cy="12" r="3.4" stroke="currentColor" stroke-width="1.2"></circle>
                        </g>
                    </svg>
                    <svg class="w-6 h-6 hover:scale-110 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16"
                        height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z">
                        </path>
                    </svg>
                    <svg class="w-7 h-7 hover:scale-110 cursor-pointer" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512">
                        <path
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                        </path>
                    </svg>
                </div>
            </div>
            <div class="bg-gray-900 md:w-1/2 h-48 md:h-full rounded-l-full p-5 flex justify-center items-center">
                <router-link :to="{ name: 'home' }"><img ref="animeImage1" alt="Anime" src="../../assets/a1.png"
                        class="h-32 md:h-96 p-2 md:p-10 rounded-r-full"></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Register_Page',
    date(){
        return{
            email: '',
            password: '',
            changeClass:false,
        }
    },
    methods:{
        Credentials() {
            console.warn('Email:', this.email, 'Password:', this.password);
        },
        ChangeClass(){
            this.changeClass = !this.changeClass
        }
    }
}
</script>


<style scoped>
.gradient {
    border-image: linear-gradient(to right, green, blue) 1;
}
.bright{
    background-color: black;
}
.bright > div{
    background-color: aliceblue;
}
</style>