<template>
    <div class="bg-gray-50">
        <section class="bg-white px-6 md:px-6 py-6 mb-10">
            <div class="container mx-auto flex items-center justify-between	">
                <a href="" class="font-bold text-2xl md:text-3xl mr-6">Blog</a>
                <div id="menu" class="md:flex md:space-x-6 hidden md:flex-row flex-col top-20 md:top-0 md:relative absolute left-0 w-full md:w-auto bg-gray-100 border md:border-0 px-6 md:bg-white">
                    <a href="" class="font-semibold text-lg">About</a>
                    <a href="" class="font-semibold text-lg">Contact</a>
                </div>
                <div onclick="toggleMenu()" class="md:hidden flex">
                    <i class="fa-solid fa-bars fs-5xl"></i>
                </div>
            </div>
        </section>
        <div class="container mx-auto">
            
          <section >
            <div class="container">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    
                    <div v-for="item in data" :key="item.id" class="box-s rounded overflow-hidden min-h-[200px] bg-white border ">
                        <div class="flex flex-col p-6 ">
                            <a href="detail.html" class="my-2 text-justify text-xl	md:text-2xl font-bold">
                                {{ item.title }}
                            </a>
                            <p class="text-justify text-sm">
                                {{ item.body }}
                            </p>
                        </div>
                    </div>
    
    
                </div>
                <div class="text-center flex justify-center my-6">
                    <p class="bg-gray-800 cursor-pointer     px-6 py-1 rounded text-white">Load More</p>
                </div>
                
            </div>  
            </section>
        </div>
    </div>
</template>

<script setup>
const {data} = await useFetch('https://jsonplaceholder.typicode.com/posts')
</script>