<script setup>
import NavbarComponent from '../components/NavbarComponent.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/bundle';
import { ref } from 'vue';
import Accessorires from '../assets/img/resource/Accessories.png';
import Camera from '../assets/img/resource/Camera.png';
import Laptop from '../assets/img/resource/Laptop.png';
import SmartPhone from '../assets/img/resource/SmartPhone.png';
import Gaming from '../assets/img/resource/Gaming.png';
import SmartWatch from '../assets/img/resource/SmartWatch.png';

import ProductShowComponent from '@/components/ProductShowComponent.vue';

const images = [
    {
        url: Accessorires,
        name: 'Accessorires'
    },
    {
        url: Camera,
        name: 'Camera'
    },
    {
        url: Laptop,
        name: 'Laptop'
    },
    {
        url: SmartPhone,
        name: 'SmartPhone'
    },
    {
        url: Gaming,
        name: 'Gaming'
    },
    {
        url: SmartWatch,
        name: 'SmartWatch'
    },
]

const newProducts = [
    {
        url: Camera,
        name: 'Sony Cyber-shot RX100 VII'
    },
    {
        url: Laptop,
        name: 'Blackmagic Design Pocket Cinema Camera 6K Pro (Canon EF)'
    },
    {
        url: SmartPhone,
        name: 'Iphone 14 promax 256 gig'
    },
    {
        url: SmartWatch,
        name: 'Apple Watch Series 7 (GPS, 41MM)'
    },
]

</script>
 
<template>
    <NavbarComponent />
    <!-- banner 1 -->
    <div class="flex justify-between mx-5 lg:mx-20">
        <div class="flex-col text-primary-700 mt-10">
            <div class="font-semibold text-xl lg:text-7xl">Tech Heim</div>
            <div class="font-semibold text-xs lg:text-3xl mt-3 lg:mt-20">"Join the <span class="text-secondary">digital
                    revolution</span>"</div>
            <button class="bg-secondary rounded-md text-xs lg:text-lg text-white py-2 px-3 lg:px-20 mt-6 lg:mt-20">Explore
                More</button>
        </div>
        <div class="mx-auto mt-10 lg:mt-0">
            <img src="../assets/img/DesktopPic.png" class="w-48 lg:w-full">
        </div>
    </div>
    <!-- categoryy -->
    <!-- for mobile -->
    <div class=" ml-5 lg:hidden">
        <swiper :slidesPerView="3.5" :spaceBetween="5" :mousewheel="true" :freeMode="true" class="mySwiper">
            <swiper-slide v-for="img in images" class="py-5">
                <div class="py-2 px-5 flex-col shadow-lg rounded-md hover:bg-zinc-100">
                    <img :src="img.url" class="mx-auto">
                    <div class="text-xs text-center">{{ img.name }}</div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
    <!-- for desktop -->
    <div class="hidden lg:flex justify-between gap-5 mx-20">
        <div v-for="img in images">
            <div class="py-2 px-5 flex-col shadow-lg rounded-xl hover:bg-zinc-100">
                <img :src="img.url" class="mx-auto w-56">
                <div class="text-center">{{ img.name }}</div>
            </div>
        </div>
    </div>

    <!-- product on sale -->
    <div class="bg-primary-500 mx-4 lg:mx-20 mt-5 lg:mt-20 h-48 lg:h-80 rounded-lg w-11/12 flex">
        <div class="flex-col w-1/2 lg:w-1/6">
            <img src="../assets/img/shape.png" alt="shape" class="w-6/12 lg:w-1/6 absolute">
            <div class="text-white text-md lg:text-2xl ml-3 lg:ml-5 pt-5 lg:pt-12">Products On Sale</div>
            <div class="text-white text-xs lg:text-xl ml-6 lg:ml-12 font-light">Shop Now!</div>
            <div class="text-white text-xs lg:text-xl ml-6 lg:ml-5 mt-20 lg:mt-28">view all &gt;</div>
        </div>
        <div class="lg:hidden overflow-hidden my-auto w-1/2">
            <swiper :slidesPerView="1.3" :spaceBetween="10" :mousewheel="true" class="mySwiper">
                <swiper-slide v-for="img in images" class="w-20">
                    <div class="flex-col shadow-lg rounded-lg bg-white">
                        <div class="absolute bg-secondary-100 text-secondary rounded-r-lg px-2 py-1 mt-2 text-xs">-50%</div>
                        <img :src="img.url" class="mx-auto w-24">
                        <div class="text-center overflow-hidden pt-2">{{ img.name }}</div>
                        <div class="flex justify-between mx-5 pb-2">
                            <div class="text-zinc-400 line-through">$90</div>
                            <div class="">$45</div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="hidden lg:block overflow-hidden my-auto w-5/6">
            <swiper :slidesPerView="5.5" :spaceBetween="20" :mousewheel="true" class="mySwiper">
                <swiper-slide v-for="img in images" class="w-20">
                    <div class="flex-col shadow-lg rounded-lg bg-white">
                        <div class="absolute bg-secondary-100 text-secondary rounded-r-lg px-2 mt-4">-50%</div>
                        <img :src="img.url" class="mx-auto w-52">
                        <div class="mx-10 overflow-hidden">{{ img.name }}</div>
                        <div class="flex justify-between mx-10 pb-2">
                            <div class="text-zinc-400 line-through">$90</div>
                            <div class="">$45</div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <!-- new products -->
    <ProductShowComponent title="New Products" :products="newProducts" />
    <ProductShowComponent title="Best Sellers" :products="newProducts" />
</template>
 
<style scoped></style>