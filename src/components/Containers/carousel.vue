<template>
    <div class="flex justify-around bg-black">
        <Card_Container >
            <img ref="animeImage" alt="Anime" src="../../assets/a1.png" class="w-fit h-52">
            <span class="flex flex-col text-center">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, itaque!</p>
                <p>nulla exercitationem veniam, modi aperiam cum sed vero autem rem explicabo aliquam, commodi cupiditate doloremque. Voluptatum harum minima sunt libero dicta. Minima, veritatis dolorem qui vitae ipsa cumque quibusdam enim.</p>
            </span>
        </Card_Container>
        <Card_Container >
            <img ref="animeImage" alt="Anime" src="../../assets/131.png" class="w-fit h-52">
            <span class="flex flex-col text-center">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, itaque!</p>
                <p>nulla exercitationem veniam, modi aperiam cum sed vero autem rem explicabo aliquam, commodi cupiditate doloremque. Voluptatum harum minima sunt libero dicta. Minima, veritatis dolorem qui vitae ipsa cumque quibusdam enim.</p>
            </span>
        </Card_Container>
        <Card_Container >
            <img ref="animeImage" alt="Anime" src="../../assets/a3.png" class="w-fit h-52">
            <span class="flex flex-col text-center">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, itaque!</p>
                <p>nulla exercitationem veniam, modi aperiam cum sed vero autem rem explicabo aliquam, commodi cupiditate doloremque. Voluptatum harum minima sunt libero dicta. Minima, veritatis dolorem qui vitae ipsa cumque quibusdam enim.</p>
            </span>
        </Card_Container>
    </div>
</template>
<script>
import Card_Container from './Card.vue';
export default {
    name: 'Carousel_Page',
    components: {
        Card_Container,
    },
}
</script>