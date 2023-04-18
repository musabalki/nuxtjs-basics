<template>
    <div class="container mx-auto rounded ">
        <div class="bg-gray-50 p-5 text-center">
            <h1 class="font-bold text-2xl pb-5">{{data.title}}</h1>
            <p class="pb-5"> {{data.body}}</p>
            <div class="flex justify-between">
                <button @click="change('prev')" class="bg-green-500 text-white px-4 py-2 rounded">Prev</button>
                <button @click="change('next')" class="bg-green-500 text-white px-4 py-2 rounded">Next</button>
            </div>
            <div>Posts</div>
            <div class="border p-5 my-5 rounded bg-gray-200">
                <h2 class="font-semibold text-sm">{{ rand1.title }}</h2>
                <p class="font-semibold text-sm">{{rand1.body}}</p>
            </div>
            <div class="border p-5 my-5 rounded bg-gray-200">
                <h2 class="font-semibold text-sm">{{ rand2.title }}</h2>
                <p class="font-semibold text-sm">{{rand2.body}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

const route = useRoute();
const router = useRouter();
const api = useRuntimeConfig();

const randVal = Math.floor(Math.random()*100+1)
const randVal2 = Math.floor(Math.random()*100+1)

let {data} = await useFetch(`${api.public.apiBase}/posts/${route.params.id}`)

const { data:rand1 } = await useAsyncData('rand1', () => $fetch(`${api.public.apiBase}/posts/${randVal}`))
const { data:rand2 } = await useAsyncData('rand2', () => $fetch(`${api.public.apiBase}/posts/${randVal2}`))

const change = (p) =>{
    if(p=='prev' && route.params.id>0){
        router.push(`/blog/${parseInt(route.params.id)-1}`)
    }else if(p=='next' && route.params.id>0){
        router.push(`/blog/${parseInt(route.params.id) +1}`)
    }
}



</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

