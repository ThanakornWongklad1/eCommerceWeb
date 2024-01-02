<script setup>
import { ref } from 'vue';


const isOpenCompany = ref(false)
const isOpenInfo = ref(false)
const isOpenContact = ref(false)
</script>
 
<template>
    <!-- mobile -->
    <div class="bg-primary-900 w-full text-white flex-col px-5 lg:hidden">
        <div class="flex justify-between py-5 text-black">
            <button class="bg-primary-50 px-4 py-2 rounded-full">1</button>
            <a href="#" class="bg-primary-50 px-4 py-2 rounded-full">^</a>
        </div>
        <div>Sign up for News and updates</div>
        <input type="text" class=" border-2 p-1 w-full my-5 border-white bg-primary-900 rounded-lg"
            placeholder="E-mail Address">
        <div class="flex justify-between hover:cursor-pointer py-2"
            @click="isOpenCompany = !isOpenCompany, isOpenInfo = false, isOpenContact = false">
            <div>Company</div>
            <div>&gt;</div>
        </div>
        <div v-if="isOpenCompany" class="flex-col mx-5 text-zinc-400">
            <div>about us</div>
            <div>blog</div>
            <div>returns</div>
            <div>order status</div>
        </div>
        <div class="flex justify-between hover:cursor-pointer py-2"
            @click="isOpenInfo = !isOpenInfo, isOpenCompany = false, isOpenContact = false">
            <div>Info</div>
            <div>&gt;</div>
        </div>
        <div v-if="isOpenInfo" class="flex-col mx-5 text-zinc-400">
            <div>How it works?</div>
            <div>our promises</div>
            <div>FAQ</div>
        </div>
        <div class="flex justify-between hover:cursor-pointer py-2"
            @click="isOpenContact = !isOpenContact, isOpenInfo = false, isOpenCompany = false">
            <div>Contact Us</div>
            <div>&gt;</div>
        </div>
        <div v-if="isOpenContact" class="flex-col mx-5 text-zinc-400">
            <div>123 Main Street, Anytown,USA</div>
            <div>+1 (555) 123-4567</div>
            <div>TechHeimSupport@gmail.com</div>
        </div>
    </div>

    <!-- desktop -->
    <div class="hidden lg:flex justify-between bg-primary-900 w-full text-white px-20 pt-6">
        <div class="flex">
            <div class="flex-col mr-52">
                <div class="text-2xl py-2">Company</div>
                <div class="text-lg text-zinc-400 py-1">about us</div>
                <div class="text-lg text-zinc-400 py-1">blog</div>
                <div class="text-lg text-zinc-400 py-1">returns</div>
                <div class="text-lg text-zinc-400 py-1">order status</div>
            </div>
            <div class="flex-col mr-52">
                <div class="text-2xl py-2">Info</div>
                <div class="text-lg text-zinc-400 py-1">How it works?</div>
                <div class="text-lg text-zinc-400 py-1">our promises</div>
                <div class="text-lg text-zinc-400 py-1">FAQ</div>
            </div>
            <div class="flex-col mr-52">
                <div class="text-2xl py-2">Contact Us</div>
                <div class="text-lg text-zinc-400 py-1">123 Main Street, Anytown,USA</div>
                <div class="text-lg text-zinc-400 py-1">+1 (555) 123-4567</div>
                <div class="text-lg text-zinc-400 py-1">TechHeimSupport@gmail.com</div>
            </div>
        </div>
        <div class="flex-col">
            <div class="text-2xl">Sign up for News and updates</div>
            <input type="text" class=" border-2 p-1 w-full my-5 border-white bg-primary-900 rounded-lg"
                placeholder="E-mail Address">
        </div>
        <div class="flex flex-col h-full text-black">
            <button class="bg-primary-50 px-4 py-2 rounded-full">1</button>
            <a href="#" class="bg-primary-50 px-4 py-2 rounded-full mt-24">^</a>
        </div>

    </div>
    <div class="hidden lg:flex bg-primary-900 w-full text-white justify-between py-5">
        <div class="ml-20">2023 Tech Heim</div>
        <div class="flex mr-20">
            <div class="mx-3">cookie setting</div>
            <div class="mx-3">Privacy Policy</div>
            <div class="mx-3">Terms and Conditions</div>
            <div class="mx-3">Imprint</div>
        </div>
    </div>
</template>
 
<style scoped></style>