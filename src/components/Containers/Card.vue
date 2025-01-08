<template>
    <div class="card bg-black text-slate-300 p-6 m-4 w-96 h-fit rounded-3xl flex flex-col justify-center items-center gap-6 hover:scale-105 transition-transform duration-300 ease-in-out transform hover:rotate-2 border-2">
       <slot></slot>
    </div>
</template>
<script>
export default{
    name: 'Card_Container',
    props:{
        img:String,
    }
}
</script>
<style scoped>
.card{
    border-image: linear-gradient(to right, green, blue) 1;
}
</style>