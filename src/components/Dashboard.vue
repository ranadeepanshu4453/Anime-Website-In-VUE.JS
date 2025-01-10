<template>
    <div class="bg-black p-3 flex flex-col md:flex-row justify-between">
        <router-link :to="{ name: 'home' }">
            <p class="top-text text-5xl"><svg class="w-12 h-12 text-white hover:scale-105 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none"><path d="M4.66015 15L4.65169 14.9999H3.64062C2.18225 14.9999 1 13.817 1 12.3578C1 11.6886 1.25381 11.0443 1.71018 10.5551L2.50784 9.69997C3.05141 9.11725 3.23297 8.28376 2.98105 7.52756C2.8743 7.20712 2.69445 6.91595 2.45573 6.67712L1.67311 5.89409C1.47795 5.69883 1.47794 5.38225 1.67309 5.18698C1.86824 4.99172 2.18464 4.99171 2.3798 5.18697L3.16243 5.97C3.51086 6.31861 3.77339 6.74361 3.92921 7.21134C4.29692 8.31512 4.03191 9.53172 3.23849 10.3823L2.44083 11.2374C2.15719 11.5415 1.99944 11.9419 1.99944 12.3578C1.99944 13.2647 2.73422 13.9999 3.64062 13.9999H4.14414C4.14169 13.7957 4.14274 13.5404 4.15248 13.2481C4.17781 12.4878 4.2623 11.4646 4.50271 10.4337C4.74168 9.40897 5.14398 8.33552 5.83176 7.50972C6.44488 6.77357 7.27775 6.24515 8.37429 6.122V3.18649C8.37429 1.97892 9.35267 1 10.5596 1C11.0683 1 11.4807 1.41262 11.4807 1.92162V2.40541H12.6572C13.3162 2.40541 13.9284 2.74634 14.2757 3.30678L14.7111 4.00948C15.4721 5.23751 14.6429 6.81259 13.2364 6.91378V13.4459C13.2364 14.3042 12.5411 15 11.6833 15H11.1295V13.446C11.1295 12.0056 9.96247 10.8379 8.52286 10.8379H7.64497C7.36898 10.8379 7.14525 11.0617 7.14525 11.3379C7.14525 11.614 7.36898 11.8379 7.64497 11.8379H8.52286C9.41049 11.8379 10.1301 12.5579 10.1301 13.446V15H4.66015Z" fill="currentColor"></path></svg></p>
        </router-link>
        <span class="text-white text-2xl mt-3 md:mt-0">
            <ul class="flex flex-col md:flex-row gap-3 md:gap-10">
                <li class="hover:scale-105 hover:text-red-500">HomePage</li>
                <li class="hover:scale-105 hover:text-red-500">Categories</li>
                <li class="hover:scale-105 hover:text-red-500">Our Blog</li>
                <li class="hover:scale-105 hover:text-red-500">Contact Us</li>
            </ul>
        </span>
        <span class="text-white text-2xl mt-3 md:mt-0">
            <ul class="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
                <li><input type="search" name="" id="" placeholder="Search"
                        class="bg-transparent border-b-2 border-red-500 text-white placeholder-red-500 focus:outline-none">
                </li>
                <li><svg class="w-8 h-8 text-red-500" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></li>
            </ul>
        </span>
    </div>
    <div class="p-10 flex flex-col justify-center items-center gap-5 bg-black">
        <div class="relative">
            <img src="../assets/death-note.jpg" alt=""
                class="w-full md:w-auto h-auto border-2 border-slate-600 rounded-lg">
            <div class="absolute bottom-0 right-0 mb-2 mr-2">
                <button class="text-white m-3 p-2 text-2xl bg-red-500 rounded-md hover:scale-95">Watch Now</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard_Page",
}
</script>

<style scoped>
.top-text {
    font-family: cursive;
    background: linear-gradient(to right, white, red);
    -webkit-background-clip: text;
    color: transparent;
}

@media (max-width: 768px) {
    .top-text {
        text-align: center;
    }
}
</style>