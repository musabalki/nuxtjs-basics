<template>
    <div class="container mx-auto rounded ">
        <div class="bg-gray-50 p-5 text-center">
            <h1 class="font-bold text-2xl pb-5">{{data.title}}</h1>
            <p class="pb-5"> {{data.body}}</p>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
let {data} = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
console.log(data.value)
</script>