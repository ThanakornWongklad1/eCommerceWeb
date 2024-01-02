<script setup>
import NavbarComponent from '../components/NavbarComponent.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/bundle';
import { ref } from 'vue';
import Accessories from '../assets/img/resource/Accessories.png';
import Camera from '../assets/img/resource/Camera.png';
import Laptop from '../assets/img/resource/Laptop.png';
import SmartPhone from '../assets/img/resource/SmartPhone.png';
import Gaming from '../assets/img/resource/Gaming.png';
import SmartWatch from '../assets/img/resource/SmartWatch.png';

import ProductShowComponent from '@/components/ProductShowComponent.vue';
import FooterComponent from '../components/FooterComponent.vue'

const images = [
    {
        url: Accessories,
        name: 'Accessories'
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

    <!-- ads -->
    <div class="mt-6 lg:mt-20 flex-col lg:flex lg:flex-row lg:justify-center mx-5 lg:mx-20">
        <div class="w-full lg:w-6/12 lg:mx-7 bg-gradient-to-tl from-linear-green to-linear-blue 
        flex justify-around rounded-lg lg:rounded-lg">
            <div class="ml-3 lg:ml-10 mt-3 lg:mt-5 w-5/12 grid content-between lg:content-around">
                <div class="font-semibold text-lg lg:text-3xl">Iphone <span class="text-white">15 Series</span></div>
                <img src="../assets/img/iphone15.png" alt="iphone15" class="w-36 lg:w-80">
            </div>
            <div class="my-3 lg:mt-16 w-7/12">
                <div class="flex justify-center">
                    <div class="border border-black rounded-md mx-1 lg:mx-2 text-center w-8 lg:w-16 text-xs lg:text-xl">
                        <div class="font-semibold">8</div>
                        <div>Days</div>
                    </div>
                    <div class="border border-black rounded-md mx-1 lg:mx-2 text-center w-8 lg:w-16 text-xs lg:text-xl">
                        <div class="font-semibold">8</div>
                        <div>hour</div>
                    </div>
                    <div class="border border-black rounded-md mx-1 lg:mx-2 text-center w-8 lg:w-16 text-xs lg:text-xl">
                        <div class="font-semibold">8</div>
                        <div>min</div>
                    </div>
                    <div class="border border-black rounded-md mx-1 lg:mx-2 text-center w-8 lg:w-16 text-xs lg:text-xl">
                        <div class="font-semibold">8</div>
                        <div>sec</div>
                    </div>
                </div>
                <div class="flex justify-center font-semibold text-xs lg:text-2xl mt-5 mx-3">It feel good to be the first
                </div>
                <div class="flex justify-center font-thin text-xs lg:text-xl mx-3 lg:mx-20">
                    Get ready for the future of smartphones.Experience innovation like never
                    before. Stay tuned for the big iPhone 15 sale.
                </div>
                <div class="flex justify-center">
                    <button
                        class="bg-primary text-white rounded w-full lg:w-auto mx-5 p-2 px-5 mt-2 lg:my-5 font-light text-sm lg:text-xl">
                        Register Now
                    </button>
                </div>
            </div>
        </div>
        <div class="w-full mt-5 lg:mt-0 lg:w-5/12 lg:mx-7 bg-primary-600 rounded-lg relative overflow-hidden">
            <div class="bg-secondary-300 absolute h-16 lg:h-40 w-20 lg:w-40 rounded-br-full"></div>
            <div class="bg-secondary-300 absolute h-150 w-150 rounded-t-full top-20 lg:top-32 -left-96 lg:-left-44 z-0">
            </div>
            <div class="flex-col text-secondary-300 font-semibold text-lg lg:text-3xl text-center pt-3 lg:pt-10">
                Play Station 5
            </div>
            <div class="flex justify-between">
                <div class="text-primary-600 text-md lg:text-2xl mx-5 lg:mx-28 mt-16 lg:mt-40 z-10">
                    Digital Edition + 2TB
                </div>
                <img src="../assets/img/ps5.png" alt="PS5" class="w-32 lg:w-64 mt-3 mr-5 z-10">
            </div>
            <button
                class="bg-primary relative text-white rounded-lg lg:w-auto mx-5 lg:mx-32 py-2 px-5 my-5 lg:my-5 font-light text-sm lg:text-xl">
                Buy Now
            </button>
        </div>
    </div>

    <ProductShowComponent title="Best Sellers" :products="newProducts" class="mb-5 lg:mb-20" />

    <!-- footer -->
    <FooterComponent />
</template>
 
<style scoped></style>