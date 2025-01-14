<template>
    <div class="p-2 bg-black text-slate-400 text-center cursor-pointer" v-on:click="changeStatus()">
       {{ text }}</div>
    <div class="h-full bg-slate-300" v-if="!status">
        <p class="text-3xl font-serif font-semibold text-center pt-10">{{ Heading1 }}</p>
        <p class="text-xl font-serif text-center pt-5">{{ details.name + ' '}}{{ details.Task }}</p>
        <p class="text-xl font-serif text-center pt-5">{{ description1 }}</p>
        <p class="text-xl font-serif text-center pt-5">{{ getDetails() }}</p>
        <p class="text-xl font-serif text-center pt-5">{{ getData().heading }}</p>
        <p class="text-xl font-serif text-center pt-5">{{ getData().description }}</p>
        <center><button class="p-2 bg-white hover:scale-95 text-center m-2" v-on:click="check('Clicked')">Click
                here</button></center>
        <center><button class="p-2 bg-white hover:scale-95 text-center" v-on:dblclick="check('Double Clicked')">double
                Click here</button></center>
        <p class="text-xl font-serif text-center pt-5" v-on:mouseover="mouseOver()">Open Console to check Mouse Over
            alerts</p>
        <div class="flex justify-center gap-10"><button class="p-2 bg-white hover:scale-95 text-center"
                v-on:click="increment()">increment</button>
            <p class="p-2 bg-white">{{ count }}</p><button class="p-2 bg-white hover:scale-95 text-center"
                v-on:click="decrement()">decrement</button>
        </div>
        <div class="flex justify-center m-2 text-center"><input type="text" name="" id="" placeholder="Make Increment"
                v-model="count"></div>
        <div class="flex flex-col justify-center gap-5 items-center">
            <span class="flex justify-center gap-10">
                <span class="flex justify-center gap-2">
                    <label for="javascript">JavaScript</label>
                    <input type="checkbox" id="javascript" v-model="technologies" value="JavaScript">
                </span>
                <span class="flex justify-center gap-2">
                    <label for="php">PHP</label>
                    <input type="checkbox" id="php" v-model="technologies" value="PHP">
                </span>
                <span class="flex justify-center gap-2">
                    <label for="python">Python</label>
                    <input type="checkbox" id="python" v-model="technologies" value="Python">
                </span>
            </span>
            <p>Selected Technologies are :: <b class="text-red-800">{{ technologies }}</b></p>
        </div>
        <div class="flex flex-col justify-center gap-5 items-center">
            <p>Who I Am ?? <b class="text-red-700">{{ profile }}</b></p>
            <span class="flex justify-center gap-3">
                <label for="student">Student</label> <input type="radio" id="student" name="who" value="student"
                    v-model="profile">
                <label for="developer">Developer</label> <input type="radio" name="who" id="developer" value="developer"
                    v-model="profile">
            </span>
        </div>
        <span class="flex gap-5 justify-center mt-7">
            Traversing Array -><li v-for="item in arr" :key='item'>{{ item }}</li>
        </span>
        <span class="flex flex-col gap-5 justify-center items-center mt-7">
            Traversing Array of objects -><li v-for="item in arr1" :key='item'>{{'Name ->'+item.name }} {{ 'Email ->'+item.email }}</li>
        </span>
        <span v-html="tag" class="flex flex-col gap-5 justify-center items-center mt-7"></span>
       <div class="flex justify-center gap-5 items-center"><span :class="{testing:checkStatus}" class="p-2">Testing for Class Binding</span><button v-on:click="checkStatus = !checkStatus" class="border-2 p-2 bg-slate-400">Click to change class</button></div>
        <Testing_Page />
    </div>
</template>

<script>
import Testing_Page from './Testing.vue';
export default {
    name: 'DivContainer',
    props:{
        text:String,
        details:Object,
        getHeading:Function,
    },
    data() {
        return {
            Heading1: 'This is testing section for Data Interpolation',
            description1: 'loreum ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium est non officia numquam loreum ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium est non officia numquam',
            getDetails: function () {
                return this.Heading1 + ' ' + this.description1;
            },
            count: 0,
            technologies: [],
            profile: '',
            status: true,
            arr: ['first', 'second', 'third', 'fourth', 'fifth'],
            arr1: [{
                name: 'first',
                email: 'abc@gmail.com',
            },
            {
                name: 'second',
                email: 'def@gmail.com',
            },
            {
                name: 'third',
                email: 'ghi@gmail.com',
            }, {
                name: 'fourth',
                email: 'xyz@gmail.com',
            }],
            tag:"<h2><b>Testing for Tags</b></h2>",
            checkStatus:true,
        }
    },
    methods: {
        getData() {
            return {
                heading: this.Heading1,
                description: this.description1,
            }
        },
        check(data) {
            alert(data);
        },
        mouseOver() {
            console.warn('Mouse Over Event called');
        },
        increment() {
            return this.count++;
        },
        decrement() {
            return this.count--;
        },
        changeStatus() {
            this.status = !this.status;
        }
    },
    components:{
        Testing_Page,
    }

}
</script>
<style scoped>
.testing{
    background-color: blue;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>