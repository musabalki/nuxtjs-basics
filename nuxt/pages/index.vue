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
        {{ count }}
    </div>
</template>

<script setup>
//import {useUtils} from '../composables/useUtils'
const {count,getCount,setCount} = useUtils();


</script>