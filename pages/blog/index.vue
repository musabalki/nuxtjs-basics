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
                    
                    <div v-for="item in posts" :key="item.id" class="box-s flex flex-col justify-between items-start rounded overflow-hidden min-h-[200px] bg-white border ">
                        <div class="flex flex-col justify-between  p-6 h-full">
                            <div class="flex flex-col">
                                <a href="detail.html" class="my-2 text-justify text-xl	md:text-2xl font-bold">
                                    {{ item.title }}
                                </a>
                                <p class="text-justify text-sm flex-1">
                                    {{ item.body }}
                                </p>
                            </div>
                            <NuxtLink :to="'/blog/'+item.id" class="px-4 py-2 bg-indigo-400 rounded mt-4 inline text-center text-white" >
                                Detail
                            </NuxtLink>
                        </div>
                        
                    </div>
    
                </div>
                <div class="text-center flex justify-center my-6">
                    <p @click="loadMore" class="bg-gray-800 cursor-pointer     px-6 py-1 rounded text-white">
                        <span v-if="!loading">Load More</span>
                        <span v-else>Loading...</span>
                    </p>
                </div>
                
            </div>  
            </section>
        </div>
    </div>
</template>

<script setup>
import {onMounted} from "vue"

const limit = ref(3)
const offset = ref(10)
const page = ref(1)
const posts = ref([])
const loading = ref(false)


const getPosts = async () =>{
    loading.value = true
    let {data} = await useFetch(`https://jsonplaceholder.typicode.com/posts?_page=${page.value}&_limit=${limit.value}`)
     posts.value = [...posts.value,...data.value]
    loading.value = false
}

getPosts()

const loadMore = () =>{
       page.value=page.value+1
       getPosts();
}
</script>