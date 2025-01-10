<template>
    <div class="bg-black p-5 text-green-500 flex flex-col gap-5 border-t-2 grad">
        <p class="text-5xl w-fit p-1 rounded-md gradient-text">THINK<sup class="gradient-text">♾️<sup class="gradient-text">♾️</sup></sup></p>
        <div class="flex flex-col md:flex-row gap-5 justify-between">
            <span>
                <p>Watch Anime Think Out Of the Box.<br> Let's Go Beyond Your Boundaries</p>
            </span>
            <span class="flex flex-col gap-3">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing<br> elit. Explicabo laudantium est non officia
                    numquam</p>
                <span class="flex flex-col sm:flex-row justify-between text-center text-blue-900">
                    <input type="text" name="" id="" placeholder="YOUR E-MAIL"
                        class="p-2 mb-2 sm:mb-0 bg-green-200 bg-gradient-to-r from-green-200 to-blue-200 bg-clip-border">
                    <Button_Container text="Subscribe" />
                </span>
            </span>
            <span class="flex flex-col gap-3">
                <p>FOLLOW US</p>
                <span class="flex flex-row gap-5">
                    <svg class="w-8 h-8 hover:scale-110 hover:text-blue-600" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                            d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z">
                        </path>
                    </svg>
                    <svg class="w-7 h-7 hover:scale-110 hover:text-blue-600" xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951">
                        </path>
                    </svg>
                    <svg class="w-7 h-7 hover:scale-110 hover:text-blue-600" xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z">
                        </path>
                    </svg>
                </span>
            </span>
            <span class="flex flex-col gap-3">
                <p>CALL US</p>
                <a href="tel:+918989975643" class="text-green-500 hover:text-blue-600">+91 8989975643</a>
            </span>
        </div>

        <div class="flex justify-center"><hr class="border-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 w-1/2"></div>
        <span class="flex flex-col md:flex-row justify-around text-center text-sm">
            <p>&copy; 2025 Think32. Rana Software Agency Uttar Pradesh, INDIA. All Rights Reserved.</p>
            <span class="flex flex-col md:flex-row gap-5">
                <p><a href="#" class="hover:underline">Privacy Policy</a></p>
                <p><a href="#" class="hover:underline">Terms and Conditions</a></p>
            </span>
        </span>
    </div>
</template>

<script>
import Button_Container from '../Containers/Button.vue';
export default {
    name: 'Footer_Page',
    components:{
        Button_Container,
    }
}
</script>

<style scoped>
.gradient-text {
    background: linear-gradient(to right,#0000ff , #00ff00);
    -webkit-background-clip: text;
    color: transparent;
}
.grad{
    border-image: linear-gradient(to right, blue, red) 1;
}
</style>




