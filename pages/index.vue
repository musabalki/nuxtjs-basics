<template>
    <div>
        index page
        <Alert>
            HOME PAGE
        </Alert>
        <Profile/>
        <ProfileHeader/>
        <!-- <img src="@/assets/" alt=""> -->
        <button class="px-4 py-2 rounded bg-cyan-500 text-white" @click="setCount(2)">Count</button>

        <div v-if="pending==false">
            <div v-for="d in data" :key="d.id">
                {{ d.title }}
            </div>
        </div>
        <div v-else>
            loading
        </div>
    </div>
</template>

<script setup >
//const {data} = await useFetch("https://jsonplaceholder.typicode.com/posts")
const {data,pending} = await useLazyFetch("https://jsonplaceholder.typicode.com/posts")
//import {useUtils} from '../composables/useUtils'
/*definePageMeta({
    middleware:"auth"
})
const {count,getCount,setCount} = useUtils();
const res = await $fetch('/api/hello')
console.log(res)*/
</script>