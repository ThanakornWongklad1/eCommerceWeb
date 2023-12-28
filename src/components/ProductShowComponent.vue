<script setup>

const props = defineProps({
    title: String,
    products: Array
})
</script>
 
<template>
    <div class="mx-5 lg:mx-20 mt-5 lg:mt-16">
        <!-- header -->
        <div class="flex justify-between">
            <div class="text-lg lg:text-3xl font-semibold my-auto">{{ title }}</div>
            <button class="my-auto text-sm lg:text-lg">View all &gt;</button>
        </div>
        <hr class="my-3 lg:my-5">
        <!-- content -->
        <div class="grid grid-cols-2 lg:flex lg:justify-center gap-3 ">
            <div v-for="prod in products" class="">
                <div class="shadow-md lg:shadow-xl rounded-lg hover:bg-zinc-100 transition-all w-36 lg:w-96 mx-auto">
                    <img :src="prod.url" :alt="prod.name" class="w-32 lg:w-56 mx-auto">
                    <hr class="mx-5 my-3">
                    <div class="overflow-hidden h-10 lg:h-20 mx-2 lg:mx-5 text-sm lg:text-lg">{{ prod.name }}</div>
                    <div class="flex justify-between mx-2 lg:mx-5 py-2 text-sm lg:text-lg">
                        <div class="">$45</div>
                        <div class="text-primary-700">4.5</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<style scoped></style>