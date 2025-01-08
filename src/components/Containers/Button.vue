<template>
    <div>
        <button class="bg-transparent text-white p-2 hover:scale-95 border-2">
           {{ text }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'Button_Container',
    props:{
        text:String,
    }
}
</script>
<style scoped>
button{
    border-image: linear-gradient(to right, green, blue) 1;
}
</style>