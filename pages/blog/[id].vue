<template>
    <div class="container mx-auto rounded ">
        <div class="bg-gray-50 p-5 text-center">
            <h1 class="font-bold text-2xl pb-5">{{data.title}}</h1>
            <p class="pb-5"> {{data.body}}</p>
            <div class="flex justify-between">
                <button @click="change('prev')" class="bg-green-500 text-white px-4 py-2 rounded">Prev</button>
                <button @click="change('next')" class="bg-green-500 text-white px-4 py-2 rounded">Next</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const api = useRuntimeConfig();


let {data} = await useFetch(`${api.public.apiBase}/posts/${route.params.id}`)

const change = (p) =>{
    if(p=='prev' && route.params.id>0){
        router.push(`/blog/${parseInt(route.params.id)-1}`)
    }else if(p=='next' && route.params.id>0){
        router.push(`/blog/${parseInt(route.params.id) +1}`)
    }
}

</script>