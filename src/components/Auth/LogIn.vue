<template>
    <div class="flex flex-col items-center justify-center h-screen bg-slate-300">
    <p class="text-3xl font-serif font-semibold text-center pt-10">Log In</p>
    <input type="email" placeholder="Email" class="p-2 m-2 w-96 border-2  focus:outline-none" v-model="email" />
    <input type="password" placeholder="Password" class="p-2 m-2 w-96 border-2 focus:outline-none" v-model="password" />
    <button class="p-3 bg-black text-white hover:bg-gradient-to-r from-green-400 to-blue-500 transition duration-300 w-36" v-on:click="Credentials()">Log In</button>
    </div>
</template>

<script>
export default {
    name: 'LogIn',
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        Credentials(){
            console.warn('Email:', this.email, 'Password:', this.password);
        }
    }
}
</script>
<style scoped>
input{
    border-image: linear-gradient(to right, green, blue) 1;
}
</style>