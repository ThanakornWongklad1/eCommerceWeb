<script setup>
import logo from '../assets/img/logo.png';
import NavIconVue from './icons/NavIcon.vue';
import BasketIcon from './icons/BasketIcon.vue';
import AccountIcon from './icons/AccountIcon.vue';
import SearchIcon from './icons/SearchIcon.vue';
import { ref } from 'vue';

const isOpenNav = ref(false);
</script>
 
<template>
    <!-- nav bar -->
    <nav class="flex justify-between text-xl my-2 mx-5 lg:mx-20">
        <button @click="isOpenNav = true">
            <NavIconVue class="my-auto lg:hidden" />
        </button>
        <!-- logo -->
        <img :src="logo" alt="logo" class="my-auto hidden lg:block">
        <p class="text-xl text-primary block lg:hidden">Tech Heim</p>
        <div class="hidden lg:flex gap-16 my-auto">
            <button>Home</button>
            <button>Products</button>
            <button>Blog</button>
            <button>FAQ</button>
            <button>Contact Us</button>
        </div>
        <div class="flex gap-3">
            <button>
                <SearchIcon class="hidden lg:block my-auto" />
            </button>
            <button>
                <BasketIcon class="my-auto" />
            </button>
            <button>
                <AccountIcon class="my-auto" />
            </button>
        </div>
    </nav>
    <hr class="hidden lg:block border-primary">
    <div class="lg:hidden mt-4 flex mx-5">
        <input type="text" placeholder="What can we help you to find ?"
            class=" w-11/12 bg-zinc-200 text-zinc-600 rounded-lg px-2 py-1" />
        <SearchIcon class="mx-2" />
    </div>
</template>
 
<style scoped></style>