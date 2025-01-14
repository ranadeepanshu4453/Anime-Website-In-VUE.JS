<template>
    <div>
<h1>Sending Data</h1>
    </div>
</template>

<script>
export default {
    name: 'Testing_Page',
    data(){
        return {
            text:'This Data is From Child to Parent'
        }
    },
    props:{

    },
    methods:{
        getData(){
            return this.text
        }

    }
}
</script>